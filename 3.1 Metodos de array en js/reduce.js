// reduce

// metodo normal
let arr = [2,4,6,8,10,12,14,16,18];
let result = 0;

for(let index = 0; index < arr.length; index++){
    result += arr[index];
}
console.log(result);

//metodo reduce
let resul2 = arr.reduce((prev, item, index)=>{
    return prev + item;
}, 0)
console.log(resul2);