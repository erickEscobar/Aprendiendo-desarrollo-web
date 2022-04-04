let matematica1=0, lengua1=0, sociales1=0, ingles1=0, matematica2=0, lengua2=0, sociales2=0, ingles2=0;

agregarNota();

function agregarNota(){
    let parcial1 = {
        type: 'bar',
        x: ['matematica', 'lengua', 'estudios sociales', 'ingles'],
        y: [matematica1,  lengua1,  sociales1,  ingles1],
        marker: {
            color: 'blue',
            line: {
                width: 2.5
            }
        },
        name: 'Parcial 1'
    };
    let parcial2 = {
        type: 'bar',
        x: ['matematica', 'lengua', 'estudios sociales', 'ingles'],
        y: [ matematica2,  lengua2,  sociales2,  ingles2],
        marker: {
            color: 'yellow',
            line: {
                width: 2.5
            }
        },
        name: 'Parcial 2'
    };
    
    let data = [parcial1, parcial2];
    
    let layout = {
        title: 'Diagrama de barras',
        font: { size: 18 }
    };
    
    let config = { responsive: true }


    Plotly.newPlot('grafico', data, layout, config);

}



document.addEventListener('change', e => {
    if(e.target.matches('input.datos')){
        console.log(e.target.value)

        if(e.target.id === 'matematica1') matematica1 = e.target.value;
        if(e.target.id === 'lengua1') lengua1 = e.target.value;
        if(e.target.id === 'sociales1') sociales1 = e.target.value;
        if(e.target.id === 'ingles1') ingles1 = e.target.value;
        if(e.target.id === 'matematica2') matematica2 = e.target.value;
        if(e.target.id === 'lengua2') lengua2 = e.target.value;
        if(e.target.id === 'sociales2') sociales2 = e.target.value;
        if(e.target.id === 'ingles2') ingles2 = e.target.value;

        agregarNota();
    }
})