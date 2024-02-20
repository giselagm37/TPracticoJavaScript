/* EJERCICIO 7 //

Cree un archivo html que muestre una frase al azar cada vez que se cargue. Las frases
deberán estar en otro archivo independiente, del tipo .js. */

var frases =[ 
    "Haz de cada día tu obra maestra ",
    "Dale a cada día la posibilidad de ser el mejor día de tu vida", 
    "La suerte para triunfar en la vida se llama creer en ti",
    "Cada mañana nacemos de nuevo, Lo que hacemos hoy es lo que más importa",
    "Escribe en tu corazón que cada día es el mejor día del año",
    "Da siempre lo mejor de ti cada dia. Lo que plantas ahora, se cosechara mas tarde",
    "Cada día nos trae nuevas posibilidades" ];

function frase(){
    var indice= Math.floor(Math.random() * frases.length);
    console.log("Buen dia")
    document.getElementById("frase").innerHTML=frases[indice];
}