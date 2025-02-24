--2.6 Criação e Consulta de uma VIEW
--Dada a tabela:

--transactions

--id (INT)
--account_id (INT)
--transaction_date (DATE)
--amount (DECIMAL)
--Crie uma view chamada monthly_summary que mostre o account_id, o mês (extraído de transaction_date), e o valor total das transações (soma de amount) agrupado por account_id e mês. Em seguida, escreva uma query para listar os resumos mensais apenas para contas que tiveram transações superiores a 10.000 em pelo menos um mês.


-- Criação da VIEW monthly_summary
CREATE VIEW monthly_summary AS
SELECT 
    account_id,
    DATE_FORMAT(transaction_date, '%Y-%m') AS month, -- Extrai o ano-mês da data
    SUM(amount) AS total_amount                   -- Soma dos valores das transações
FROM 
    transactions
GROUP BY 
    account_id, 
    DATE_FORMAT(transaction_date, '%Y-%m');       -- Agrupa por conta e mês

-- Consulta para listar resumos mensais com transações superiores a 10.000
SELECT 
    ms.account_id,
    ms.month,
    ms.total_amount
FROM 
    monthly_summary ms
WHERE 
    ms.account_id IN (
        SELECT 
            account_id
        FROM 
            monthly_summary
        WHERE 
            total_amount > 10000
    )
ORDER BY 
    ms.account_id, 
    ms.month;