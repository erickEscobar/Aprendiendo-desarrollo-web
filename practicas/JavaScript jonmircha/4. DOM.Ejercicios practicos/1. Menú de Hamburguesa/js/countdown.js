let countdown = document.querySelector('.countdown');
console.log(countdown);
let fecha = new Date('2022/10/1 21:47:30').getTime();
console.log(fecha);

document.addEventListener('DOMContentLoaded', e=>{
    let countdownTiempo = setInterval(()=>{
        let dateNow = new Date().getTime();
        let dateDiferent = fecha - dateNow;
        let dias = Math.floor(dateDiferent / (1000*60*60*24));
        let horas = ('0' + Math.floor(dateDiferent % (1000*60*60*24) / (1000*60*60))).slice(-2);
        let minutos = ('0' + Math.floor(dateDiferent % (1000*60*60) / (1000*60))).slice(-2);
        let segundos = ('0' + Math.floor(dateDiferent % (1000*60) / (1000))).slice(-2);
        console.log(fecha,dateNow, dateDiferent, segundos);
        countdown.innerHTML = `<h3> Faltan: ${dias} dias ${horas} horas ${minutos} minutos ${segundos} segundos <h3/>`;
        if(dateDiferent < 0){
            clearInterval(countdownTiempo);
            countdown.innerHTML = `<h3> Fin <h3/>`;
        }
    },1000)
});