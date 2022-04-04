let miPromesa = new Promise((resolver, rechazar) => {
    let boleano = false;
    if(boleano){
        resolver('Se resolvio correctamente');
    }
    else{
        rechazar('Se produjo un error');
    }
})

// miPromesa.then(valor => console.log(valor), error => console.log(error));

miPromesa
.then(valor => console.log(valor))
.catch(error => console.log(error));
