/* EJERCICIO 11 //
Realice una página que permita cargar una fecha 
cargando el día, mes y año por separado, verifique 
si es válida e informe la fecha si lo es o diga que 
es inválida.*/
document.getElementById('formularioFecha').addEventListener('submit', function(evento) {
    evento.preventDefault(); 
    
    
    const dia = parseInt(document.getElementById('dia').value);
    const mes = parseInt(document.getElementById('mes').value);
    const anio = parseInt(document.getElementById('anio').value);

    
    if (validarFecha(dia, mes, anio)) {
        document.getElementById('resultado').textContent = `La fecha ${dia}/${mes}/${anio} es válida.`;
    } else {
        document.getElementById('resultado').textContent = `La fecha ${dia}/${mes}/${anio} es inválida.`;
    }
});

function validarFecha(dia, mes, anio) {
    
    const fecha = new Date(anio, mes - 1, dia); 

    
    return fecha.getDate() === dia && fecha.getMonth() === mes - 1 && fecha.getFullYear() === anio;
}