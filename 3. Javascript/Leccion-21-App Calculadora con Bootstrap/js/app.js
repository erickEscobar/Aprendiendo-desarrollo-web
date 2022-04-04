
// Mi codigo
// let a = document.getElementById('operandoA');
// let b = document.getElementById('operandoB');

// console.log(a.value);
// console.log(parseInt(a.value) + parseInt(b.value));
// function sumar(){
//     let resultado = parseInt(a.value) + parseInt(b.value);
//     if(isNaN(resultado)){
//         document.getElementById('mostrar').innerHTML = 'No a introducido valores';
//     }
//     else{
//         document.getElementById('mostrar').innerHTML = `Resultado: ${resultado}`;
//         console.log(document.getElementById('mostrar').innerHTML);
//     }
    
// }

// Codigo del profesor

let formulario = document.getElementById('forma');
let a = formulario['operandoA'];
let b = formulario['operandoB'];

function sumar(){
    let resultado = parseInt(a.value) + parseInt(b.value);;
    if(isNaN(resultado)){
        resultado = 'No a introducido valores';
    }
    document.getElementById('mostrar').innerHTML = `Resultado: ${resultado}`;
    console.log(`Resultado: ${resultado}`);
}