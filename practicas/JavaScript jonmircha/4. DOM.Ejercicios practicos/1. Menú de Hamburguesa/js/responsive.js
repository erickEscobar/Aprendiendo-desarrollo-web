let youtube = document.querySelector('#youtube');
let gmaps = document.querySelector('#gmaps');

function movil(tipo, contenido){
    // contenido = 'Contenido movil';
    if(tipo === 'youtube'){
        contenido = `<a href="https://youtu.be/6IwUl-4pAzc">Ver video</a>`;
    }
    if(tipo === 'gmaps'){
        contenido = `<a href="https://goo.gl/maps/M3cyqWh1Lx9pmpCZ7">Ver mapa</a>`;
    }
    return contenido;
}
function escritorio(tipo, contenido){
    contenido = 'Contenido escritorio';
    if(tipo === 'youtube'){
        contenido = `<iframe width="727" height="409" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }
    if(tipo === 'gmaps'){
        contenido = `<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1994.9056073657796!2d-78.4699519!3d-0.1081339!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sec!4v1633385409472!5m2!1ses!2sec" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
    }
    return contenido;
}

document.addEventListener('DOMContentLoaded', e=>{
    let pantallaAncho = window.matchMedia('(min-width: 800px)');
    let contenido = '';
    console.log(pantallaAncho);
    const responsive = (e) =>{
        if(e.matches){
            youtube.innerHTML = escritorio('youtube',contenido);
            gmaps.innerHTML = escritorio('gmaps', contenido);
        }
        else{
            youtube.innerHTML = movil('youtube', contenido);
            gmaps.innerHTML = movil('gmaps', contenido);
        }
    }
    pantallaAncho.addEventListener('change', responsive);
    responsive(pantallaAncho);
});
