// window.alert("Alerta");
// window.confirm("Confirmacion");
// window.prompt("Aviso");

const $btnAbrir = document.getElementById('abrir-ventana'),
 $btnCerrar = document.getElementById('cerrar-ventana'),
 $btnImprimir = document.getElementById('imprimir-ventana');

let ventana;

$btnAbrir.addEventListener('click', e => {
    ventana = window.open("https://imagecompressor.com/es/")
});

$btnCerrar.addEventListener('click', e => {
    ventana.close();
});

$btnImprimir.addEventListener('click', e => {
    window.print();
});