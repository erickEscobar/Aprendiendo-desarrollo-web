

window.addEventListener("resize", (e) => {
    console.clear();
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.outerWidth);
    console.log(window.outerHeight);
    console.log(e);
})

window.addEventListener('scroll', (e)=>{
    console.clear();
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
})

// window.addEventListener('click', (e)=>{
//     if(e.target.matches("h1")){
//         e.target.classList.toggle('color');
//         console.log(e.target);
//         // alert('Elemento');
//     }
// })

window.addEventListener("load", e =>{
    console.log("****** Evento Load ******");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});

document.addEventListener("DOMContentLoaded", e=>{
    console.log("****** Evento DOMContentLoaded ******");

    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});