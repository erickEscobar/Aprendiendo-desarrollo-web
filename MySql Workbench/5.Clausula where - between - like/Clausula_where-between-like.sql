use prueba1;

-- clausula where
select * from t_prueba where nombre = 'maria';

-- clausula between sirve solamente en fechas y numeros
select * from t_prueba where peso between 55.5 and 60;
select * from t_prueba where fecha between '2002-03-01' and '2002-08-01';

/*
Clausula like
3 maneras o formas de utilizar like, aunque son 6
'a%' comienza con la letra a
'%a' termina con la letra a
'%or%' tiene dentro de la cadena un or
*/
select * from t_prueba where nombre like 'er%';
select * from t_prueba where nombre like '%o';
select * from t_prueba where comentarios like '%chevere%';
