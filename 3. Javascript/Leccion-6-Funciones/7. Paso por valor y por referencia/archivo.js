//Tipos primitivo
let x = 10;

function cambiarValor(a){
    a = 20;
    return a;
}

//Paso por valor
cambiarValor(x);
console.log(x);



const persona = {
    nombre: 'Erick',
    apellido: 'Escobar'
}

//Paso por referencia
function cambiar(p1){
    p1.nombre = "Jesus";
    p1.apellido = "Cobeña";
}

cambiar(persona);
console.log(persona);

