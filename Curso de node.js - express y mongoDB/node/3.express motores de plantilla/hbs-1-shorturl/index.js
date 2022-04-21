const express = require('express');
const { create } = require("express-handlebars"); 

const app = express();
const port = 4000;

const hbs = create({
    extname: ".hbs",
    partialsDir: ["views/components"]
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.set("views", "./views");


// middleware
app.use("/", require('./routes/home'))
app.use("/auth", require('./routes/auth'))
app.use(express.static(__dirname + '/public'));//este middleware sirve para acceder a la carpeta public

app.listen(port, () => console.log('servidor levantado'));