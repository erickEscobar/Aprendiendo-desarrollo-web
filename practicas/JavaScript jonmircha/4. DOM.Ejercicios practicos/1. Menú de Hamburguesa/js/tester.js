let formulario = document.querySelector('#formTester');
let botonesTester = document.querySelector('#btnsTester');
let btnOpen = document.querySelector('#openTester');
let btnClose = document.querySelector('#closeTester');

let url = '', ancho = '', alto = '';
let ventanaTester;

function openTester(urlF, anchoF, altoF){
    if((urlF !== '') && (anchoF !== '') && (altoF !== '')){
        ventanaTester = window.open(urlF, 'NombreVentana',`width=${anchoF}, height=${altoF}`);
    }
}


formulario.addEventListener('change', e=>{
    url = formulario[0].value;
    ancho = formulario[1].value;
    alto = formulario[2].value;
    console.log(url)
})

botonesTester.addEventListener('click', e=>{
    if(e.target.matches('#openTester')){
        openTester(url, ancho, alto);
    }
    if(e.target.matches('#closeTester')){
        ventanaTester.close();
    }
})

