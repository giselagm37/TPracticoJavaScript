function agregarUsuario() {
  // Obtener los valores de los campos del formulario
  var nombreu = document.getElementById("nombre").value;
  var apellidou = document.getElementById("apellido").value;
  var telefonou = document.getElementById("telefono").value;
  var direccionu = document.getElementById("direccion").value;
  var usuarioidu = document.getElementById("usuario").value;
  var contrasenau = document.getElementById("contrasena").value;


  var textoerror = document.getElementById("texError");
 if (nombreu == " ") {

  textoerror.innerHTML= "COMPLETE TODOS LOS CAMPOS";
  setTimeout(function() {
    textoerror.innerHTML = "";
  }, 4000);
}else{

  let usuario = {
      usuarioid: usuarioidu,
      contrasena: contrasenau,
      nombre: nombreu,
      apellido: apellidou,
      telefono: telefonou,
      direccion: direccionu,
      login: false
  };

  // Almacenar en localStorage
  localStorage.setItem("user", JSON.stringify(usuario));

  // Redireccionar a otra página
  window.location.href = "login.html"; // Cambia "nueva_pagina.html" por la URL de la página a la que deseas redireccionar
}}
