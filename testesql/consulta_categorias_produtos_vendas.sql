--2.5 Consulta com JOIN e Filtragem
--Dadas as tabelas:

--products

--id (INT)
--name (VARCHAR)
--category_id (INT)
--categories

--id (INT)
--name (VARCHAR)
--sales

--id (INT)
--product_id (INT)
--quantity (INT)
--Escreva uma query para listar o nome da categoria, o nome do produto e a quantidade total vendida de cada produto. Filtre apenas as categorias que possuem mais de 100 unidades vendidas no total.

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category_id INT REFERENCES categories(id)
);

CREATE TABLE sales (
    id SERIAL PRIMARY KEY,
    product_id INT REFERENCES products(id),
    quantity INT NOT NULL
);

-- 2. Inserir dados de exemplo nas tabelas

-- Inserir categorias
INSERT INTO categories (name) VALUES 
('Eletrônicos'),
('Roupas'),
('Alimentos');

-- Inserir produtos
INSERT INTO products (name, category_id) VALUES 
('Smartphone', 1),
('Notebook', 1),
('Camiseta', 2),
('Calça Jeans', 2),
('Arroz', 3),
('Feijão', 3);

-- Inserir vendas
INSERT INTO sales (product_id, quantity) VALUES 
(1, 50),  -- Smartphone
(1, 60),  -- Smartphone
(2, 30),  -- Notebook
(3, 200), -- Camiseta
(4, 150), -- Calça Jeans
(5, 80),  -- Arroz
(6, 70);  -- Feijão

-- 3. Executar a consulta com JOIN e filtragem
SELECT 
    c.name AS category_name,
    p.name AS product_name,
    SUM(s.quantity) AS total_quantity_sold
FROM 
    categories c
JOIN 
    products p ON c.id = p.category_id
JOIN 
    sales s ON p.id = s.product_id
GROUP BY 
    c.name, p.name
HAVING 
    SUM(s.quantity) > 100;