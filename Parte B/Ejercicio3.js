var patron = /^\D{4,}/;
var patron_mail = /^@(\.[a-zA-Z]{5,})$/s
function validar() {
    var nombre = document.getElementById("nombre").values;
    var edad = document.getElementById("edad").value;
    var mail = document.getElementById("mail").values;
let textoError
    if (!patron.test(nombre)) {
        alert("la longitud del nombre sea mayor de cuatro caracteres. El nombre sólo debe contener caracteres del alfabeto español")
        return false;
    } else if (!patron_mail.test(mail)) {
        alert("La edad sólo debe contener números y estar comprendido entre 18 y 30.")
        return false;
    }
    else if (edad < 18 || edad > 30) {
        alert("La edad debe ser entre 18 y 30"); return false;
    }
    return true;
}
