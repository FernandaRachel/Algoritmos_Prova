USE [EXERCICIO2];


SELECT top 1  p.ativo AS Ativo,
SUM(p.valor) AS ValorTotal,Convert(numeric(15,5),SUM(p.valor))/ 
( SELECT Convert(numeric(15,5),SUM(pa.valor)) 
FROM  [dbo].[Posicoes] pa
 ) * 100 as Porcentagem
FROM  [dbo].[Posicoes] p
GROUP BY P.ativo order by ValorTotal desc
 
