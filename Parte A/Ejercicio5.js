/* EJERCICIO 5 //
El programa “elige” un número al azar entre uno y un millón y pregunta por el mismo. El
visitante intenta acertar en una ventana emergente. Tras cada respuesta, una nueva
ventana dice “el número es Mayor” o “el número es Menor” y se pide un nuevo número,
hasta que el usuario lo acierta. En ese momento una ventana lo felicita y muestra el número
de intentos que ha realizado hasta el acierto. */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

var num = getRandomInt(1, 1000000);
console.log(num);
var contador = 0;
do {
    numero = prompt('acierta el numero')
    if (isNaN(numero)) {
        contador++
        if (num > numero) {
            consola.log("el número es Menor")
        } if (num < numero) {
            console.log("el número es Mayor");
        }
    }
} while (num != numero)
console.log(" EXITO")
console.log('cantidad de intentos ' +contador)
