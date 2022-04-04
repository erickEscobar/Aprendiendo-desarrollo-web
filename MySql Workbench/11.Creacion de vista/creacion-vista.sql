use prueba1;

select * from t_prueba;

-- Creamos vista
create view t_vista_A as
select id_prueba,nombre,peso from t_prueba;

create view t_vista_B as
select id_prueba,nombre,fecha from t_prueba;

select * from t_vista_A;
select * from t_vista_B;
