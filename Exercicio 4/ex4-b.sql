USE [EXERCICIO2];


SELECT TOP 1  c.nome, VALOR FROM (SELECT p.fk AS CLIENTE,
SUM(p.valor) AS VALOR 
FROM [dbo].[Posicoes] p
where p.ativo LIKE  '%Ações%' 
GROUP BY p.fk) AS tabela
INNER JOIN [dbo].[Investimentos] i
on tabela.CLIENTE = i.posicao_fk
INNER JOIN [dbo].[Clientes] c
on i.cliente_id = c.id
order by VALOR desc;

