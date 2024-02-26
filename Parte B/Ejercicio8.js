/* EJERCICIO 8 //
Realiza una página que capture las coordenadas del ratón y las muestre en el título del
documento (title).*/



document.addEventListener('mousemove', function(e){
  document.title = `X: ${e.clientex},  Y: ${e.cliente}`;
});

  // Función para obtener las coordenadas del ratón
  function obtenerCoordenadas(evento) {
    const x = evento.pageX;
    const y = evento.pageY;
   
}

// Asociar la función al evento onMouseMove (movimiento del ratón)
document.addEventListener("mousemove", obtenerCoordenadas);