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

const getEmpleado = (id) => {

    return promesa = new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id);

        if(empleado){
            resolve(empleado);
        } else{
            reject(`Empleado con id ${id} no existe`);
        }
    });

}

const getSalario = (id) => {
    return promesa = new Promise((resolve, reject) => {
        const salario = salarios.find(s => s.id === id);

        if(salario){
            resolve(salario);
        } else{
            reject(`El salario con id ${id}, no existe`);
        }
    })
}

const getInfoUsuario = async (id) => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleado ${empleado.nombre} es de ${salario.salario}`;
    } catch (error) {
        throw error;
    }
}

const id = 2;

getInfoUsuario(id)
    .then(msg => {
        console.log('Todo bien');
        console.log(msg);
    })
    .catch(err => {
        console.log('Todo mal');
        console.log(err);
    });


