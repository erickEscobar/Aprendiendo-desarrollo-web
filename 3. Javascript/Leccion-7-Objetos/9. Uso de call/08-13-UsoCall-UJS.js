let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){
        return titulo + ": " + this.nombre + ' ' + this.apellido + ", tel:" + tel;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

//Uso de call para usar 
//el metodo persona1.nombreCompleto con los datos del persona2
console.log(persona1.nombreCompleto('Lic','098342421'));

console.log(persona1.nombreCompleto.call(persona2, 'Ing','0986472125'));