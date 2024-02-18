/* EJERCICIO 5 //
El programa “elige” un número al azar entre uno y un millón y pregunta por el mismo. El
visitante intenta acertar en una ventana emergente. Tras cada respuesta, una nueva
ventana dice “el número es Mayor” o “el número es Menor” y se pide un nuevo número,
hasta que el usuario lo acierta. En ese momento una ventana lo felicita y muestra el número
de intentos que ha realizado hasta el acierto. */
cont=0;
for (let i=0; i<50; i++){   //+1 para que no incluya el 0
    const num= Math.floor(Math.random()*100)+1; /*Math.floor(x) Devuelve el valor de x redondeado hacia abajo a su entero más cercano*/
   do {
   let num1= prompt("Ingrese un un numero de 1 a 100 y tratare de adivinarlo"); 
          cont ++;
    if (num > num1)  {
        prompt("Ingrese un numero mayor");
        } else (num<num1)
        {
            prompt("Ingrese un numero menor");
        }
        
    }while
        (num == num1){
            prompt("Adivinaste");
    }
    console.log("Acerto en :" + cont +"intentos");                       /*random()	Returns a random number between 0 and 1*/
}