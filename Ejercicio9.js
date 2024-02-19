/* EJERCICIO 9 //
Realice una página que permita cargar los datos de 
una persona en un array. Luego la
página deberá mostrar en una tabla 
html con las cabeceras adecuadas los datos 
solicitados.*/
document.getElementById('formularioPersona').addEventListener('submit', function(evento) {
    evento.preventDefault(); 

    
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const genero = document.getElementById('genero').value;

    
    const persona = { nombre, edad, genero };

    
    agregarPersonaATabla(persona);

    
    document.getElementById('formularioPersona').reset();
});

function agregarPersonaATabla(persona) {
    
    const cuerpoTabla = document.getElementById('datosPersona');

    
    const nuevaFila = document.createElement('tr');

    
    nuevaFila.innerHTML = `
        <td>${persona.nombre}</td>
        <td>${persona.edad}</td>
        <td>${persona.genero}</td>
    `;

    
    cuerpoTabla.appendChild(nuevaFila);
}