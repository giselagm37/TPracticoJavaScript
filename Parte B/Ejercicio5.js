/* EJERCICIO 5 //
Realice una página donde el usuario pueda cargar un contacto. El contacto de esa
persona debe tener al menos un teléfono y como máximo 3. Además debe ser obligatoria la
carga del mail. Realice las validaciones necesarias. */

function validar() {
    // OBTENEMOS EL VALOR DEL CAMPO ENTRADA

    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let telefono = document.getElementById('telefono').value;
    let mail = document.getElementById('mail').value;

    
    if (nombre ==='' || apellido ==='' || telefono ==='' || mail ==='') {
        alert('Por favor complete todos los campos')
        return false;
    } else {
        alert("FORMULARIO ENVIADO"); 
        return true;
    }
   
}


