let btnLight = document.querySelector('.btn-darkLight');
const cssDark = document.querySelector('#estilosDark');
let contador = 1;

if(localStorage.getItem('theme') === 'dark') contador = 2;

const darkMode = () => {
    btnLight.classList.add('btn-darkLight-agg');
    btnLight.innerHTML = '<p>☀️</p>'
    cssDark.setAttribute('href', 'css/estilosDark.css');
    localStorage.setItem('theme', 'dark');
}
const lightMode = () => {
    btnLight.innerHTML = '<p>🌙</p>'
    cssDark.setAttribute('href', '');
    localStorage.setItem('theme', 'light');
}

btnLight.addEventListener('click', e=>{
    contador++;
    // btnLight.classList.toggle('btn-darkLight-agg');
    if(contador%2 == 0){
        darkMode();
    }
    else{
        lightMode();
    }
})

// API localStorage
document.addEventListener('DOMContentLoaded', e=>{
    if(localStorage.getItem('theme') === null) localStorage.setItem('theme', 'light');
    if(localStorage.getItem('theme') === 'light') lightMode();
    if(localStorage.getItem('theme') === 'dark') darkMode();

})
// css/estilosDark.css