console.log('hola');

document.addEventListener("click", e => {
    if(e.target.dataset.short){
        let url = `http://localhost:4000/${e.target.dataset.short}`;

        navigator.clipboard
        .writeText(url)
        .then(() => {
            console.log("Text copied to clipboard...");
        })
        .catch((err) => {
            console.log("Something went wrong", err);
        });
    }
    // console.log(e.target.dataset.short);
})