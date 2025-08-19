/* Determinar el numero mayor en un arreglo
* crear una funcion que reciba un array
* validamos si el array no esta vacio
* creamos una variable para almacenar el numero mayor
* creamos un ciclo for para iterar y comparar en cada iteracion los elementos
* mostrar el valor mas alto*/

function numMayor(arr){
    if(arr.length===0){
        return "arreglo vacio"
    }

    let datoMayor = [0];

    for(i=1; i < arr.length; i++){
        if(arr[i]>datoMayor){
            datoMayor = arr[i];
        }
    }
    return datoMayor;
}
//Caso uso
const numero = [4,9,1,2];
// creamos una variable para almacenar el resultado e invocamos la funcion y le pasamos el parametro
const digitoMayor = numMayor(numero);
// consulta
console.log(digitoMayor);
/////////////////////////

function numMax(arr){
    return Math.max(...arr);
}
//Caso de uso
const digito = [8,4,6,2];
const maxnumero = numMax(digito);
console.log(maxnumero);

///////calculo del numero Minimo

function numMin(arr){
    return Math.min(...arr);
}
//Caso de uso
const digitos = [8,4,6,2];
const minNum = numMin(digitos);
console.log(minNum);








