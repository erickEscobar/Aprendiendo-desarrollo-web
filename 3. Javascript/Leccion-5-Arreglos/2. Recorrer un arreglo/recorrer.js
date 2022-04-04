// let autos = new Array ('BWM','Ferrari','Toyota','Tesla','Volvo')

const autos = ['BWM','Ferrari','Toyota','Tesla','Volvo'];

for(let i=0; i<autos.length; i++){
    console.log(autos[i]);
}


//Metodos para agregar nuevos elementos al arreglo

autos.push("Hola");//Con el metodo push se agrega el elemto al final de arreglo
console.log(autos);

autos[autos.length] = 'Nuevo';//Con la funcion length podemos agregar tambien
console.log(autos);

autos[8] = 'Otro';//Tabien podemos saltarnos espacios
console.log(autos);


//Saber si una variable es de tipo arreglo

console.log(Array.isArray(autos));//Array.isArray(arreglo) con esto podemos saber si es un arreglo

console.log(autos instanceof Array);//arreglo instanceof Array   con esto tambien podemos saber si es un arrglo