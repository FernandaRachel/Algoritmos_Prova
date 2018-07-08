USE [EXERCICIO2];

SELECT city, MAX(totalSalary) maxSalary 
FROM( SELECT city, SUM(salary) AS totalSalary FROM employee GROUP BY city  ) AS tempTable


SELECT  Ativo as Ativo, MAX(ValorTotal) AS ValorTotal FROM (
SELECT DISTINCT ativo AS Ativo,
SUM(valor) AS ValorTotal
FROM  [dbo].[Posicoes] 
GROUP BY ativo) AS tabela

SELECT  MAX(p.ValorTotal) AS ValorTotal FROM (
SELECT DISTINCT p.ativo AS Ativo,
SUM(p.valor) AS ValorTotal
FROM  [dbo].[Posicoes] p
GROUP BY P.ativo) AS p


SELECT DISTINCT p.ativo AS Ativo,
SUM(p.valor) AS ValorTotal
FROM  [dbo].[Posicoes] p
GROUP BY P.ativo