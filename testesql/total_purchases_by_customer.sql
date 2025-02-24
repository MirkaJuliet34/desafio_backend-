--2.4 Consulta com JOIN Simples
--Dadas as tabelas: orders

--id (INT)
--customer_id (INT)
--total (DECIMAL)
--customers

--id (INT)
--name (VARCHAR)
--country (VARCHAR)
--Escreva uma query para listar o nome dos clientes e o total de compras realizadas, ordenando pelo total de compras em ordem decrescente. Inclua apenas os clientes que realizaram compras.

-- Passo 1: Criar as tabelas

-- Criar a tabela customers
CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    country VARCHAR(50)
);

-- Criar a tabela orders
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_id INT NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);

-- Passo 2: Inserir dados de exemplo

-- Inserir dados na tabela customers
INSERT INTO customers (name, country) VALUES
('João Silva', 'Brasil'),
('Maria Souza', 'Portugal'),
('Carlos Almeida', 'Espanha'),
('Ana Oliveira', 'Brasil');

-- Inserir dados na tabela orders
INSERT INTO orders (customer_id, total) VALUES
(1, 150.00), -- João Silva
(2, 300.00), -- Maria Souza
(1, 200.00), -- João Silva
(3, 50.00),  -- Carlos Almeida
(2, 100.00); -- Maria Souza

-- Passo 3: Executar a query

-- Query: Listar o nome dos clientes e o total de compras realizadas, ordenando pelo total de compras em ordem decrescente.
-- Inclui apenas os clientes que realizaram compras.

SELECT 
    c.name AS customer_name,
    SUM(o.total) AS total_purchases
FROM 
    customers c
JOIN 
    orders o
ON 
    c.id = o.customer_id
GROUP BY 
    c.id, c.name
ORDER BY 
    total_purchases DESC;