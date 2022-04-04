let btnScroll = document.querySelector('#btn-scroll');
let cajaA = document.querySelector('.cajaA');

document.addEventListener('scroll', e=>{
    let barraScroll = window.scrollY;
    if(barraScroll > 600){
        btnScroll.classList.remove('btn-agregarScroll');
    }
    else{
        btnScroll.classList.add('btn-agregarScroll');
    }
    console.log(barraScroll);
});

btnScroll.addEventListener('click', e=>{
    window.scrollTo({
        behavior: "smooth",
        top: 0,
        // left: 0
    });
})