class Producto{
    static contadorProducto = 0;
    constructor(nombre, precio){
        this._idProducto = ++Producto.contadorProducto;
        this._nombre = nombre;
        this._precio = precio;
    }
    get idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio = precio;
    }
    toString(){
        return this._idProducto + " " + this._nombre + " " + "$" + this._precio;
    }
}

class Orden{
    static contadorOrden = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    }
    constructor(){
        this._idOrden = ++Orden.contadorOrden;
        this._claseProducto = [];
        // this._contadoProductos = 0;
    }
    get idOrden(){
        return this._idOrden; 
    }
    agregarProducto(producto){
        if(this._claseProducto.length < Orden.MAX_PRODUCTOS){
            this._claseProducto.push(producto);
            // this._claseProducto[this._contadoProductos++] = producto;
        }
        else{
            console.log("No se puede agregar mas productos");
        }
    }
    calcularTotal(){
        let total = 0;
        // for(let i = 0; i<this._claseProducto.length;i++){
        //     total += this._claseProducto[i].precio;
        // }
        for(let producto of this._claseProducto){
            total += producto.precio;
        }
        return total;
    }
    mostrarOrden(){
        let productosOrden = "";
        for(let producto of this._claseProducto){
            productosOrden += '\n' + producto.toString() + ' ';
        }
        return(`Orden: ${this._idOrden} Total: $${this.calcularTotal()} Productos: ${productosOrden}`)
    }
}

let producto1 = new Producto('Telefono', 350)
let producto2 = new Producto('Televisor', 500)
console.log(producto1)

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2)
console.log(orden1.mostrarOrden());

let producto3 = new Producto('Computadora', 550);
let producto4 = new Producto('Moto', 100);
let producto5 = new Producto('Laptop', 350);
let producto6 = new Producto('Mesa', 25);

let orden2 = new Orden();
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto4);
orden2.agregarProducto(producto5);
orden2.agregarProducto(producto6);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
console.log(orden2.mostrarOrden());
