function miFuncion1(){
    console.log('Funcion 1');
}

function miFuncion2(){
    console.log('Funcion 2');
}

miFuncion1();
miFuncion2();

//Funcion de tipo callback

function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(n1, n2, funcionCallBack){
    funcionCallBack(n1+n2);
}

sumar(4,6,imprimir);