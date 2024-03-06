let datosMostrados = false;
function validacion() {
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const textarea = document.getElementById("mensaje");
    const texErrorNombre = document.getElementById("texErrorNombre");
    const texErrorEmail = document.getElementById("texErrorEmail");
    const texErrorMensaje = document.getElementById("texErrorMensaje");
    
    
    const patronNombre = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/;
    const patronEmail = /^[a-zA-Z0-9_%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const patronMensaje = /^[a-zA-Z0-9.-_?,!\s]+$/;

    
    texErrorNombre.innerHTML = "";
    texErrorEmail.innerHTML = "";
    texErrorMensaje.innerHTML = "";

    
    if (!patronNombre.test(nombre.value)) {
        texErrorNombre.innerHTML = "Nombre incorrecto";
        return false;
    }

    
    if (!patronEmail.test(email.value)) {
        texErrorEmail.innerHTML = "Email incorrecto";
        return false;
    }

    
    if (!patronMensaje.test(textarea.value)) {
        texErrorMensaje.innerHTML = "Mensaje incorrecto";
        return false;
    }

    if (!datosMostrados) {
        mostrarDatosEnviados(nombre.value, email.value, textarea.value);
        datosMostrados = true;
    }
    
    return true;
}

function mostrarDatosEnviados(nombre, email, mensaje) {
    const datosEnviadosDiv = document.createElement("div");

    datosEnviadosDiv.style.border = "1px solid #240606";
    datosEnviadosDiv.style.borderRadius = "8px";
    datosEnviadosDiv.style.backgroundColor = "rgba(0, 0, 0, 0.5);";
    datosEnviadosDiv.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
    datosEnviadosDiv.style.padding = "20px";

    
    const tituloDatosEnviados = document.createElement("h2");
    tituloDatosEnviados.textContent = "DATOS ENVIADOS";
    datosEnviadosDiv.appendChild(tituloDatosEnviados);

    const nombreParrafo = document.createElement("p");
    nombreParrafo.textContent = "Nombre: " + nombre;
    datosEnviadosDiv.appendChild(nombreParrafo);

    const emailParrafo = document.createElement("p");
    emailParrafo.textContent = "Email: " + email;
    datosEnviadosDiv.appendChild(emailParrafo);

    const mensajeParrafo = document.createElement("p");
    mensajeParrafo.textContent = "Mensaje: " + mensaje;
    datosEnviadosDiv.appendChild(mensajeParrafo);

    // Agrega los datos enviados al final del formulario
    const contenedorFormulario = document.querySelector(".contenedor");
    contenedorFormulario.appendChild(datosEnviadosDiv);
}