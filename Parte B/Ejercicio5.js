/* EJERCICIO 5 //
Realice una página donde el usuario pueda cargar un contacto. El contacto de esa
persona debe tener al menos un teléfono y como máximo 3. Además debe ser obligatoria la
carga del mail. Realice las validaciones necesarias. 

//let nombre = document.querySelector(#nombre) necesita que se le especifique si es id /*/
/*console.log("prueba de archivo vinculado")

const prueba = document.getElementById("contenedor").value;
const pru = document.querySelector("#contenedor")
const caja = document.getElementsByClassName("contenedor") //coleccion//

console.log(prueba);
console.log(pru);
console.log(caja);  */
console.log("probando")

var correo = /^@(\.[a-zA-Z]{5,})$/s
function validar(){
const nombre = document.getElementById("nombre").value
const apellido = document.getElementById("apellido").value
const telefono = document.getElementById("telefono").value
const correo = document.getElementById("correo").value

if (
    nombre === '' ||
    apellido === '' ||
    correo === '' ||
    telefono === '' ||
    !nombreApelli.test(nombre) ||
    !nombreApelli.test(apellido) ||
    !telefonopatron.test(telefono) ||
    !correopatron.test(correo)
) {
    alert('Debe completar todos los campos correctamente');
    return false;
    }else {
    alert(' formulario completo')
    return false
}

}
