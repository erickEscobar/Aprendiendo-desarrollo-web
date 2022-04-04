use prueba1;

select * from t_prueba;

-- funcion contar cuantos registro hay
select count(comentarios) from t_prueba;
select count(*) as nRegistro from t_prueba;

-- funcion para mostrar el numero mas alto o el numero mas bajo
select max(peso) as mayorPeso from  t_prueba;
select min(peso) as menorPeso from  t_prueba;

-- funcion para mostrar caracteres de una variable, nosotros elejimos desde donde se muestra hasta donde se termina
select substring(fecha, 6,2) as mes from t_prueba;