/* EJERCICIO 10 //
Realice una página que permita cargar una fecha en el formato DD-MM-YYYY y diga
cuántos días faltan o ya pasaron respecto del día de hoy.*/

var armado = " "
function valido(fecha) {
    var patron = /^(\d{2}|\d)(-)(\d{2}|\d)(-)\d{4}$/;
    console.log(111111)
    var validacion = patron.test(fecha);
    if (validacion != false) {
        console.log(3333)

        let armoFecha = fecha.split("-");
        let invierto = armoFecha.reverse();
        let tomoFecha = new Date(invierto);
        if (tomoFecha != "invalid date") {
            let fechaHoy = new Date();
            let referencia = 86400000;
            let diferencia = fechaHoy - tomoFecha;
            let difFinal = Math.floor(diferencia / referencia);
            if (difFinal > 0) {
                armado = "Entre la fecha ingresada y la fecha de hoy , han pasado " + difFinal + " dias ";
            } else if (diferencia < 0) {
                armado = "Faltan " + (-1 * difFinal) + " dias para la fecha ingresada ";
            } else {
                armado = " La fecha ingresada es igual a la fecha de hoy ";
            }
      return document.getElementById("texto").innerHTML = armado;
        } else {
            alert("La fecha ingresada no es una fecha valida\n " + "Revise los datos ingresados")
        }
    }else {
        alert("La fecha ingresada no es una fecha valida\n " + "Revise los datos ingresados")
    }
}