/* EJERCICIO 9 //
Realiza una página que efectúe 3 preguntas de evaluación donde el usuario seleccione a
través de radio button su respuesta. La página proporcionará la evaluación y las respuestas
correctas a petición del usuario.*/
function validar(){
    const respuesta1 = document.getElementById("preg1Resp1").value
    const respuesta2 = document.getElementById("preg2Resp2").value
    const respuesta3 = document.getElementById("preg3Resp3").value
   
    
    console.log(respuesta1,respuesta2, respuesta3)
    
    if (respuesta1 === true || respuesta2 === true || respuesta3 === true){
        alert('todas sus respuestas son correctas')
        return false;
        }else {
        alert(' algunas respuesta no estan bien ')
        return false
    }
    }
    