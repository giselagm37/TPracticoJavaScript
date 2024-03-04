function validacion(){
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("e-mail");
    const textarea = document.getElementById("textarea");
    /* creamos Los patrones de validacion de los campos */
    const patron = /^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]+$/;
    const patronEmail = /^[a-zA-Z0-9_%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const patronConsulta = /^[a-zA-Z0-9.-_?,!\s]+$/;
    /* creamos un arreglo y Le cargamos Los valores de Los campos */
    const datos = [apellido.value, nombre.value, email.value, textarea.value];
    
    }