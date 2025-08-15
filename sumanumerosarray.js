//Determinar la suma de todos los elementos de un Array
// aplicando una funcion que recibe un paramentro, se aplica un ciclo for para
//iterar y poder sumar todos los elementoss del array

function sumaDatos(datoArray){
    // almacena la suma de cada elemento
    let suma = 0;
    // aplicar ciclo for para iterar en cada elemento
    for(i=0; i < datoArray.length; i++){
        suma += datoArray[i]
    }
    // retornamos el resultado de la suma
    return suma;

}

const datoNum = [1,6,3,4];
const totalSum = sumaDatos(datoNum);

console.log(totalSum);

