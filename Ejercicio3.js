/* EJERCICIO 3 //

Analice y repare el código para que se impriman todos los valores excepto los números.</h3>

var lista = new Array ('a','b','c','1','x','9',’d’,’4);
var item ;
for (item in lista)
{
if (lista[item] == "1" or “9”)
break;
console.log(lista[item]);
}*/
var lista = ['a', 'b', 'c', '1', 'x', '9', 'd', '4'];  // es lo mismo  var lista= ['a','b' ]

for (var item of lista) {
    // Verificar si el elemento no es un número del 1 al 9
    if (!(item >= '1' && item <= '9')) {   //break te saca del bucle
        console.log(item);
    }
}
////OTRA FORMA ////
var lista = ['a', 'b', 'c', '1', 'x', '9', 'd', '4'];

for (var item in lista) {
    if (isNaN(lista[item])){   //isNan incluye cualquier numero
        console.log(lista[item]);
    } 
}