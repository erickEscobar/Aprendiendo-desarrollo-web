let miNumero = "16";

let edad = Number(miNumero);//Covertimos la cadena de 16 a numero
console.log(edad);

let comprobar = (edad >= 18) ? ("Es mayor de edad"):("Es menor de edad");
console.log(comprobar)

//Ejemplo de comprobar si una variable es tipo numerico
let x = "13x";

let y = Number(x);
console.log(y);

let z;
if(isNaN(y)){
    console.log("No es un numero");
}
else{
    z = (y < 18) ? ("Es menor de edad"):("Es mayor de edad");
    console.log(z);
}