var patronuser = /[A-Z][a-zA-Z0-9]*[0-9]{3,}/;
var patronpass = /[0-9].*[A-Z].*[0-9]/;
// user es un imput
var user = document.getElementById("usuario");
// pas es un imput
var pas = document.getElementById('contrasena');
var lab = document.getElementById("mensaje");
var labpas = document.getElementById('mensaje2');

function validar() {
    if (!patronuser.test(user.value)) {
        lab.innerText = "Debe comenzar con una letra mayúscula y tener al menos 3 números en cualquier posición.";
        setTimeout(limpiaruser, 3000);
        user.value = "";
        return false;
    } else if (!patronpass.test(pas.value)) {
        labpas.innerHTML = "Debe tener una longitud mínima de 8 caracteres, comenzar con un número y terminar con una letra mayúscula seguida de otro número.";
        setTimeout(limpiarpass, 3000);
        pas.value = ""
        return false;
    }

    return true;
}

function limpiaruser() {
    lab.innerHTML = "";
    
}

function limpiarpass() {
    labpas.innerHTML = "";
 
}