/* EJERCICIO 2 //
Realice un formulario que contenga Nombre, Apellido, Sexo, Fecha de nacimiento y mail.
Luego realice las validaciones para cada uno de los campos.*/

function validar(){
    // OBTENEMOS EL VALOR DEL CAMPO ENTRADA
    let nombre= document.getElementById('nombre').value;
    let apellido= document.getElementById('apellido').value;
    let sexo= document.getElementById('sexo').value;
    let FechaNacimiento= document.getElementById('FechaNacimiento').value;
    let mail= document.getElementById('mail').value;
    
    
    if (nombre ==='' || apellido ==='' || sexo ==='' || FechaNacimient ==='' || mail==='') {
        alert('Por favor complete todos los campos')
      return false;
    } else {
        alert("FORMULARIO ENVIADO");
      return true;
    }
  

  }
  