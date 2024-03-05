function validar() {
   var contrase = document.getElementById("contrasena");
   var user = document.getElementById("usuario");
   var texerroruser = document.getElementById("texerroruser");
 /* creamos Los patrones de validacion de los campos */
 const patron = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/;
 /* creamos un arreglo y Le cargamos Los valores de Los campos */
 const datos = [usuario.value,contrase.value];
   if (user.value.toLowerCase() !== 'guido') {
     texerroruser.innerHTML = "Usuario incorrecto";
     return false;
   }
 
   return true;
 }