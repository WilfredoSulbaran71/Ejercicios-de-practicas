/*Mulltiplicar los elementos de un arreglo*/

function multiplicarArreglo(arr){
    //Validamos los datos para saber si el arreglo no esta vacio
    if(arr.length===0){
        console.log("El arreglo esta vacio")
        return 0;
    }
    //Declaramos una variable que funciona como un acumulador para guardar cada elemento del arreglo
    let acumulador = 1; //lo inicializamos en 1 para no multiplicar  por 0

    //Crear un ciclo for para iterar en cada elemento del array

    for(let i = 1; i< arr.length; i++ ){
        acumulador *= arr[i]; // multiplicamos  el acumulador por el elemento actual
    }
    return acumulador;
}
//Caso de uso

const numeros = [1,2,3];
const totales = multiplicarArreglo(numeros);

console.log(totales);
