use prueba1;

select * from t_prueba;

-- and - or
select * from t_prueba where fecha = '2002-07-11' or fecha = '2004-08-03';
select * from t_prueba where nombre = 'Erick' and peso = 55.5;
select * from t_prueba where peso between 55.5 and 60 and nombre like 'Er%'; 

-- diferente
select * from t_prueba where nombre <> 'juan';
