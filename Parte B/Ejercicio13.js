var indiceImagen = 0;
mostrarImagen(indiceImagen);

function cambiarImagen(n) {
  mostrarImagen(indiceImagen += n);
}

function mostrarImagen(n) {
  var i;
  var imagenes = document.getElementsByTagName("img");
  if (n >= imagenes.length) { indiceImagen = 0 }
  if (n < 0) { indiceImagen = imagenes.length - 1 }
  for (i = 0; i < imagenes.length; i++) {
    imagenes[i].style.display = "none";
  }
  imagenes[indiceImagen].style.display = "block";
}

document.getElementById("prev").addEventListener("click", function () {
  cambiarImagen(-1);
});

document.getElementById("sig").addEventListener("click", function () {
  cambiarImagen(1);
});