/* EJERCICIO 6 //

/*Leer una cadena de texto desde un prompt y generar un array con la función split().
Posteriormente, mostrar la siguiente información: Número de palabras, primera palabra,
última palabra, las palabras colocadas en orden inverso, las palabras ordenadas de la “a”
hasta la “z” y las palabras ordenadas de la “z” hasta la ”a”.

//El método split() divide un objeto de tipo String en un array (vector) de cadenas mediante
 la separación de la cadena en subcadenas.*/
/*
 var cadena=prompt("Ingrese una cadena de palabras ");
 //cadena debe ser string para usar split necesita un delimitador en este caso un espacio
 let array=cadena.split(" ");
 // .length para el largo de la palabra [0,1,2] longitud 3
 console.log("La cantidad de palabras es; "+array.length);   
 console.log("La primera  palabras es; "+array[0]);  
 console.log("La ultima  palabras es; "+array[array.length-1]);

 let invertir=array;

 console.log("Las palabras colocadas en orden inverso son : "+invertir.reverse());
 console.log("Las palabras ordenadas de la A a la Z : "+array.sort());
// la funcion  compara dos elementos
 console.log("Las palabras ordenadas de la Z a la A : "+array.sort((a,b)=> b.localeCompare(a)));
*/

 /////OTRA FORMA ///


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
