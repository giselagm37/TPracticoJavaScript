//* Ejercicio 7 //
//Realiza una página que muestre un formulario para la conversión de Pesos a Dólares y
//viceversa. Los campos del formulario han de poder ser limpiados.//

console.log("probando")
function convertir() {
    const cantidad = document.getElementById("cantidad").value;
    const conversion = document.getElementById("conversion").value;
    const cambio = 850;  // Cambio fijo, puedes ajustarlo según el valor actual
     //validamos que el ingreso sean solo numeros con el isNaN//
    if (!isNaN(cantidad)) {
        let resultado;
// resultado = Math.round(cantidad * cambio)   redondea
// resultado = numero.toFixed(2)  dos decimales despues de la coma 
// Number(numero) convierte un valor en un número. Si el valor no se puede convertir, se devuelve NaN.
// parseFloat() analiza una cadena y devuelve el primer número
// resultado = parseInt(cantidad / cambio)  El método analiza un valor como una cadena y devuelve el primer entero.
        if (conversion === "dolares") {
            resultado = cantidad * cambio;
            document.getElementById("resultado").innerHTML = "Obtuvo $ " + resultado + " pesos";
            document.getElementById("resultado").style.backgroundColor = "red";
        } else if (conversion === "pesos") {
            resultado = cantidad / cambio;
            document.getElementById("resultado").innerHTML = "Obtuvo U$S " + resultado.toFixed(2)+ " Dólares";
            document.getElementById("resultado").style.backgroundColor = "red";
        }
    } else {
        alert("Ingrese una cantidad válida.");
    }
}
function borrar(){
    document.getElementById("cantidad").value = "";
    document.getElementById("resultado").innerHTML = "";
}
/*
1   dolar   ---> 850     pesos
200 dolares ---> 170000  pesos

850 pesos  ----> 1 dolar
1 peso ---->  0.0011 */