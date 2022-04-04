//Funcion constructor de objetos de tipo Persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        let x;
        x = "Mi nombre es " + this.nombre + ' ' + this.apellido;
        return x;
    }
}

let padre = new Persona('Juan', 'Escobar', 'jperez@mail.com');
padre.nombre = 'Erick'
console.log(padre.nombreCompleto());

let madre = new Persona('Laura', 'Quintero', 'lquintero@mail.com');
console.log( madre );
