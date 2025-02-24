--2.3 Atualizar Dados Condicionalmente
--Dada a tabela employees com as colunas:

--id (INT)
--name (VARCHAR)
--salary (DECIMAL)
--Escreva uma query para aumentar o salário em 10% para os empregados que ganham menos de 5000, mas não altere os outros.


-- Criação da tabela employees
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    salary DECIMAL(10, 2)
);

-- Inserção de dados de exemplo
INSERT INTO employees (name, salary) VALUES
('Alice', 4500.00),
('Bob', 6000.00),
('Carol', 4800.00),
('David', 7000.00),
('Eve', 4999.99);

-- Consulta para verificar os dados antes da atualização
SELECT * FROM employees;

-- Atualização condicional: Aumento de 10% para salários abaixo de 5000
UPDATE employees -- query
SET salary = salary * 1.10
WHERE salary < 5000;

-- Consulta para verificar os dados após a atualização
SELECT * FROM employees;

