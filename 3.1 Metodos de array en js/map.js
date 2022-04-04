//map
//metodo normal
let arrg = ['Juan', 'Erick', 'Pepe', 'Dario', 'Maria'];
let resul = [];

for(let index=0; index<arrg.length; index++){
    const item = arrg[index];
    resul.push(`<div>${item}</div>`);
}
console.log(resul);

//metodo map
let resul2 = arrg.map((item,index)=>{
    return `<div>${item}</div>`;
});
console.log(resul2);
