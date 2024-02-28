function escribirCadena() {
    var campoTexto  = document.getElementById('campoTexto')

    var cadena = "Hola, esto es una cadena de texto"

    var indice = 0;

    function escribirLetra(){
        if (indice < cadena.length) {

            var letra = cadena.charAt(indice);

            campoTexto.value += letra;

            indice++;

            setTimeout(escribirLetra, 700);
            
        }
    }
    escribirLetra();
}