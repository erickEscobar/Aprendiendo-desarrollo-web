const express = require('express');
const { create } = require("express-handlebars"); 
require('dotenv').config()
require('./database/db.js')

const app = express();

const hbs = create({
    extname: ".hbs",
    partialsDir: ["views/components"]
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");


// middleware
app.use(express.urlencoded({extended: true}));
app.use("/", require('./routes/home'))
app.use("/auth", require('./routes/auth'))
app.use(express.static(__dirname + '/public'));//este middleware sirve para acceder a la carpeta public

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log('servidor levantado: ' + PORT));
