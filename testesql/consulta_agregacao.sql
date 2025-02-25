/* 
  Query: Calcular a receita total por produto
  Descrição: Esta query calcula a receita total (quantity * price) para cada produto na tabela `sales`.
  A receita total é ordenada em ordem decrescente para facilitar a identificação dos produtos mais rentáveis.

  Tabela: sales
  Colunas:
  - id (INT): Identificador único da venda.
  - product (VARCHAR): Nome do produto vendido.
  - quantity (INT): Quantidade vendida.
  - price (DECIMAL): Preço unitário do produto.

  Lógica:
  - Multiplicamos `quantity` por `price` para calcular a receita de cada linha.
  - Agrupamos os resultados por `product` para somar a receita total de cada produto.
  - Ordenamos os resultados por `total_revenue` em ordem decrescente.

  Considerações:
  - Ignoramos linhas onde `quantity` ou `price` são NULL, pois não contribuem para a receita.
  - Usamos COALESCE para lidar com possíveis valores nulos, garantindo que a query seja robusta.

  Exemplo de saída:
  | product   | total_revenue |
  |-----------|---------------|
  | Produto A | 5000.00       |
  | Produto B | 3000.00       |
  | Produto C | 1000.00       |
*/

SELECT 
    product,
    SUM(COALESCE(quantity, 0) * COALESCE(price, 0)) AS total_revenue
FROM 
    sales
WHERE 
    quantity IS NOT NULL AND price IS NOT NULL -- Filtra linhas inválidas
GROUP BY 
    product
ORDER BY 
    total_revenue DESC;
