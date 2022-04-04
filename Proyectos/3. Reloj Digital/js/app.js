

const mostraFecha = () => {
    let fecha = new Date;
    let segundos = fecha.getSeconds();
    let minutos = fecha.getMinutes();
    let horas = fecha.getHours();
    let segundosHTML = document.getElementById('cajaSegundo');
    let minutosHTML = document.getElementById('cajaMinuto');
    let horasHTML = document.getElementById('cajaHora');

    segundosHTML.style.transform = `rotate(${90+(segundos*6)}deg)`;
    minutosHTML.style.transform = `rotate(${90+(minutos*6)}deg)`;
    // horasHTML.style.transform = `rotate(${90+(horas*30)}deg)`;
    if(minutos>=0 && minutos<12){
        horasHTML.style.transform = `rotate(${90+(horas*30)}deg)`;
    }
    else if(minutos>=12 && minutos<25){
        horasHTML.style.transform = `rotate(${(90+(horas*30))+6}deg)`;
    }
    else if(minutos>=25 && minutos<37){
        horasHTML.style.transform = `rotate(${(90+(horas*30))+12}deg)`;
    }
    else if(minutos>=37 && minutos<45){
        horasHTML.style.transform = `rotate(${(90+(horas*30))+18}deg)`;
    }
    else if(minutos>=45 && minutos<60){
        horasHTML.style.transform = `rotate(${(90+(horas*30))+24}deg)`;
    }
}

setInterval(mostraFecha, 1000);
