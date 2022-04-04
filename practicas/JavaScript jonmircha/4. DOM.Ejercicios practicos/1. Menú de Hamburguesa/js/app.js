
let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu');

btnMenu.addEventListener('click', (e)=>{
    menu.classList.toggle('ocultarMenu');
    btnMenu.classList.toggle('is-active');
});

let li_a = document.querySelector('#ulMenu');
console.log(li_a); 
console.log(li_a.children); 
li_a.addEventListener('click', e=>{
    if(e.target.matches('.secciones')){
        menu.classList.toggle('ocultarMenu');
        btnMenu.classList.toggle('is-active');
    }
});

