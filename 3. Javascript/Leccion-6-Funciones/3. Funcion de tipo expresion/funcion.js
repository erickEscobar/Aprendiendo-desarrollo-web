//Declaracion de la funcion
function sumando(a,b){
    console.log(arguments.length);//Con esto podemos saber cuantos argumentos tenemos en nuestra funcion
    return (a+b);
}

let x = sumando(5,7);
console.log(x);


//Declaracion de funcion de tipo expresion
let sumar = function (c,d){return c+d};

let y = sumar(10,21);
console.log(y);


//Funcion de tipo self invoking
(function (a,b){
    console.log("Suma: " + (a + b));
})(3,7);


//nos imprime lo que esta escrita en la funcion
var miFuncionTexto = sumando.toString();
console.log(miFuncionTexto);