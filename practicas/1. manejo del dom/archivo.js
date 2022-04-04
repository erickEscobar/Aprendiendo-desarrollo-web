let body = document.body.parentElement;
console.log(body);

body = document.body.firstElementChild;
console.log(body);

let input = document.querySelector('textarea');
input.addEventListener('keyup', function (){
    body.innerHTML = input.value;
});


let nombreInput = document.querySelector('form');
let nombre = document.querySelector('#nombre');
let apellido = document.querySelector('#apellido');

nombreInput[0].addEventListener('keyup', function (){
    nombre.innerHTML = nombreInput[0].value;
});
nombreInput[1].addEventListener('keyup', function (){
    apellido.innerHTML = nombreInput[1].value;
});

for(let i=0; i<=100000; i++){
    input.value += `${i}<br>`;
}