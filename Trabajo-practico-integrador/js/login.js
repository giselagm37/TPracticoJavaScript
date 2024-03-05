function validar(){
var contrase = document.getElementById("contrasena").value;
var user = document.getElementById("usuario").value;
var texerroruser = document.getElementById("texerroruser");
/* creamos Los patrones de validacion de los campos */
const patron = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/;
/* creamos un arreglo y Le cargamos Los valores de Los campos */
const datos = [usuario.value,contrase.value];
console.log(`nnnnnnnnn`);
if(!user.value ==`d` ){
   texerroruser.innerHTML = "usuario incorrecto"
   console.log(`ddddddd`);
   return false;
   
}
return true;
}