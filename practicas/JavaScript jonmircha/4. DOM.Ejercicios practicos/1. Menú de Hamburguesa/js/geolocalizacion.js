let idGeolocalizacion = document.getElementById('geolocation');

document.addEventListener('DOMContentLoaded', e => {
    const options = {
        enableHighAccuracy: true,//Trata de hacer la mejor lectura de la posicion posible
        time: 5000, //tiempo que toma en capturar la posiccion
        maximunAge: 0 //cada lectura que tome no la guarde en el cache
    };
    const success = position => {
        const coords = position.coords;
        idGeolocalizacion.innerHTML = 
        `
        <p>Tu posicion actual es:</p>
        <ul>
            <li>Latitud: <b>${coords.latitude}</b></li>
            <li>Longitud: <b>${coords.longitude}</b></li>
            <li>Presición: <b>${coords.accuracy} </b>metros</li>
            <li><a href="https://www.google.com.ec/maps/@${coords.latitude},${coords.longitude},18z" target="_blank" rel="noopener">Ver en Google maps</a></li>
        </ul>
        `
        console.log(position);
    };
    const error = err => {
        console.log(err);
    };

     navigator.geolocation.getCurrentPosition(success, error, options);
});
