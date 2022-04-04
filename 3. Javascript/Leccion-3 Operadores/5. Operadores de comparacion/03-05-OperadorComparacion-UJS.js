let a = 3, b = 2, c = "3";

let d = a == c; // se revisa el valor sin importar el tipo
console.log(d);

d = a === c;// revisa los valores pero tambien los tipos
console.log(d);


let w = 5, x = 7, y = "5", z;

z = w != y;
console.log(z);

z = w !== y;
console.log(z);