class Persona{
    static contadorPersona = 0;
    constructor(nombre, apellido, edad){
        Persona.contadorPersona++;
        this._idPersona = Persona.contadorPersona;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    get idPersona(){
        return this._idPersona;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }
    infoPersona(){
        return this.idPersona + ". " + this.nombre + " " + this.apellido + " " + this.edad;
    }
    toString(){
        return this.infoPersona();
    }
}

class Empleado extends Persona{
    static contadorEmpleado = 0;
    constructor(nombre, apellido, edad, sueldo){
        Empleado.contadorEmpleado++;
        super(nombre, apellido, edad);
        this._idEmpleado = Empleado.contadorEmpleado;
        this._sueldo = sueldo;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    infoPersona(){
        super._idPersona = this.idEmpleado;//Para reemplazar el id de persona y poner el Empleado
        return super.infoPersona() + " " + " " + this.sueldo;
    }
}

class Cliente extends Persona{
    static contadorCliente = 0;
    constructor(nombre, apellido, edad, fechaRegistro){
        Cliente.contadorCliente++;
        super(nombre, apellido, edad);
        this._idCliente = Cliente.contadorCliente;
        this._fechaRegistro = fechaRegistro;
    }
    get idCliente(){
        return this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this.fechaRegistro = fechaRegistro;
    }
    infoPersona(){
        super._idPersona = this.idCliente;//Para reemplazar el id de persona y poner el cliente
        return super.infoPersona() + " " + this.fechaRegistro;
    }
}

let persona1 = new Persona('Erick', 'Escobar', 18);
console.log(persona1.toString())

let persona2 = new Persona('JUan', 'Pepe', 18);
console.log(persona2.toString())

// Clase empleado
let empleado1 = new Empleado('Irene', 'Moreira', 38, 2500);
console.log(empleado1.toString());

let persona3 = new Persona('Leon', 'Reyes', 18);
console.log(persona3.toString())

let empleado2 = new Empleado('Irene', 'Moreira', 38, 2500);
console.log(empleado2.toString());


// Clase Cliente
let cliente1 = new Cliente('Jesus', 'Cobeña', '10', new Date());
console.log(cliente1.toString());

let persona4 = new Persona('Erick', 'Escobar', 18);
console.log(persona4.toString())