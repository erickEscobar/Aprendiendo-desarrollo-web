
/*
for(let i=2; i<=10; i++){
    if(i%2==0){
        console.log(i);
        break;
    }
}
*/


for(let i=0; i<=10; i++){
    if(i%2 !== 0){
        continue;
    }
    console.log(i);
}
console.log("Fin del ciclo for");