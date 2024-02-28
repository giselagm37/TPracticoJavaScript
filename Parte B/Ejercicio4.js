
console.log("dasd");
function mostrar(){
    var ingrcancion =document.getElementById("con2")
    ingrcancion.style.display = "flex";
    }

document.getElementById('Enviar').addEventListener('click', function (){
    let miformulario = document.forms["formulario2"];
    
    let nombre = miformulario.nombre.value;
    let compositor = miformulario.compositor.value;
    let duracion = miformulario.duracion.value;
    
    
    var contador = document.getElementById("cantidadcanciones")
    var contendor = document.getElementById('contenedorCanciones');
    contendor.style.display="flex"
    var paragraph = document.createElement('p');
  paragraph.innerText = 'Nombre: ' + nombre +
    ', Compositor: ' + compositor +
    ', Duración: ' + duracion; "<br>"
  
  
  contendor.appendChild(paragraph);
})
