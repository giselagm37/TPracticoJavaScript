/* EJERCICIO 8 //
/*Realiza una página que capture las coordenadas del ratón y las muestre en el título del
documento (title).*/
//propiedad/atributo de mousemove 
document.addEventListener('mousemove', function(e) {
  document.getElementById('coordx').value = e.clientX;
  document.getElementById('coordy').value = e.clientY;
});

/* <div id="myDIV"></div>

<p>Mouse over the rectangle above, and get the coordinates of your mouse pointer.</p>

<p id="demo"></p>

<script>
document.getElementById("myDIV").addEventListener("mousemove", function(event) {
  myFunction(event);
});

function myFunction(e) {
  let x = e.clientX;
  let y = e.clientY;
  let coor = "Coordinates: (" + x + "," + y + ")";
  document.getElementById("demo").innerHTML = coor;
}
</script>*/