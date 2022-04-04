// MI codigo
// let liElementos = document.getElementById('elementosSorteo');
// let numeroElementos = liElementos.childElementCount;
 
// document.addEventListener('click', e => {
//     if(e.target.matches('#obtenerGanador')){
//         let arrayElementos = [];
//         let ganador = '';
//         for(let i=0; i<numeroElementos; i++){
//             arrayElementos.push(liElementos.children[i].innerHTML);
//         }
//         ganador = arrayElementos[Math.floor(Math.random() * arrayElementos.length)];
        
//         console.log(`El ganador es: ${ganador}`);
//         alert(`El ganador es: ${ganador}`);
//     }
// })

// El codigo del maestro
const ganadorEs = () => {
    let liElementos = document.querySelectorAll('.elemento');
    let random = Math.floor(Math.random() * liElementos.length)
    let ganador = liElementos[random];

    return `El ganador es: ${ganador.innerHTML}`;
}


document.addEventListener('click', e => {
    if(e.target.matches('#obtenerGanador')){
        let ganador = ganadorEs()
        console.log(ganador);
        alert(ganador);
    }
})

// Codigo para buscar un ganador en los comentarios de youtube
// const ganadorEs = () => {
//     let liElementosComentarios = document.querySelectorAll('ytd-comment-renderer yt-formatted-string#content-text.style-scope.ytd-comment-renderer');
//     let liElementos = document.querySelectorAll('ytd-comment-renderer #header-author h3 span');

//     let random = Math.floor(Math.random() * liElementos.length)
//     let ganador = liElementos[random];
//     let comentario = liElementosComentarios[random];

//     return `El ganador es: ${ganador.textContent} y su comentario es: ${comentario.textContent}`;
// }