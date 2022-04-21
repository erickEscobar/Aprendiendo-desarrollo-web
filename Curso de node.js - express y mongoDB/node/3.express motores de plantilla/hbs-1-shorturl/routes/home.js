const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    const urls = [
        {origin: "www.google.com/bluuweb1", shortUrl: "fjsetwd1"},
        {origin: "www.google.com/bluuweb2", shortUrl: "fjsetwd2"},
        {origin: "www.google.com/bluuweb3", shortUrl: "fjsetwd3"}
    ];
    res.render("home", {urls: urls});
});
console.log('home')
module.exports = router;