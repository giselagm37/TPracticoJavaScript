function agregarUsuario() {
  // Obtener los valores de los campos del formulario
  var nombreu = document.getElementById("nombre").value.trim();
  var apellidou = document.getElementById("apellido").value.trim();
  var telefonou = document.getElementById("telefono").value.trim();
  var direccionu = document.getElementById("direccion").value.trim();
  var usuarioidu = document.getElementById("usuario").value.trim();
  var contrasenau = document.getElementById("contrasena").value.trim();

  var textoerror = document.getElementById("texError");

  // Validar que los campos no estén vacíos
  if (nombreu === "" || apellidou === "" || telefonou === "" || direccionu === "" || usuarioidu === "" || contrasenau === "") {
    textoerror.innerHTML = "COMPLETE TODOS LOS CAMPOS";
    setTimeout(function() {
      textoerror.innerHTML = "";
    }, 4000);
  } else {
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
  }
}

