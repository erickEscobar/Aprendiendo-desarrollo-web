let persona = {
    nombre: 'Erick',
    apellido: 'Escobar',
    email: 'ericking8311@gmail.com',
    edad: 18,
    nombreCompleto: function(){
        return (this.nombre + ' ' + this.apellido);
    }
}

console.log(persona.email);
console.log(persona.nombreCompleto());


//Otra forma de crear objetos
let persona2 = new Object;
persona2.nombre = 'Dario';
persona2.edad = 16;
persona2.informacion = function(){
    return this.nombre + ' tiene ' + this.edad + ' años.';
}

console.log(persona2.informacion());