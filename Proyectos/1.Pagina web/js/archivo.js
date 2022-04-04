const iconoMenu = document.getElementById('iconoMenu');
const menuUl = document.getElementById('menuUl');
let i =0;
iconoMenu.addEventListener("click", function(){
    // menuUl.style.backgroundColor = 'yellow';
    if(window.innerWidth < 470){
        console.log(++i);
        menuUl.classList.toggle('mostrarMenu');

    }
});