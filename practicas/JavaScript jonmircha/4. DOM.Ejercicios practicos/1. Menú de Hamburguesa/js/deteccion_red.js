

const isOnline = () =>{
    const mostrarDivOnline = document.createElement('div');
    if(navigator.onLine){
        mostrarDivOnline.textContent = 'Conexion Restablecida';
        mostrarDivOnline.classList.add('online');
        mostrarDivOnline.classList.remove('offline');
    }
    else{
        mostrarDivOnline.textContent = 'Conexion Perdida';
        mostrarDivOnline.classList.add('offline');
        mostrarDivOnline.classList.remove('online');
    }
    document.body.insertAdjacentElement('afterbegin', mostrarDivOnline)
    setTimeout(()=> document.body.removeChild(mostrarDivOnline), 2000)
}


window.addEventListener('online', e=>{
    console.log('Con internet');
    isOnline();
})

window.addEventListener('offline', e=>{
    console.log('Sin internet');
    isOnline();
})