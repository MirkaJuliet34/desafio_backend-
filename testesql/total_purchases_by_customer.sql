/* 
  Query: Listar clientes e o total de compras realizadas
  Descrição: Esta query lista o nome dos clientes e o total de compras realizadas, ordenando pelo total de compras em ordem decrescente.
  Apenas clientes que realizaram compras são incluídos nos resultados.

  Tabelas:
  - customers: Contém informações sobre os clientes.
    - id (INT): Identificador único do cliente.
    - name (VARCHAR): Nome do cliente.
    - country (VARCHAR): País do cliente.
  - orders: Contém informações sobre os pedidos.
    - id (INT): Identificador único do pedido.
    - customer_id (INT): Referência ao cliente que fez o pedido.
    - total (DECIMAL): Valor total do pedido.

  Lógica:
  - Unimos as tabelas `customers` e `orders` usando JOIN para acessar os dados necessários.
  - Calculamos o total de compras (`SUM(o.total)`) para cada cliente.
  - Agrupamos os resultados por cliente (`c.id`, `c.name`) para calcular o total de compras.
  - Ordenamos os resultados por `total_purchases` em ordem decrescente.
  - Filtramos implicitamente apenas os clientes que realizaram compras, pois usamos INNER JOIN.

  Considerações:
  - Ignoramos linhas onde `total` é NULL, pois não contribuem para o total.
  - Usamos COALESCE para lidar com possíveis valores nulos, garantindo que a query seja robusta.

  Exemplo de saída:
  | customer_name   | total_purchases |
  |-----------------|-----------------|
  | Maria Souza     | 400.00          |
  | João Silva      | 350.00          |
  | Carlos Almeida  | 50.00           |
*/

-- Consulta principal
SELECT 
    c.name AS customer_name,
    SUM(COALESCE(o.total, 0)) AS total_purchases
FROM 
    customers c
JOIN 
    orders o
ON 
    c.id = o.customer_id
WHERE 
    o.total IS NOT NULL -- Filtra linhas inválidas
GROUP BY 
    c.id, c.name
ORDER BY 
    total_purchases DESC; -- Ordena por total de compras
