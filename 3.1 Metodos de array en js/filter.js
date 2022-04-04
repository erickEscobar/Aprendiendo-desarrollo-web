//filer

//metodo normal

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

let resul = [];

for(let index=0; index<arr.length; index++){
    const item = arr[index];
    if(item >=5 && item <=10){
        resul.push(item);
    }
}
console.log(resul);

//metodo filer
let resul2 = arr.filter((item, index) => item >= 5 && item <= 10);
console.log(resul2);