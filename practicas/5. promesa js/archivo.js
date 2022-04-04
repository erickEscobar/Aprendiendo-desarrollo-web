function numeroPar(value){
    if(value%2!==0){
        return Promise.reject(`El numero ${value} es impar`);
    }
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`El numero ${value} es par`)
        },5000);
    });
}

// numeroPar(10)
// .then((numero)=>{
//     console.log(numero);
//     return numeroPar(11)
// })
// .then((numero)=>{
//     console.log(numero);
// })
// .catch((numero)=>console.log(numero));


console.time('tiempo');
async function funcionAsincrona(){
    try{
        let numero = await numeroPar(2);
        console.log(numero);
        numero = await numeroPar(4);
        console.log(numero);
        numero = await numeroPar(7);
        console.log(numero);
        numero = await numeroPar(10);
        console.log(numero);
    }catch(err){
        console.error(err);
    }
}

funcionAsincrona();
console.timeEnd('tiempo');
