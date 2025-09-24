 <?php
session_start(); // Necesario para usar sesiones

// Inicializar la lista de productos en sesión si no existe
if (!isset($_SESSION['productos'])) {
    $_SESSION['productos'] = [];
}

    // Verificar si el formulario ha sido enviado
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $nombreProducto = $_POST['nombreProducto']??"";
        $precioOriginal = $_POST['precioOriginal']?? 0;
        $cantidad = $_POST['cantidad']?? 0;

    //convertimos a numeros
    $precioOriginal = floatval($precioOriginal);
    $cantidad = intval($cantidad);
    
    
    //calcular subtotal
    $subtotal = $precioOriginal * $cantidad;
   
// Guardar producto en la sesión
$_SESSION['productos'][] = [
    "nombre"   => $nombreProducto,
    "precio"   => $precioOriginal,
    "cantidad" => $cantidad,
    "subtotal" => $subtotal
];

}

// Calcular total general
$totalGeneral = 0;
foreach ($_SESSION['productos'] as $p) {
    $totalGeneral += $p['subtotal'];
}

// Opción para reiniciar la lista
if (isset($_GET['reset'])) {
    $_SESSION['productos'] = [];
    header("Location: ".$_SERVER['PHP_SELF']); // Recargar la página limpia
    exit;
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de descuentos</title>
</head>
<body>
   <h1>Calculadora de Descuentos</h1>

   <form method="POST" action="">
        <label for="nombreProducto">Nombre del Producto:</label>
        <input type="text" id="nombreProducto" name="nombreProducto" required><br><br>

        <label for="precioOriginal">Precio Original:</label>
        <input type="number" step="0.01" id="precioOriginal" name="precioOriginal" required><br><br>

        <label for="cantidad">Cantidad:</label>
        <input type="number" id="cantidad" name="cantidad" required><br><br>

        <label>Descuento:</label>
            <select name="descuento">
                <option value="0">Sin descuento</option>
                <option value="10">10%</option>
                <option value="20">20%</option>
                <option value="30">30%</option>
            </select>
            <br><br>


        <input type="submit" value="Calcular Subtotal">
    </form>

    <?php if (!empty($_SESSION['productos'])): ?>
   <h2>Productos agregados:</h2>
   <table border="1" cellpadding="8" cellspacing="0">
       <tr>
           <th>Nombre</th>
           <th>Precio Unitario</th>
           <th>Cantidad</th>
           <th>Subtotal</th>
       </tr>
       <?php foreach ($_SESSION['productos'] as $producto): ?>
           <tr>
               <td><?php echo htmlspecialchars($producto['nombre']); ?></td>
               <td>$<?php echo number_format($producto['precio'], 2); ?></td>
               <td><?php echo $producto['cantidad']; ?></td>
               <td>$<?php echo number_format($producto['subtotal'], 2); ?></td>
           </tr>
       <?php endforeach; ?>
   </table>

   <h3>Total General: $<?php echo number_format($totalGeneral, 2); ?></h3>
<?php
// Aplicar descuento si existe
$descuento = isset($_POST['descuento']) ? (int)$_POST['descuento'] : 0;
$montoDescuento = ($totalGeneral * $descuento) / 100;
$totalConDescuento = $totalGeneral - $montoDescuento;

   
   echo "<p>Descuento aplicado: $descuento% </p>";
   echo "<h3>Total con Descuento: $" . number_format($totalConDescuento, 2) . "</h3>";

?>
   <a href="?reset=1">🔄 Reiniciar Lista</a>
<?php endif; ?>

    
</body>
</html>