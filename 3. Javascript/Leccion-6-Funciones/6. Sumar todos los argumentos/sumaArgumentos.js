
let resultado = sumar(5, 6, 7, 9, 13, 15);
console.log(resultado);

function sumar(){
    let suma = 0;
    for(let i = 0; i<arguments.length; i++){
        suma += arguments[i];
    }
    return suma
}