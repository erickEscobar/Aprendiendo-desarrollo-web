use prueba1;
select * from t_prueba;

-- order by - esta clausula ordena numericamente, alfabeticamente o por fechas
select * from t_prueba order by nombre desc;
select * from t_prueba order by nombre asc;

-- group by - ordena por grupos de datos iguales
select * from t_prueba group by comentarios;
