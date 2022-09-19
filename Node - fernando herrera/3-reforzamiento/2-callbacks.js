
// setTimeout(() => {
//     console.log('hola mundo')
// }, 1000);

const getUsuarioById = (id, callback) => {
    const user = {
        id,
        nombre: 'Erick'
    }

    setTimeout(() => {
        callback(user)
    }, 1500);

}

getUsuarioById(12, (usuario) => {
    console.log(usuario);
});