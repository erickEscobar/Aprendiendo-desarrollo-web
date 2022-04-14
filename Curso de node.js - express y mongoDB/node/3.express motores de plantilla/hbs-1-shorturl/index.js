const express = require('express');
const app = express();
const port = 4000;

// middleware
app.use(express.static(__dirname + '/public'));//este middleware sirve para acceder a la carpeta public

app.get('/', (req, res) => {
    res.redirect('pagina principal');
})
app.get('/h', (req, res) => {
    res.redirect('/otor.html');
})

app.listen(port, () => console.log('servidor levantado'));