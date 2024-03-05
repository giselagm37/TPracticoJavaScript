let index = 1;
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



function carrusel(n) {
    index += n;

    contenedor.src = "img/galeria/" + index + ".jpg"; // Cambia la src de la imagen
    document.querySelector('h1').innerText = frases[index-1];
}

carrusel(0);

function siguienteImagen() {
    carrusel(1);
}

function anteriorImagen() {
    carrusel(-1);
}

setInterval(siguienteImagen, 5000); // Cambia la imagen cada 3 segundos



// Selecciona el primer H1 y actualiza su texto
