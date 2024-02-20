function chequear() {
    let validarPatron = /^[a-z||A-Z||0-9||.||_||-]+@[a-z||A-Z||0-9||-]{1,}(\.[a-zA-Z]{2,})$/;
    let validarUser = document.getElementById("username").value;
    let validarPass = document.getElementById("password").value;

    if (validarPatron.test(validarUser) && validarPass) {

        return true;
    } else {
        alert("Usuario y/o clave incorrecto");
        return false;
    }

}