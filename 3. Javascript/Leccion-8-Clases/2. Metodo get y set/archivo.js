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
}

let persona1 = new Persona('Erick', 'Escobar');
console.log(persona1);

persona1.nombre = 'Juan';//Se llama al metodo set
console.log(persona1.nombre);//Se llama al metodo get