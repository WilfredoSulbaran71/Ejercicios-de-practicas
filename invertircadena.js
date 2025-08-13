// Invertir una cadena: 

//Variable que recibe el texto
const recibeTexto = "Hola que tal Wilfredo";

//Funcion para invertir el texto
function invertirTexto(texto){
    //convertir el texto en un array
    const textoCadena = texto.split('');
    //invertir el orden de los caracteres
    const invertirOrden = textoCadena.reverse();
    //Crear una nueva cadena
    const nevaCadena = invertirOrden.join('');
    //mostramos el resultado
    return nevaCadena;
}

//Invocamos la funcion y creamos una variable que va a almacenar el resultado
const nuevoTexto = invertirTexto(recibeTexto);
//Para ver el resultado en la consola
console.log(nuevoTexto);
