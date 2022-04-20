const express = require('express');
const { create } = require("express-handlebars"); 

const app = express();
const port = 4000;

const hbs = create({
    extname: ".hbs",
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");



app.get('/', (req, res) => {
    const urls = [
        {origin: "www.google.com/bluuweb1", shortUrl: "fjsetwd1"},
        {origin: "www.google.com/bluuweb2", shortUrl: "fjsetwd2"},
        {origin: "www.google.com/bluuweb3", shortUrl: "fjsetwd3"}
    ];
    res.render('home', {urls: urls});
});
app.get('/login', (req, res) => {
    res.render('login');
});

// middleware
app.use(express.static(__dirname + '/public'));//este middleware sirve para acceder a la carpeta public

app.listen(port, () => console.log('servidor levantado'));