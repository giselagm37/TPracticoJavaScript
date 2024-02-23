

const imagen = document.getElementById('imagen');
const imagenOriginalSrc = imagen.src; 
// Guarda la URL original de la imagen


imagen.addEventListener('mouseover', cambioImagen);


imagen.addEventListener('mouseout', reset);
function cambioImagen(img) {
  imagen.src = 'telefono.png';
}
function reset(img) {


  imagen.src = imagenOriginalSrc; // Restaura la imagen al salir del ratón

}
