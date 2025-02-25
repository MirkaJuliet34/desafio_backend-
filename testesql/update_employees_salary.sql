/* 
  Query: Atualizar salários condicionalmente
  Descrição: Esta query aumenta o salário em 10% para os empregados que ganham menos de 5000.
  Os salários acima ou iguais a 5000 permanecem inalterados.

  Tabela: employees
  Colunas:
  - id (INT): Identificador único do empregado.
  - name (VARCHAR): Nome do empregado.
  - salary (DECIMAL): Salário do empregado.

  Lógica:
  - Usamos a cláusula `UPDATE` para modificar os dados na tabela `employees`.
  - A condição `WHERE salary < 5000` garante que apenas os empregados com salários abaixo de 5000 sejam afetados.
  - Multiplicamos o salário por 1.10 para aplicar o aumento de 10%.

  Considerações:
  - Ignoramos linhas onde `salary` é NULL, pois não faz sentido aplicar um aumento a valores nulos.
  - Incluímos consultas antes e depois da atualização para verificar os resultados.
  - Ordenamos os resultados finais por `salary` para facilitar a visualização.

  Exemplo de saída após a atualização:
  | id | name   | salary    |
  |----|--------|-----------|
  | 1  | Alice  | 4950.00   |
  | 2  | Bob    | 6000.00   |
  | 3  | Carol  | 5280.00   |
  | 4  | David  | 7000.00   |
  | 5  | Eve    | 5499.99   |
*/

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
SELECT * FROM employees ORDER BY salary;

-- Atualização condicional: Aumento de 10% para salários abaixo de 5000
UPDATE employees
SET salary = ROUND(salary * 1.10, 2) -- Aplica o aumento e arredonda para 2 casas decimais
WHERE salary < 5000 AND salary IS NOT NULL; -- Filtra salários válidos

-- Consulta para verificar os dados após a atualização
SELECT * FROM employees ORDER BY salary;
