
const mostrarFecha = () => {
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let mn = formatoHora(fecha.getMinutes());
    let sg = formatoHora(fecha.getSeconds());

    const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Diciembre'];
    const dias = ['Dom','Lun','Mar','Mier','Jue','Vie','Sab']
    let mes = meses[fecha.getMonth()];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let fechaTexto = `${diaSemana}, ${dia} ${mes}`;
    document.getElementById('hora').innerHTML = `${hr}:${mn}:${sg}`;
    document.getElementById('fecha').innerHTML = fechaTexto;

    //Apagando y prendiendo
    document.getElementById('contenedor').classList.toggle('animar');
}

const formatoHora = (hora) => {
    if(hora<10){
        hora = '0'+ hora;
    }
    return hora;
}

setInterval(mostrarFecha, 1000);