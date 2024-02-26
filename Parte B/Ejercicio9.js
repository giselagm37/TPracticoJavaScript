/* EJERCICIO 9 //
Realiza una página que efectúe 3 preguntas de evaluación donde el usuario seleccione a
través de radio button su respuesta. La página proporcionará la evaluación y las respuestas
correctas a petición del usuario.*/

function respuestas(){

    let respCorrectas = ['verdadero','falso','verdaero'];
    let respAlumno = [];
    //obtener respuestas del usuario //
    for ( let i = 1; i <=3; i++){
        let pregunta = document.querySelector('input[name="pregunta' + i + '"]:checked');
        if(pregunta){
            //si esta hecho el chequeoo los sube al array nuevo//
            respAlumno.push(pregunta.value);
        } else {
            //sino no los tiene encuenta
            respAlumno.push(null);
        } 
        }
        //corregir examen //
        let puntaje = 0;
        for (let i = 0; i < respCorrectas.length; i++){
            if (respCorrectas[i] === respAlumno[i]) {
                puntaje++;
            }
        }
    
        //mostrar el resultado//
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML='Puntaje: '+ puntaje + '/3'

         //mostrar respuestas correctas //
     resultadoDiv.innerHTML +='Respuestas correctas: ';
     for (let i = 0; i < respCorrectas.length; i++ ){
        resultadoDiv.innerHTML += 'Pregunta '+ (i + 1) + ' : ' + respCorrectas[i];
     }
      let material = document.getElementById('material');
      material.innerHTML = ' ¡ Felicitaciones por el esfuerzo!' 
      
} 
   
    