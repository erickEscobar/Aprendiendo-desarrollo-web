//some

//metodo normal
const arr = [
    {id: 0, name: 'Las tortas de doña Marta'},
    {id: 1, name: 'Linguinis', rating: 3.5},
    {id: 2, name: 'El sushi de perro'}
]

let test = false;
for(let index = 0; index < arr.length; index++){
    const item = arr[index];
    if(item.rating === undefined){
        test = true;
    }
}
console.log(test);


//metodo some
const test2 = arr.some((item) => {
    return item.rating === undefined;
});
console.log(test2);