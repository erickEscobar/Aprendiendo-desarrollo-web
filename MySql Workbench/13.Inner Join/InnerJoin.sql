use prueba1;

-- inner join sirve para unir tablas
select tp.nombre,td.pais from t_persona as tp
inner join t_domicilio as td
on tp.id_persona=td.id_persona;