/* EJERCICIO 5 //
El programa “elige” un número al azar entre uno y un millón y pregunta por el mismo. El
visitante intenta acertar en una ventana emergente. Tras cada respuesta, una nueva
ventana dice “el número es Mayor” o “el número es Menor” y se pide un nuevo número,
hasta que el usuario lo acierta. En ese momento una ventana lo felicita y muestra el número
de intentos que ha realizado hasta el acierto.

  
     Math.floor(x) Devuelve el valor de x redondeado hacia abajo a su entero más cercano
     random()	Returns a random number between 0 and 1
     !isNan  valida que sea un numero*/
    


var num=Math.floor(Math.random ()*100);
let contador=0;
let limInferior=0;
let limSuperior=100;

while( true){
    var num1=parseInt(prompt("Adivine un numero entre "+ limInferior +" y "+ limSuperior));
    if(num ===num1){
        alert("Adivinaste! en " + contador + " intentos ");
        contador++;
        break;
    }else{
            if(num1<num){
                alert("Es mas alto");

                }else{
                alert("Es mas bajo")
                }
            }contador++;
        }
    



