let promesa = new Promise((resolver) => {
    console.log('Inicio');
    setTimeout(() => resolver('Saludo con promesa'), 4000);
    console.log('Fin');
})

promesa.then(valor=>console.log(valor));

//async Vuleve una funcion normal a promesa
async function miFuncionPromesa(){
    return 'Saludo con async y promesa';
}

miFuncionPromesa().then(valor=>console.log(valor));


//async y await
async function funcionConAsyncYawait(){
    let miPromesa = new Promise((resolver)=>{
        resolver('Saludos33');
    });
    console.log(await miPromesa);
}
funcionConAsyncYawait();


//Promesas con Async, Await y setTimeout
async function miPromesa2(){
    let promesa = new Promise((resolver)=>{
        setTimeout(()=>resolver('Promesa ultima'), (5000));
    });
    console.log(await promesa);
}
miPromesa2();