const Url = require('../models/Url');
const {nanoid} = require('nanoid')

const leerUrls = async (req, res) => {
    try {
        const urls = await Url.find().lean();
        res.render("home", {urls: urls});
        
    } catch (error) {
        console.log(error)
        res.send('fallo algo...')
    }
};
const agregarUrls = async (req, res) => {
    console.log(req.body);
    const {origin} = req.body;
    const shortURL = nanoid(7);
    try {
        const url = new Url({origin: origin, shortURL: shortURL});
        await url.save();
        res.redirect("/");
    } catch (err) {
        console.log('error');
        res.send('error algo fallo')
    }
};
const eliminarUrl = async (req, res) => {
    const {id} = req.params
    try {
        await Url.findByIdAndDelete(id)
        res.redirect("/");
    } catch (err) {
        console.log('error');
        res.send('error algo fallo')
    }
};
const editarUrlForm = async (req, res) => {
    const {id} = req.params
    try {
        const url = await Url.findById(id).lean()
        console.log(url);
        res.render("home", {url})
    } catch (err) {
        console.log('error');
        res.send('error algo fallo')
    }
};
const editarUrl = async (req, res) => {
    const {id} = req.params
    const {origin} = req.body
    try {
        await Url.findByIdAndUpdate(id, {origin});
        res.redirect("/");
    } catch (err) {
        console.log('error');
        res.send('error algo fallo')
    }
};
const redireccionamiento = async (req, res) => {
    const {shortURL} = req.params
    try {
        const urlDB = await Url.findOne({shortURL});
        res.redirect(urlDB.origin);
    } catch (err) {
        console.log('error');
        res.send('error algo fallo')
    }
};

module.exports = {
    leerUrls,
    agregarUrls,
    eliminarUrl,
    editarUrlForm,
    editarUrl,
    redireccionamiento
}