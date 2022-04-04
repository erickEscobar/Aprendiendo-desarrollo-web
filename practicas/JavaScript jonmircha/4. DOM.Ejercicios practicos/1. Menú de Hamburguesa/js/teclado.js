
let d = document;
let ball = d.querySelector('div.ball');
let stage = d.querySelector('.stage');
let x = 0, y = 0;

d.addEventListener('keydown', e=>{
    let limitsBall = ball.getBoundingClientRect();
    let limitsStage = stage.getBoundingClientRect();

    if(e.altKey && e.key === 'a'){
        alert('Haz lanzado una alerta con el teclado');
    }
    if(e.altKey && e.key === 'c'){
        confirm('Haz lanzado una confirmacion con el teclado');
    }
    if(e.altKey && e.key === 'p'){
        prompt('Haz lanzado un aviso con el teclado');
    }
    // if(e.keyCode === '37,39,38,40')
    switch(e.keyCode){
        case 37:
            if(limitsBall.left > limitsStage.left) x--;
            break;
        case 38:
            if(limitsBall.top > limitsStage.top) y--;
            break;
        case 39:
            if(limitsBall.right < limitsStage.right) x++;
            break;
        case 40:
            if(limitsBall.bottom < limitsStage.bottom) y++;
            break;    
    }
    ball.style.transform = `translate(${x*8}px, ${y*8}px)`;
});

d.addEventListener('click', e=>{
    if(e.target.matches('.ball')){
        d.body.style.overflowY = 'hidden';
    }
    else{
        d.body.style.overflowY = '';
    }
});

