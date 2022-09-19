
const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre: function () {
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

// const {nombre, apellido, poder} = deadpool;
// console.log(nombre, apellido, poder);


function imprimeHeroe({nombre, apellido, poder}){
    console.log(nombre, apellido, poder);
}
// imprimeHeroe(deadpool);

const heroes = ['Deadpool', 'Superman', 'Batman'];

const [h1, h2, h3] = heroes;

console.log(h1, h2, h3);