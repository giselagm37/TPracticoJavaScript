/*EJERCICIO Nº2//
Haz un programa que dibuje un rectángulo de asteriscos a partir de una base y altura
        especificada por el usuario.*/


n = prompt('Vamos a armar un rectangulo. Ingrese un numero para la base ')
m = prompt('Ingrese un numero para la altura  ')

for (let i = 0; i < n; i++) {
    let n = '';

    for (let j = 0; j < m; j++) {
        n += '* ';
    }
    console.log(n)
}