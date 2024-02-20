/* EJERCICIO 4 //

Haz un programa que escriba 50 números aleatorios enteros entre 1 y 6. Usar el método
    random de la clase Math.
    */

for (let i=0; i<50; i++){   //+1 para que no incluya el 0
  const num= Math.floor(Math.random()*6)+1; /*Math.floor(x) Devuelve el valor de x redondeado hacia abajo a su entero más cercano*/
    console.log(num);                       /*random()	Returns a random number between 0 and 1*/
}    
