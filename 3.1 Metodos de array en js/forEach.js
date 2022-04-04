//forEach Este metod sirve para recorrer un arreglo, el primer parametro es para el contenido del arreglo, el segundo es para la posicion
// function recorrerArreglo(item, index){
//     console.log(item,index);
// }

//metodo simple
let arreglo = [2,4,6,8,10,12];

for(let i=0; i<arreglo.length; i++){
    const item = arreglo[i];
    const index = i
    console.log(item, index);
}

//metodo forEach
arreglo.forEach((item,index)=>{
    console.log(item, index);
});






