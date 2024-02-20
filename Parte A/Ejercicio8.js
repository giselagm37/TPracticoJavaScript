/* EJERCICIO 8
Realice una página que permita al usuario cargar en 
un array una cantidad variable de números. Una vez 
finalizada la carga la página debe mostrar un resumen
estadístico compuesto de los siguientes parámetros: 
Promedio, Mediana, Mínimo, Máximo y desviación
estándar.*/
function calculateSummary() {
    var numbersInput = document.getElementById('numbers-input').value;
    var numbersArray = numbersInput.split(',').map(num => parseFloat(num.trim()));

    var sum = numbersArray.reduce((acc, curr) => acc + curr, 0);
    var average = sum / numbersArray.length;

    var sortedArray = numbersArray.slice().sort((a, b) => a - b);
    var middle = Math.floor(sortedArray.length / 2);
    var median = sortedArray.length % 2 === 0 ? (sortedArray[middle - 1] + sortedArray[middle]) / 2 : sortedArray[middle];

    var min = Math.min(...numbersArray);
    var max = Math.max(...numbersArray);

    var deviation = Math.sqrt(numbersArray.reduce((acc, curr) => acc + Math.pow(curr - average, 2), 0) / numbersArray.length);

    var summaryDiv = document.getElementById('summary');
    summaryDiv.innerHTML = `
        <p><strong>Promedio:</strong> ${average.toFixed(2)}</p>
        <p><strong>Mediana:</strong> ${median.toFixed(2)}</p>
        <p><strong>Mínimo:</strong> ${min}</p>
        <p><strong>Máximo:</strong> ${max}</p>
        <p><strong>Desviación Estándar:</strong> ${deviation.toFixed(2)}</p>
    `;
}