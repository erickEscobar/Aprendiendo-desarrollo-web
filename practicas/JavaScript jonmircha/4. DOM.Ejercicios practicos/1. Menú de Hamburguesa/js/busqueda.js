let galeriaBusqueda = document.querySelector('.galeriaBusqueda');
let auxgaleriaBusqueda = `<div class="divImg"><img src="img/filstrosDeBusqueda/nature.jpg" alt=""><p>Nature</p></div>
<div class="divImg"><img src="img/filstrosDeBusqueda/any.jpg" alt=""><p>Any</p></div>
<div class="divImg"><img src="img/filstrosDeBusqueda/tech.jpg" alt=""><p>Tech</p></div>
<div class="divImg"><img src="img/filstrosDeBusqueda/animals.jpg" alt=""><p>Animals</p></div>
<div class="divImg"><img src="img/filstrosDeBusqueda/people.jpg" alt=""><p>People</p></div>
<div class="divImg"><img src="img/filstrosDeBusqueda/architecture.jpg" alt=""><p>Architecture</p></div>`;

// console.log(galeriaBusqueda.querySelectorAll('div p')[1].innerHTML);
// console.log(galeriaBusqueda.querySelectorAll('.divImg')[1].outerHTML);

document.addEventListener('keyup', e => {
    if(e.target.matches('#buscar')){
        galeriaBusqueda.innerHTML = auxgaleriaBusqueda;
        let contadorFallo = 0;
        let recopilarImagenes = '';
        let buscar = e.target.value.toLowerCase();
            for(let i=0; i<galeriaBusqueda.querySelectorAll('div p').length; i++){
                let textImagenes = galeriaBusqueda.querySelectorAll('div p')[i].innerHTML.toLowerCase();
                let index = textImagenes.indexOf(buscar);
                if(index >= 0){
                    console.log(textImagenes);
                    recopilarImagenes += galeriaBusqueda.querySelectorAll('.divImg')[i].outerHTML;
                }
                else{
                    contadorFallo++;
                }
            }
            galeriaBusqueda.innerHTML = recopilarImagenes;
            if(contadorFallo === 6){
                galeriaBusqueda.innerHTML = '<div class="divImg"><p>No hay resultados</p></div>'
            }
    }
})