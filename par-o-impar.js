//Comprobar si un numero es par o impar

function comprobarNum(numero){
    //aplicamos el condicional if - else y para el calculo, usamos el operadolo "Modulo"

    if(numero % 2 === 0){
        console.log("El numero " + numero + " es Par")
    }else{
        console.log("El numero " + numero + " es Impar")
    }
}

// Invocar la funsion con el paramentro

comprobarNum(9);