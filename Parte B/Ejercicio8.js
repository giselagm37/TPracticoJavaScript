/* EJERCICIO 8 //
Realiza una página que capture las coordenadas del ratón y las muestre en el título del
documento (title).*/



document.body.addEventListener("mousemove", obtenerCoordenadas);

  // Función para obtener las coordenadas del ratón
  function obtenerCoordenadas(evento) {
    const x = evento.pageX;
    const y = evento.pageY;
    document.title = `X: ${x} - Y: ${y}`;
}

// Asociar la función al evento onMouseMove (movimiento del ratón)
document.addEventListener("mousemove", obtenerCoordenadas);