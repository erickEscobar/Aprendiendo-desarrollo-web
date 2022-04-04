let cuerpo = document.querySelector('body');
console.log(cuerpo);
console.log(cuerpo.children);
for(let i=0; i<6; i++){
    cuerpo.children[i].classList.add('textoPequeno');
}
// cuerpo.style.transitionDuration = 

cuerpo.addEventListener('click', e => {
    console.log(e.target);
    if(e.target.matches('#ide1')){
        e.innerHTML = 'Este es mi nuevo texto cabron';
    }
    e.target.classList.toggle('textoGrande');
})