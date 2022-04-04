use prueba1;

select * from t_prueba; 

-- actualizar datos UPDATE
update t_prueba set comentarios='Actualisamos el comentario' where id_prueba=1;
update t_prueba set nombre='Pepe',
					peso=65
				where id_prueba=4;
                
-- eliminar datos DELETE
delete from t_prueba where id_prueba=5;

-- borrar todos los datos de la tabla TRUNCATE
truncate table t_prueba2;


