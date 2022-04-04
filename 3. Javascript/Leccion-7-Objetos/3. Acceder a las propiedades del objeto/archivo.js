let persona = {
    nombre: 'Erick',
    apellido: 'Escobar',
    email: 'ericking8311@gmail.com',
    edad: 18,
    nombreCompleto: function(){
        return (this.nombre + ' ' + this.apellido);
    }
}


//otra manera de acceder a las propiedades de un obejeto es...
console.log(persona['nombre']);

//Con for podemos recorrer las propiedades del objeto primero nombramos una y luego ponemos "in" seguido del nombre del objeto
for(nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}