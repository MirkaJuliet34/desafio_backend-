--2. Testes de SQL
--Warning

--Faça as queries puras, sem o uso de qualquer framework. Utilize arquivos com extensão .sql

--2.1 Consulta com Agregação
--Dada a tabela sales com as colunas:

--id (INT)
--product (VARCHAR)
--quantity (INT)
--price (DECIMAL)

--Escreva uma query para calcular a receita total (quantity * price) para cada produto, 
--ordenando por receita total em ordem decrescente.

SELECT 
    product,
    SUM(quantity * price) AS total_revenue
FROM 
    sales
GROUP BY 
    product
ORDER BY 
    total_revenue DESC;