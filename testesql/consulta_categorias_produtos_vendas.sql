/* 
  Query: Listar produtos e categorias com mais de 100 unidades vendidas
  Descrição: Esta query lista o nome da categoria, o nome do produto e a quantidade total vendida de cada produto.
  Apenas categorias com mais de 100 unidades vendidas no total são incluídas nos resultados.

  Tabelas:
  - categories: Contém informações sobre categorias de produtos.
    - id (INT): Identificador único da categoria.
    - name (VARCHAR): Nome da categoria.
  - products: Contém informações sobre produtos.
    - id (INT): Identificador único do produto.
    - name (VARCHAR): Nome do produto.
    - category_id (INT): Referência à categoria do produto.
  - sales: Contém informações sobre as vendas.
    - id (INT): Identificador único da venda.
    - product_id (INT): Referência ao produto vendido.
    - quantity (INT): Quantidade vendida.

  Lógica:
  - Unimos as tabelas `categories`, `products` e `sales` usando JOINs para acessar os dados necessários.
  - Calculamos a soma das quantidades vendidas (`SUM(s.quantity)`) para cada produto.
  - Agrupamos os resultados por categoria e produto para calcular a quantidade total vendida.
  - Filtramos apenas as categorias com mais de 100 unidades vendidas no total usando `HAVING`.

  Considerações:
  - Ignoramos linhas onde `quantity` é NULL, pois não contribuem para o total.
  - Usamos COALESCE para lidar com possíveis valores nulos, garantindo que a query seja robusta.

  Exemplo de saída:
  | category_name | product_name | total_quantity_sold |
  |---------------|--------------|---------------------|
  | Roupas        | Camiseta     | 200                 |
  | Roupas        | Calça Jeans  | 150                 |
*/

-- Consulta principal
SELECT 
    c.name AS category_name,
    p.name AS product_name,
    SUM(COALESCE(s.quantity, 0)) AS total_quantity_sold
FROM 
    categories c
JOIN 
    products p ON c.id = p.category_id
JOIN 
    sales s ON p.id = s.product_id
WHERE 
    s.quantity IS NOT NULL -- Filtra linhas inválidas
GROUP BY 
    c.name, p.name
HAVING 
    SUM(COALESCE(s.quantity, 0)) > 100
ORDER BY 
    total_quantity_sold DESC; -- Ordena por quantidade vendida (opcional)
