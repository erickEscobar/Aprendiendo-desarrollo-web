use prueba1;

-- crear una tabla (con sus campos y el tipo de dato de los campos)
create table t_prueba(
				id_prueba int auto_increment,
                nombre varchar(250),
                peso float,
                comentarios text,
                fecha date,
                primary key(id_prueba)
);

-- descripcion de tabla 
describe t_prueba;

-- mostrar todas las tablas
show tables;

-- mostrar todas las bases de datos
show databases;