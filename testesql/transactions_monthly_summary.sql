/* 
  View: monthly_summary
  Descrição: Esta view calcula o resumo mensal das transações para cada conta.
  - Extrai o ano-mês da coluna `transaction_date` usando `DATE_FORMAT`.
  - Calcula o total de transações (`SUM(amount)`) para cada conta e mês.
  - Agrupa os resultados por `account_id` e ano-mês.

  Tabela: transactions
  Colunas:
  - id (INT): Identificador único da transação.
  - account_id (INT): Identificador da conta associada à transação.
  - transaction_date (DATE): Data da transação.
  - amount (DECIMAL): Valor da transação.

  Lógica:
  - A view `monthly_summary` é criada para simplificar consultas futuras.
  - A consulta principal lista os resumos mensais apenas para contas que tiveram transações superiores a 10.000 em pelo menos um mês.
  - Usamos uma subconsulta para identificar as contas que atendem ao critério de valor mínimo.

  Considerações:
  - Ignoramos linhas onde `amount` ou `transaction_date` são NULL, pois não contribuem para o cálculo.
  - Ordenamos os resultados por `account_id` e `month` para facilitar a visualização.

  Exemplo de saída:
  | account_id | month    | total_amount |
  |------------|----------|--------------|
  | 1          | 2023-01  | 12000.00     |
  | 1          | 2023-02  | 8000.00      |
  | 2          | 2023-01  | 15000.00     |
*/

-- Criação da VIEW monthly_summary
CREATE VIEW monthly_summary AS
SELECT 
    account_id,
    DATE_FORMAT(transaction_date, '%Y-%m') AS month, -- Extrai o ano-mês da data
    SUM(COALESCE(amount, 0)) AS total_amount        -- Soma dos valores das transações
FROM 
    transactions
WHERE 
    transaction_date IS NOT NULL AND amount IS NOT NULL -- Filtra linhas inválidas
GROUP BY 
    account_id, 
    DATE_FORMAT(transaction_date, '%Y-%m');             -- Agrupa por conta e mês

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
            total_amount > 10000                       -- Filtra contas com transações > 10.000
    )
ORDER BY 
    ms.account_id, 
    ms.month;                                          -- Ordena por conta e mês
