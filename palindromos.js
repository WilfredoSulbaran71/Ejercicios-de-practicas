/*Determinar si una frace o palabra es palindromo*/

function textoPalindromo(cadena){
    //validacion de los datos
    if(typeof cadena !=='string'){
        return "Error: la entrada no es una cadena de texto"
    }
    if(cadena.length===0){
        return "Error: la cadena esta vacia"
    }
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