USE [EXERCICIO2];



SELECT TOP 1 fk AS Cliente, SUM(Valor) AS Investimento
FROM [dbo].[Posicoes]
GROUP BY fk order by Investimento desc
--UNION 

SELECT c.nome, p.ativo, p.valor , 
(SELECT TOP 1  SUM(Valor) AS Investimento FROM [dbo].[Posicoes] GROUP BY fk order by Investimento desc) AS [TOTAL INVESTIMENTOS]
FROM [dbo].[Posicoes] p
INNER JOIN [dbo].[Investimentos] i
on p.fk = i.posicao_fk
INNER JOIN [dbo].[Clientes] c
on i.cliente_id = c.id
where fk = (SELECT TOP 1 fk AS Cliente
FROM [dbo].[Posicoes]
GROUP BY fk order by SUM(Valor) desc);



