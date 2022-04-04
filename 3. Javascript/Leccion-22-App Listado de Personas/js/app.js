const personas = [
    new Persona('Erick','Escobar'),
    new Persona('Juan', 'Marcos')
];

console.log(personas[0].nombre);

function mostrarPersonas(){
    let texto = '';
    for(let persona of personas){
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona(){
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    if(apellido.value != '' && nombre.value != ''){
        const persona = new Persona(nombre.value, apellido.value);
        console.log(persona);
        personas.push(persona);
        mostrarPersonas();
    }
    else{
        console.log('No hay contenido que agregar');
    }
    
}


console.log(personas);