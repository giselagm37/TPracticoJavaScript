let index = 0;
const contenedor = document.querySelector('img'); // Selecciona la etiqueta img
const frases = [
  "La tecnología es el faro de la civilización moderna.",
"La tecnología: un puente hacia lo lejano, una brecha con lo cercano.",
"La tecnología es clave, pero el maestro es el corazón del aprendizaje.",
"Ciencia, tecnología y tradición: los pilares de nuestra existencia.",
"El maestro: más que tecnología, el alma de la educación.",
"El software devora el universo.",
"La tecnología, como el pescado fresco, mejor cuanto más temprano."
];



function showImage(n) {
    index += n;

    if (index < 1) {
        index = 7;
    } else if (index > 7) {
        index = 1;
    }

    contenedor.src = "img/galeria/" + index + ".jpg"; // Cambia la src de la imagen
    document.querySelector('h1').innerText = frases[index-1];
}

showImage(0);

function nextImage() {
    showImage(1);
}

function prevImage() {
    showImage(-1);
}

setInterval(nextImage, 5000); // Cambia la imagen cada 3 segundos



// Selecciona el primer H1 y actualiza su texto
