function cambiarEstilo() {
    
    var contenedor = document.querySelector('.container');

    
    var estilo = Math.floor(Math.random() * 2) + 2;

    
    contenedor.className = 'container container' + estilo;
}