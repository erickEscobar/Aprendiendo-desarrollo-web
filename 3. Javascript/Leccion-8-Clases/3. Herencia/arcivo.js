//Clase padre
class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }
    //Sobreescribiendo el metodo de la clase padre Object
    toString(){
        //Se aplica polimorfismo (multiples formas en tiempo de ejecucion)
        //el metodo que se ejecuta depende si es una referencia de tipo padre o hijo
        return this.nombreCompleto();
    }
}

//Clase hijo
class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre,apellido);
        this._departamento = departamento;
    }
    get departamento(){
        return  this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    //Sobreescritura del metodo nombreCompleto
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento//Con el metodo super podemos llamar al metodo de la clase padre
    }
}

let persona1 = new Persona('Erick', 'Escobar');
console.log(persona1);
console.log(persona1.toString());


let empleado1 = new Empleado('Irene', 'Moreira', 'Gerente');
console.log(empleado1);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());