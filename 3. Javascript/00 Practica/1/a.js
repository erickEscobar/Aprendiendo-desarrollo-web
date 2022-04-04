
//Funcion para calcular la suma de cada elemento del arreglo
function sumarArreglo(b){
    let suma = 0;
    for(let i=0; i<b.length; i++){
        suma += b[i];
    }
    return suma;
}

//Funcion para calcular la resta de cada elemento del arreglo
function restarArreglo(b){
    let resta = 0, aux = 0;
    for(let i=0; i<(b.length); i++){
        if(b[i]==b[0]){//Este condicional sirve para qie el primer numero del arreglo no sea negativo
            resta = b[i];
            continue;
        }
        resta -= b[i];
    }
    return resta;
}

//Funcion para calcular la multiplicacion
function multipliArreglo(b){
    let multiplicacion = 1;
    for(let i=0; i<b.length; i++){
        multiplicacion *= b[i];
    }
    return multiplicacion;
}

//Funcion para calcular la division de cada elemento del arreglo
function dividirArreglo(b){
    let dividir = 0;
    for(let i=0; i<b.length; i++){
        if(b[i]==b[0]){
            dividir = b[i]
            continue;
        }
        dividir /= b[i];
    }
    return dividir;
}

//Funcion para elevar un numero utilizando el primer elemento del arreglo como base y la cantidad de elementos como exponente
function potenciaArreglo(b){
    let aux, potencia = 0; 
    aux = b.length;
    potencia = b[0]**aux;
    return potencia;
}

let x=12, y=12, z=13, a=34;

let arreglo = [x,y,z,a]

x = sumarArreglo(arreglo)
console.log(x);

x = restarArreglo(arreglo);
console.log(x);

x = multipliArreglo(arreglo);
console.log(x);

x = dividirArreglo(arreglo);
console.log(x);

x = potenciaArreglo(arreglo);
console.log(x);
