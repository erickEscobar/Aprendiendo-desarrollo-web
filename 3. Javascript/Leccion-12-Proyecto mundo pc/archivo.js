
class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
    toString(){
        return `tipoEntada: ${this._tipoEntrada},   marca: ${this._marca}`;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada,marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `idRaton: ${this._idRaton}, ${super.toString()}`
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclado = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclado;
    }
    toString(){
        return `idTeclado: ${this._idTeclado}, ${super.toString()}`
    }
}

class Monitor{
    static contadorMonitor = 0;
    constructor(marca, tamano){
        this._idMonitor = ++Monitor.contadorMonitor;
        this._marca = marca;
        this._tamano = tamano;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
    get tamano(){
        return this._tamano;
    }
    set tamano(tamano){
        this._marca = tamano;
    }
    toString(){
        return `idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamano}`
    }
}

class Computadora{
    static contadorComputadora = 0;
    constructor(nombre, Monitor, Teclado, Raton){
        this._idComputadora = ++Computadora.contadorComputadora;
        this._nombre = nombre;
        this._monitor = Monitor;
        this._teclado = Teclado;
        this._raton = Raton;
    }
    get idComputadora(){
        return this._idComputadora;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get monitor(){
        return this._monitor;
    }
    set monitor(monitor){
        this._monitor = monitor;
    }
    get teclado(){
        return this._teclado;
    }
    set teclado(teclado){
        this._teclado = teclado;
    }
    get raton(){
        return this._raton;
    }
    set raton(raton){
        this._raton = raton;
    }
    toString(){
        return `Computadora ${this._idComputadora}: ${this._nombre} \nMonitor: ${this._monitor} \nRaton: ${this._raton} \nTeclado: ${this._teclado}`
    }
}

class Orden{
    static contadorOrden = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrden;
        this._computadoras = [];
    }
    agregarComputadora(Computadora){
        this._computadoras.push(Computadora);
    }
    mostrarOrden(){
        let mostrar = '';
        for(let computadora of this._computadoras){
            mostrar += '\n' + computadora.toString();
        }
        return `Orden: ${this._idOrden}, Computadoras: ${mostrar}`;
    }
}

//Clase DispositovoEntrada
let dispo = new DispositivoEntrada();
dispo.tipoEntrada = 'usb';
dispo.marca = 'pp'
console.log(dispo.toString());

//Clase raton
let raton1 = new Raton('usb', 'hp');
console.log(raton1.toString());

//Clase teclado
let teclado1 = new Teclado('inalambrico', 'lenovo');
console.log(teclado1.toString());

//Clase monitor
let monitor1 = new Monitor('rivera', '15');
console.log(monitor1.toString());

//Clase Computador
let computadora1 = new Computadora('hp', monitor1, teclado1, raton1);
console.log(computadora1.toString());
let computadora2 = new Computadora('lenovo', monitor1, teclado1, raton1);

//Clase Orden
let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
console.log(orden1.mostrarOrden())