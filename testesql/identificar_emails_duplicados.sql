/* 
  Query: Identificar emails duplicados na tabela users
  Descrição: Esta query identifica os emails que estão duplicados na tabela `users` e conta o número de ocorrências de cada email.
  Apenas emails que aparecem mais de uma vez são incluídos nos resultados.

  Tabela: users
  Colunas:
  - id (INT): Identificador único do usuário.
  - email (VARCHAR): Endereço de email do usuário.
  - name (VARCHAR): Nome do usuário.

  Lógica:
  - Agrupamos os registros por `email` para contar o número de ocorrências de cada email.
  - Usamos `COUNT(*)` para calcular o número de registros para cada email.
  - Filtramos apenas os emails que aparecem mais de uma vez usando `HAVING`.

  Considerações:
  - Ignoramos emails nulos (`NULL`), pois não fazem sentido no contexto de duplicação.
  - Ordenamos os resultados por número de ocorrências em ordem decrescente para facilitar a visualização dos emails mais duplicados.

  Exemplo de saída:
  | email               | occurrences |
  |---------------------|-------------|
  | exemplo@email.com   | 3           |
  | teste@email.com     | 2           |
*/

-- Consulta principal
SELECT 
    email,
    COUNT(*) AS occurrences
FROM 
    users
WHERE 
    email IS NOT NULL -- Ignora emails nulos
GROUP BY 
    email
HAVING 
    COUNT(*) > 1
ORDER BY 
    occurrences DESC; -- Ordena por número de ocorrências (opcional)
