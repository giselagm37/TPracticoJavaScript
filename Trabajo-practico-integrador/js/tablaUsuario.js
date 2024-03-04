function agregarUsuario() {
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var telefono = document.getElementById("telefono").value;
    var direccion = document.getElementById("direccion").value;
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;
  
    // Crear una nueva fila en la tabla
    var tablaBody = document.getElementById("tablaBody");
    var fila = tablaBody.insertRow();
    var celdaNombre = fila.insertCell(0);
    var celdaApellido = fila.insertCell(1);
    var celdaTelefono = fila.insertCell(2);
    var celdaDireccion = fila.insertCell(3);
    var celdaUsuario = fila.insertCell(4);
    var celdaContrasena = fila.insertCell(5);
  
    // Llenar las celdas con la información ingresada por el usuario
    celdaNombre.innerHTML = nombre;
    celdaApellido.innerHTML = apellido;
    celdaTelefono.innerHTML = telefono;
    celdaDireccion.innerHTML = direccion;
    celdaUsuario.innerHTML = usuario;
    celdaContrasena.innerHTML = contrasena;
  
    // Mostrar la tabla
    document.getElementById("tablaUsuarios").style.display = "table";
  }