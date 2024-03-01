let index = 0;
const images = document.querySelectorAll('#carousel img');

function showImage(n) {
  index += n;
  if (index >= images.length) index = 0;
  if (index < 0) index = images.length - 1;

  for (let i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }
  images[index].style.display = 'block';
}

showImage(0);

function nextImage() {
  showImage(1);
}

function prevImage() {
  showImage(-1);
}

setInterval(nextImage, 3000); // Cambia la imagen cada 3 segundos