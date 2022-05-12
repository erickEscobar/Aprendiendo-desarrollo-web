import {modo} from "./dark.js";

const body = document.querySelector('body');
const luz = document.getElementById('iconoLuz');
const casilla = document.querySelectorAll('table tbody tr');
// const borrar = document.querySelector('button#borrar img');

const diccionario = ['sabio', 'pagar', 'nacer', 'hadas', 'cacao', 'abeja', 'avena', 'dicta', 'cuida', 'corta', 'manga', 'aguja', 'manta', 'droga', 'poeta', 'chica', 'deuda', 'broma', 'regla', 'tarea', 'norma'];

// console.log(borrar)
const palabra = diccionario[Math.floor((Math.random() * (21 - 0 + 1)) + 0)];
const palabraArray = palabra.split('');
// let palabraAux = palabra;
let i=0, j=0;

document.addEventListener('click', e => {
    // console.log(e.target)
    if(e.target == luz){
        modo(body);
    }
    if(e.target.matches('.teclado button')){
        if(e.target.id != 'enviar' && e.target.id != 'borrar'){//Si tecleas en una letra
            if(j != 5){
                casilla[i].cells[j].innerHTML = e.target.id;
                j++;
                console.log(j)
            }
        }
        if(e.target.id == 'borrar' && j != 0){//Si tecleas borrar
            j--;
            casilla[i].cells[j].innerHTML = "";
        }
        if(e.target.id == 'enviar' && j == 5){//Si tecleas enviar
            let letraBuscada = "";
            for(let aux = 0; aux < 5; aux++){
                letraBuscada += casilla[i].cells[aux].innerHTML;
            }

            if(letraBuscada == palabra) {//Si la palabra es igual
                for(let aux = 0; aux < 5; aux++){
                    casilla[i].cells[aux].classList.add('colorCorrect');
                }
                setTimeout(limpiar, 1200);
                setTimeout(ganastes, 800);
                

                // Se reinicia
                return i=0,j=0;

            }else{
                for(let aux = 0; aux < 5; aux++){
    
                    if(palabraArray[aux] != casilla[i].cells[aux].innerHTML){
                        casilla[i].cells[aux].classList.add('colorError');
                    }
                    // let cuenta = 0;
                    // let posicion = palabraAux.indexOf(casilla[i].cells[aux].innerHTML);
                    // palabraAux = palabraAux.slice(1);
                    let posicion = palabra.indexOf(casilla[i].cells[aux].innerHTML);

                    if(posicion != -1){
                        if(casilla[i].cells[aux].innerHTML == palabraArray[aux]){
                            casilla[i].cells[aux].classList.add('colorCorrect');
                        }
                        
                        else{
                            casilla[i].cells[aux].classList.add('colorNotPosicion');
                        }
                    }
                }
            }

            console.log(letraBuscada);

            // Inicia en otra fila
            i++;
            j = 0;
        }
        if(e.target.id == 'enviar' && i == 6){
            setTimeout(limpiar, 1200);
            setTimeout(perdistes, 800);

            // Se reinicia
            return i=0,j=0;
        }
    }
});




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
}
function perdistes(){
    alert('Perdiste bro 😥');
    palabra = diccionario[Math.floor((Math.random() * (21 - 0 + 1)) + 0)];
}
function ganastes(){
    alert('Felicidades ganastes la partida');
    palabra = diccionario[Math.floor((Math.random() * (21 - 0 + 1)) + 0)];
}