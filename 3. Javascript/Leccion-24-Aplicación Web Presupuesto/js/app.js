const ingreso = [
    new Ingreso('Salario', 2100.00),
    new Ingreso('Venta coche', 1500)
]

const egreso = [
    new Egreso('Renta departamente', 900),
    new Egreso('Ropa', 400)
]

let cargarApp = () => {
    cargarCabecero();
    cargarIngreso();
    cargarEgreso();
}

let totalIngresos = () => {
    let ingresoTotal = 0;
    for(let recorrer of ingreso){
        ingresoTotal += recorrer.valor;
    }
    return ingresoTotal;
}

let totalEgresos = () => {
    let egresoTotal = 0;
    for(let recorrer of egreso){
        egresoTotal += recorrer.valor;
    }
    return egresoTotal;
}

console.log(totalIngresos());
console.log(totalEgresos());

let cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgresos = totalEgresos() / totalIngresos();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgresos);
}

const formatoMoneda = (valor) => {
    return valor.toLocaleString('en-US', {style:'currency', currency:'USD', minimumFractionDigits:2});
}

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('en-US', {style:'percent', minimumFractionDigits:2});
}

const cargarIngreso = () => {
    let ingresosHTML = '';
    for(let recorrer of ingreso){
        ingresosHTML += crearIngresoHTML(recorrer);
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
}

const cargarEgreso = () => {
    let egresoHTML = '';
    for(let recorrer of egreso){
        egresoHTML += crearEgresoHTML(recorrer);
    }
    document.getElementById('lista-egresos').innerHTML = egresoHTML;
}

const crearIngresoHTML = (recorrer) => {
    let ingresosHTML = `
                <div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion">${recorrer.descripcion}</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">+ ${formatoMoneda(recorrer.valor)} </div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn" onclick="eliminar(${recorrer.id}, 'ingreso')">
                                <ion-icon name="close-outline"></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>`;
    return ingresosHTML;
}

const crearEgresoHTML = (recorrer) => {
    let porcentaje = recorrer.valor / totalIngresos();
    let egresoHTML = `
                <div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion">${recorrer.descripcion}</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">- ${formatoMoneda(recorrer.valor)} </div>
                        <div class="elemento_porcentaje">${formatoPorcentaje(porcentaje)}</div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn" onclick="eliminar(${recorrer.id}, 'egreso')">
                                <ion-icon name="close-outline"></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>`
    return egresoHTML;
}

const eliminar = (id, dato) => {
    if(dato == 'ingreso'){
        let indiceEliminar = ingreso.findIndex(ingre => ingre.id == id);
        ingreso.splice(indiceEliminar, 1);
        cargarCabecero();
        cargarIngreso();
    }
    else{
        let indiceEliminar = egreso.findIndex(egre => egre.id === id);
        egreso.splice(indiceEliminar, 1);
        cargarCabecero();
        cargarEgreso();
    }
    
}

const agregarDato = () => {
    let formulario = document.forms['forma'];
    let descripcion = formulario['descripcion'].value;
    let valor = formulario['valor'].value;
    let tipo = formulario['tipo'].value;
    if(descripcion !== '' && valor !== ''){
        if(tipo === 'ingreso'){
            ingreso.push(new Ingreso(descripcion, +valor));
            cargarIngreso();
            cargarCabecero();
        }
        else if(tipo === 'egreso'){
            egreso.push(new Egreso(descripcion, +valor));
            cargarEgreso();
            cargarCabecero();
        }
    }
}