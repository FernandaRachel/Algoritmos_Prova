USE [EXERCICIO2];

SELECT DISTINCT p.fk AS CLIENTE,
p.ativo, SUM(p.valor) AS VALOR 
FROM [dbo].[Posicoes] p
where p.ativo LIKE  '%Ações%' 
ORDER BY p.fk;


select m.*
  from minha_tabela m
 inner join (
       select codigo, max(data) data
         from minha_tabela
        group by codigo) x
 using(codigo, data);

SELECT tudo.*
from [dbo].[Posicoes] tudo
	inner join (
	SELECT MAX(F.VALOR) AS VALOR FROM (SELECT p.fk AS CLIENTE,
	SUM(p.valor) AS VALOR 
	FROM [dbo].[Posicoes] p
	where p.ativo LIKE  '%Ações%' 
	GROUP BY p.fk)) x;

SELECT MAX(VALOR) AS VALOR FROM(SELECT p.fk AS CLIENTE,
SUM(p.valor) AS VALOR 
FROM [dbo].[Posicoes] p
where p.ativo LIKE  '%Ações%' 
GROUP BY p.fk) AS p2
;

SELECT p.fk AS CLIENTE,
SUM(p.valor) AS VALOR 
FROM [dbo].[Posicoes] p
where p.ativo LIKE  '%Ações%' 
GROUP BY p.fk;
