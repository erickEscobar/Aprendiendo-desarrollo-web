// Metodo nativo de node.js
// const http = require('http');
// const port = 5000;

// const server = http.createServer((req, res) => {
//     res.end('esta es la respuesta 🚀');
// });

// server.listen(port, () => console.log('funcionando 😊'));
const fs = require('fs');

// Metodo con express.js
const express = require('express');
const app = express();
const port = 5000;

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true})); //Sirve para leer el metodo POST y otras cosas mas

// Formulario enviado por el metodo get
// app.get('/formulario', (req, res) => {
//     console.log(req.query);
//     res.send('Formulario enviado.. ' + req.query.nombre);
// })

// Formulario enviado por el metodo post
app.post('/formulario', (req, res) => {
    console.log(req.body);
    const {nombre, apellido} = req.body;
    if(!nombre || !apellido) return res.redirect('/error.html');

    // Creando un archivo, el primer parametro es el name del archivo y el segundo el cuerpo
    fs.writeFile(`archivos/${nombre}.txt`, apellido, err => {
        if(err) return res.send('error al crear el archivo');
        res.download(__dirname + `/archivos/${nombre}.txt`);
    })

    // res.send('Formulario enviado.. ');
})

app.get('/', (req, res) => {
    res.send('visitaste la pagina de inicio 🚀');
})

app.get('/mas', (req, res) => {
    res.send('Hola esto es mas');
    // res.download(__dirname, + `/index.js`);
})

app.listen(port, () => console.log('funcionando 😊'));