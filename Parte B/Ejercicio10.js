/* EJERCICIO 10 //
Realiza una página que implemente una calculadora aritmética.*/

/*//guarda en una variable lo que trae en anterior // 
const valoranterior = document.getElementById('anterior');
const valoractual = document.getElementById('actual');*/

//Trae todos los elemento de esa clase // 
 
function numero(valor) {
    document.getElementById('pantalla').value += valor;
  }

  function borrar() {
    document.getElementById('pantalla').value = '';
  }

  function operacion(operador) {
    document.getElementById('pantalla').value += operador;
  }

  function resultado() {
    try {
      let resultado = eval(document.getElementById('pantalla').value);
      document.getElementById('pantalla').value = resultado;
    } catch (error) {
      document.getElementById('pantalla').value = 'Error';
    }
  }