let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + tel;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

//Uso de apply para usar 
//el metodo persona1.nombreCompleto con los datos del persona2
console.log( persona1.nombreCompleto('Lic', '66887711') );


/*Si no pasas atributos el metodo apply es lo mismo que call pero si pasas atributos en el metodo call se pasan uno por uno
y el metodo call se lo paso todos los atributos dentro de un arreglo*/
let arreglo = ['Ing','55443322'];
console.log( persona1.nombreCompleto.apply( persona2, arreglo) );