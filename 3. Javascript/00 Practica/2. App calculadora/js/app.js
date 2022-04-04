// Cambiamos el box-shadow del input cuando esta en focus y en blur
document.getElementById('formulario').addEventListener('focus', (evento)=>{
    evento.target.style.boxShadow = 'rgb(239 39 39 / 32%) 0px 0px 5px 4px';
}, true);

document.getElementById('formulario').addEventListener('blur', (evento)=>{
    evento.target.style.boxShadow = 'none';
}, true);


let formulario = document.getElementById('formulario');
let numero1 = formulario['numero1'];
let numero2 = formulario['numero2'];

//Funcion mostar
function mostrar(resultado, operacion){
    if(isNaN(resultado)){
        document.getElementById('resultado').innerHTML = `Resultado: Digite numeros`;
        console.log('Digite numeros');
    }
    else{
        document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
        console.log(operacion + resultado); 
    }
}

function sumar(){
    let suma = parseFloat(numero1.value) + parseFloat(numero2.value)
    mostrar(suma, 'suma: ');
}

function restar(){
    let resta = parseFloat(numero1.value) - parseFloat(numero2.value)
    mostrar(resta, 'resta: ');
}

function multiplicar(){
    let multiplica = parseFloat(numero1.value) * parseFloat(numero2.value)
    mostrar(multiplica, 'multiplicación: ');
}

function dividir(){
    let divide = parseFloat(numero1.value) / parseFloat(numero2.value)
    mostrar(divide, 'división: ');
}

