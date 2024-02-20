/* Ejercicio 1 //
Realiza una página que muestre un formulario y verifique la entrada de un número que
esté comprendido entre 1 y 100. */

function validar(){
  // OBTENEMOS EL VALOR DEL CAMPO ENTRADA
  let x = document.getElementById("numero").value;
  // If x is Not a Number or less than one or greater than 10
  let text;
  if (isNaN(x) || x < 1 || x > 100) {
    text = "Ingrese un numero de 1 a 100";
  } else {
    text = "Numero correcto";
  }
  document.getElementById("mensaje").innerHTML = text;
}