const empleados = [
    {
        id: 1,
        nombre: 'Erick'
    },
    {
        id: 2,
        nombre: 'Dario'
    },
    {
        id: 3,
        nombre: 'Papá'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];


const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id);
    
    if(empleado){
        callback(null, empleado.nombre)
    } 
    else{
        callback(`Empleado con id ${id} no existe`)
    }
}

const getSalario = (id, callback) => {
    const salario = salarios.find( salario => salario.id === id)?.salario;
    
    if(salario){
        callback(null, salario);
    } else {
        callback(`Salario con id ${id} no existe`);
    }
}


const id = 3;

getEmpleado(id, (err, empleado) => {
    if(err){
        console.log('Error');
        return console.log(err);
    }
    
    getSalario(id, (err, salario) => {
        if(err){
            console.log('Error')
            return console.log(err);
        }
        console.log(`El empleado: ${empleado} tiene un salario de ${salario}`);
    })

})
