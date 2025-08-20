/*Determinar si una frace o palabra es palindromo*/

function textoPalindromo(cadena){
    //llevar todo a minusculas y definr parametro de busqueda
    const cadenaLimpia = cadena.toLowerCase().replace(/[^a-z0-9]/g, '');
    //invertir la cadena
    const cadenaInvertida = cadenaLimpia.split('').reverse().join('');
    //comparar las cadenas 
    return cadenaLimpia === cadenaInvertida;
}
const texto = ("reconocer");
const validacion = textoPalindromo(texto);
console.log(validacion);