/* EJERCICIO 10 //
Realiza una página que implemente una calculadora aritmética.*/

/*//guarda en una variable lo que trae en anterior // 
const valoranterior = document.getElementById('anterior');
const valoractual = document.getElementById('actual');*/

//Trae todos los elemento de esa clase // 
const pantalla = document.querySelectorAll(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;
        

        if(boton.id === "C") {
            pantalla.textContent = "0";
            return;
        }
        if (boton.id === "borrar" ) {
            if (panatalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";

            } else {
                pantalla.textContent =pantalla.textContent.slice(0,-1);
            }
            return;    
        }
        if (boton.id === "igual") {
            try{
                pantalla.textContent = eval(panatalla.textContent);
            } catch {
                panatalla.textContent = "Error!"
            }
            return;
        }
        if(pantalla.textContent === "0" || pantalla.textContent === "Error!") {
           pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }

    })   
})
