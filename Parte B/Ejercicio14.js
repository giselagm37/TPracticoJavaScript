var patronuser = /[A-Z][a-zA-Z0-9]*[0-9]{3,}/;
var patronpass = /[0-9].*[A-Z].*[0-9]/;

var lab = document.getElementById("mensaje");
var labpas = document.getElementById('mensaje2');

function validar() {
    let miformulario = document.forms["loginForm"];
    let user = miformulario.usuario.value;
    let pas = miformulario.contrasena.value;

    if (!patronuser.test(user)) {
        lab.innerText = "Debe comenzar con una letra mayúscula y tener al menos 3 números en cualquier posición.";
        setTimeout(limpiaruser, 3000);
        miformulario.usuario.value = "";
        return false;
    } else if (!patronpass.test(pas)) {
        labpas.innerHTML = "Debe tener una longitud mínima de 8 caracteres, comenzar con un número y terminar con una letra mayúscula seguida de otro número.";
        setTimeout(limpiarpass, 3000);
        miformulario.contrasena.value = "";
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
