/* determinar cuantas vocales se encuentran en una cadena
1. determinar si la cadena no esta vacia
2. convertir la cadena a minisculas para estandarizar
3. crear una variable para almacenar las vocales que se buscaran
4. Crear un contador para almacenar las vocales encontradas
5. crear un ciclo for para iterar en la cadena
6. comparar la cadena con las vocales que se buscan
7. crear una variable para mostrar el resultado*/

function conteoVocales(cadena){
    if(cadena.length === 0){
        console.log("La cadena esta vacia");
    }
    const cadenaMinuscula = cadena.toLowercase();
    const vocales = 'aeiuo';
    let contador = 0;
    for(let i = 0; i<cadenaMinuscula.length; i++ ){
        const caracter = cadenaMinuscula[i];
        //validamos si se encuentran las vocales
        if(vocales.includes(caracter)){
            contador++;
        }
    }
    return contador;
}
//caso de uso
const texto = "Hola mundo";
const numVocales = conteoVocales(texto);
console.log("En la cadena: "+ textos +", Existen " + numVocales + " vocales");
