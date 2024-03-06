function validar() {
  var contrase = document.getElementById("contrasena");
  var user = document.getElementById("usuario");
  var texerroruser = document.getElementById("texerroruser");
  
  // Creamos los patrones de validación de los campos
  const patron = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/;
  
  // Creamos un arreglo y le cargamos los valores de los campos
  const datos = [user.value, contrase.value];
  try {
    
  
  let dato = localStorage.getItem("user");
  let usr = JSON.parse(dato);

  // Verificamos si el usuario y la contraseña son correctos
  if (usr.usuarioid !== datos[0] || usr.contrasena !== datos[1]) {
    texerroruser.innerHTML = "Usuario y/o Contraseña Inválidos";

    // Establecemos un timeout para borrar el mensaje de error después de 5 segundos
    setTimeout(function() {
      texerroruser.innerHTML = "";
    }, 4000);

    return false;
  }

  // Establecer el login a true
  usr.login = true;
  console.log(usr);

  // Guardar los cambios en localStorage
  localStorage.setItem("user", JSON.stringify(usr));

  return texerroruser;

} catch (error) {
  texerroruser.innerHTML = "CREAR USUARIO";
  setTimeout(function() {
    texerroruser.innerHTML = "";
  }, 4000);
  return false
}
}
