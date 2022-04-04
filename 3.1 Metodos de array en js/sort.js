//sort  sirve para ordenar los numeros

//metodo burbuja
const arr = [2,10,4,22,56,1000,3,45,6];

for(let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length; j++){
        if(arr[i] > arr[j]){
            let aux = arr[i];
            arr[i] = arr[j];
            arr[j] = aux;
        }
    }
}
console.log(arr);


let arr2 = [2,10,4,22,56,1000,3,45,6];
//metodo sort

// arr2.sort((i,j) => {
//     return i-j
// });

arr2.sort((i,j) => {
    if(i < j) return -1;
    if(i > j) return 1;
    return 0;
});

console.log(arr2)