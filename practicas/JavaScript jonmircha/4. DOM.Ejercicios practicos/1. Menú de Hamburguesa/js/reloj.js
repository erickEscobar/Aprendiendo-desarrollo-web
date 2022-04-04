let reloj = document.querySelector('#mostrarReloj');
let audio = document.createElement('audio');
let contenedor = document.querySelector('.contenedor');
let clockTempo;

contenedor.addEventListener('click', e=>{
    if(e.target.matches('#iniciarReloj')){
        clockTempo = setInterval(mostrarReloj, 1000);
        reloj.style.display = '';
        e.target.disabled = true;
        // e.target.setAttribute('disabled', 'disabled');
    }
    if(e.target.matches('#detenerReloj')){
        clearInterval(clockTempo);
        reloj.style.display = 'none';
        document.querySelector('#iniciarReloj').disabled = false;

    }
    if(e.target.matches('#iniciarAlarma')){
        audio.setAttribute('src', 'alarma_2.mp3');
        audio.autoplay = true;
        e.target.disabled = true;
    }
    if(e.target.matches('#detenerAlarma')){
        audio.setAttribute('src', '');
        document.querySelector('#iniciarAlarma').disabled = false;
    }
});

function mostrarReloj(){
    let hora = new Date();
    let hr = hora.getHours();
    let mn = hora.getMinutes();
    let sg = hora.getSeconds();
    // console.log(`${hr}:${mn}:${sg}`);
    reloj.innerHTML = `${hr}:${mn}:${sg}`;
}