//find es parecido a filer solo que este te muestra la primera coincidencia

//metodo normal

let arr = [
    {
        city: 'California',
        budget: 5500
    },
    {
        city: 'NY',
        budget: 8000
    },
    {
        city: 'Orlando',
        budget: 2000
    }
]

let menorPrecupuesto = {};
for(let index = 0; index < arr.length; index++){
    let item = arr[index];
    if(item.budget < 8000){
        menorPrecupuesto = item;
        break;
    }
}
console.log(menorPrecupuesto);

//find
let resul2 = arr.find((item)=> item.budget < 8000);
console.log(resul2);

//findIndex este es lo mismo solo que no te muestra el item sino el index
let resul3 = arr.findIndex((item)=> item.budget < 8000);
console.log(resul3);