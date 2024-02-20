/* EJERCICIO 6 //

Leer una cadena de texto desde un prompt y generar un array con la función split().
Posteriormente, mostrar la siguiente información: Número de palabras, primera palabra,
última palabra, las palabras colocadas en orden inverso, las palabras ordenadas de la “a”
hasta la “z” y las palabras ordenadas de la “z” hasta la ”a”.*/

var cadena = prompt("ingresar una cadena");
var separador =' '
var areglo_cadena = cadena.split(separador); 
console.log("arreglo " + areglo_cadena)
console.log('cantidad de palabras en el arreglo : ' + areglo_cadena.length);
console.log(' primer palabra en el arreglo : ' + areglo_cadena[0]);
console.log('ultima palabra del arreglo : ' + areglo_cadena[areglo_cadena.length - 1]);
console.log(' Arreglo inverso ' + areglo_cadena.reverse());
console.log('Arreglo ordenado de A-Z : ' + areglo_cadena.sort());
console.log('Arreglo ordenado de Z-A : ' + areglo_cadena.sort().reverse());
