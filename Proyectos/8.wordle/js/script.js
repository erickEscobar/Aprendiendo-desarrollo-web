import {modo} from "./dark.js";

const body = document.querySelector('body');
const luz = document.getElementById('iconoLuz');
const casilla = document.querySelectorAll('table tbody tr');
const teclado = document.querySelectorAll('.teclado button');

const diccionario = ['sabio', 'pagar', 'nacer', 'hadas', 'cacao', 'abeja', 'avena', 'dicta', 'cuida', 'corta', 'manga', 'aguja', 'manta', 'droga', 'poeta', 'chica', 'deuda', 'broma', 'regla', 'tarea', 'norma'];

let palabra = diccionario[Math.floor((Math.random() * (21 - 0 + 1)) + 0)];
let palabraArray = palabra.split('');
// const palabraAux = palabra;

let i=0, j=0;

document.addEventListener('click', e => {
    if(e.target == luz){
        modo(body);
    }

    if(e.target.matches('.teclado button')){
        if(e.target.id != 'enviar' && e.target.id != 'borrar'){//Si tecleas en una letra
            teclearLetra(e.target.id);
        }
        if(e.target.id == 'borrar' && j != 0){//Si tecleas borrar
            teclearBorrar();
        }
        if(e.target.id == 'enviar' && j == 5){//Si tecleas enviar
            teclearEnviar();
        }
        // Si perdistes
        if(e.target.id == 'enviar' && i == 6){
            setTimeout(limpiar, 1200);
            setTimeout(perdistes, 800);

            // Se reinicia
            return i=0,j=0;
        }
    }
});

document.addEventListener('keydown', e => {
    // console.log("keyValue: " + e.key);
    let isLetra = validarCaracter(e.key.toLowerCase());
    // console.log(isLetra == true ? 'Es letra': 'No es letra');

    if(isLetra){//Si es una letra del abecedario
        // Si tecleas una letra
        if(j != 5){
            teclearLetra(e.key.toLowerCase());
        }
    }
    if(e.key == 'Backspace'){//Si tecleas borrar
        if(j != 0){//Si hay por lo menos un caracter
            teclearBorrar();
        }
    }
    if(e.key == 'Enter' && j == 5){//Si tecleas enviar
        teclearEnviar();
        if(i==6){
            setTimeout(limpiar, 1200);
            setTimeout(perdistes, 800);

            // Se reinicia
            return i=0,j=0;
        }
    }


})

// funcion limpiar pantalla
function limpiar(){
    for(let a = 0; a < 6; a++){
        for(let b = 0; b < 5; b++){
            casilla[a].cells[b].innerHTML = '';
            casilla[a].cells[b].classList.remove('colorCorrect');
            casilla[a].cells[b].classList.remove('colorError');
            casilla[a].cells[b].classList.remove('colorNotPosicion');
        }
    }
    teclado.forEach(tecla => {
        tecla.classList.remove('colorCorrect');
        tecla.classList.remove('colorError');
        tecla.classList.remove('colorNotPosicion');
    });

}

function teclearLetra(letra){
    if(j != 5){
        casilla[i].cells[j].innerHTML = letra;
        j++;
        // console.log(j)
    }
}
function teclearBorrar(){
    j--;
    casilla[i].cells[j].innerHTML = "";
}
function teclearEnviar(){
    let letraBuscada = "";
    for(let aux = 0; aux < 5; aux++){
        letraBuscada += casilla[i].cells[aux].innerHTML;
    }

    if(letraBuscada == palabra) {//Si la palabra es igual
        for(let aux = 0; aux < 5; aux++){
            casilla[i].cells[aux].classList.add('colorCorrect');
            
            let pintarLetra = buscarLetraTeclado(casilla[i].cells[aux].innerHTML);
            pintarLetra.classList.add('colorCorrect');
        }
        setTimeout(limpiar, 1200);
        setTimeout(ganastes, 800);
        

        // Se reinicia
        return i=0,j=0;

    }else{
        for(let aux = 0; aux < 5; aux++){
            let pintarLetra = buscarLetraTeclado(casilla[i].cells[aux].innerHTML);

            if(palabraArray[aux] != casilla[i].cells[aux].innerHTML){
                casilla[i].cells[aux].classList.add('colorError');
                pintarLetra.classList.add('colorError');
            }
            // let cuenta = 0;
            // let posicion = palabraAux.indexOf(casilla[i].cells[aux].innerHTML);
            // palabraAux = palabraAux.slice(1);

            let posicion = palabra.indexOf(casilla[i].cells[aux].innerHTML);
            // console.log('posicion: ' + posicion)

            if(posicion != -1){
                pintarLetra.classList.remove('colorError');

                if(casilla[i].cells[aux].innerHTML == palabraArray[aux]){
                    casilla[i].cells[aux].classList.add('colorCorrect');

                    pintarLetra.classList.remove('colorNotPosicion');
                    pintarLetra.classList.add('colorCorrect');
                }
                
                else{
                    casilla[i].cells[aux].classList.add('colorNotPosicion');

                    pintarLetra.classList.remove('colorCorrect');
                    pintarLetra.classList.add('colorNotPosicion');
                }
            }


        }
    }

    // console.log(letraBuscada);

    // Inicia en otra fila
    i++;
    j = 0;
}

function perdistes(){
    alert('Perdiste bro 😥 la palabra era: ' + palabra);
    palabra = diccionario[Math.floor((Math.random() * (21 - 0 + 1)) + 0)];
}
function ganastes(){
    alert('Felicidades ganastes la partida');
    palabra = diccionario[Math.floor((Math.random() * (21 - 0 + 1)) + 0)];
}

function validarCaracter(caracter){
    if(caracter.length === 1){
        const eRegular = new RegExp('[A-Za-zÑñÁáÉéÍíÓóÚúÜü]{1,1}$');
        
        let match = eRegular.exec(caracter);
        return match !== null ? true : false
    }
    return false;
}
function buscarLetraTeclado(letra){
    const teclado = document.querySelector(`.teclado button#${letra}`);
    return teclado;
}