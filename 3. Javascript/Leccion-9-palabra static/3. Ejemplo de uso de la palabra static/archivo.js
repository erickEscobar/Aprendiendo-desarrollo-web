class Persona{

    static contadorPersona = 0;

    constructor(nombre, apellido){
        this._nombre = nombre; 
        this._apellido = apellido;
        this._idPersona = ++Persona.contadorPersona;
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
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }
    //Sobreescribiendo el metodo de la clase Padre (Object)
    toString(){
        return this._idPersona + " " + this.nombreCompleto();
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);//llamar al constructor de la clase padre
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}

let persona1 = new Persona('Juan', 'Perez');
console.log(persona1.toString());

let empleado1 = new Empleado('Pepe', 'Castillo', 'TIC');
console.log(empleado1.toString())
