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
const nombreApelli = /\w*/;
const telefonopatron = /^\d{10}$/; // Asumiendo que el teléfono tiene 10 dígitos
const correopatron = /^@(\.[a-zA-Z]{5,})$/;

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
} else {
    alert('Formulario completo');
    return true; // Cambiado a true para permitir el envío del formulario cuando es válido
}
}