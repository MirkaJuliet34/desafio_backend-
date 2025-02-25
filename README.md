<h1 align="center"> Projeto: Exemplos de Códigos SQL e TypeScript 🚀 </h1>

<p align="justify"> Este projeto foi criado para ilustrar como desenvolver soluções robustas e bem documentadas em SQL e TypeScript. Cada código foi desenvolvido com foco em legibilidade, modularidade e tratamento de casos especiais, garantindo que seja adaptável a diferentes cenários. </p>

___________________________________________________________

<h2 align="center"> Princípios de Clean Code✔️ </h2>

<p align="justify"> Os princípios de Clean Code foram aplicados em todos os códigos deste repositório para garantir que eles sejam: </p>


<h3 align="justify"> Legíveis: </h3>

<p align="justify"> Nomes de variáveis, funções e tabelas são descritivos e seguem convenções claras.
Comentários explicam o propósito e o funcionamento de cada parte do código. </p>
 
<h3 align="justify"> Modulares: </h3>

<p align="justify">Funções e consultas são divididas em partes menores e específicas, seguindo o princípio da responsabilidade única .
Isso facilita a reutilização e a manutenção. </p> 

<h3 align="justify"> Robustos: </h3>

<p align="justify">Validações adicionais garantem que entradas inválidas ou nulas sejam tratadas adequadamente.
Tratamento de erros é implementado para evitar falhas inesperadas. </p> 

<h3 align="justify"> Testáveis: </h3>

<p align="justify">Todos os códigos incluem exemplos de entrada e saída, permitindo testes rápidos.
Casos extremos (edge cases) são considerados.</p>  

<h3 align="justify"> Eficientes: </h3>

<p align="justify">As consultas SQL usam índices e agrupamentos eficientes.
Os códigos TypeScript evitam repetições desnecessárias e utilizam Generics para reutilização.</p>  
 
_____________________________________________________________________________________________________________________________________________________________________________

<h2 align="center"> Exemplos de Clean Code nos Códigos✔️ </h2>

### SQL

- **Nomes Descritivos:**
Tabelas e colunas têm nomes claros, como `customers`, `orders`, `transaction_date`, etc.

- **Comentários Explicativos:**
Cada query inclui comentários detalhados sobre sua lógica e propósito.

- **Tratamento de Nulos:**
Queries como `registros_duplicados.sql` e `atualizar_salarios.sql` tratam explicitamente valores nulos (`NULL`).

- **Modularidade:**
A criação da `VIEW monthly_summary` encapsula a lógica de resumo mensal, tornando-a reutilizável.

### TypeScript

- **Funções Pequenas e Específicas:**
Funções como `ehPar`, `dobrar` e `applyDiscount` têm responsabilidades claras e limitadas.

- **Tipagem Segura:**
O uso de Generics e Union Types garante que os dados sejam manipulados corretamente.

- **Validações Adicionais:**
Funções como `dobrarNumerosPares` e `calculate` validam entradas antes de processá-las.

- **Evitar Repetições:**
Lógicas repetitivas, como o cálculo de descontos, são centralizadas em funções auxiliares.

_________________________________________________________________________________________________________

<h2 align="center"> Códigos SQL✔️ </h2>
 
<h3 align="center"> Consulta com JOIN Simples✔️ </h3>

**Descrição:**

<p align="justify">Lista o nome dos clientes e o total de compras realizadas, ordenando pelo total de compras em ordem decrescente. Inclui apenas os clientes que realizaram compras.</p>   

**Arquivo:** `sql/consulta_join.sql`

**Exemplo de Saída:**

| customer_name   | total_purchases |
|-----------------|-----------------|
| Maria Souza     | 400.00          |
| João Silva      | 350.00          |
| Carlos Almeida  | 50.00           |

**Instruções:**

<p align="justify"> Execute o script no seu banco de dados PostgreSQL ou MySQL para criar as tabelas e testar a consulta.</p>

### Identificar Registros Duplicados

**Descrição:**

<p align="justify">Identifica emails duplicados na tabela users e conta o número de ocorrências de cada email.</p>

**Arquivo:** `sql/registros_duplicados.sql`

**Exemplo de Saída:**

| email               | occurrences |
|---------------------|-------------|
| exemplo@email.com   | 3           |
| teste@email.com     | 2           |


**Instruções:**

<p align="justify">Certifique-se de que a tabela `users` exista e contenha dados antes de executar a query.</p>
 
________________________________________________________________________________________________________

### Atualizar Dados Condicionalmente

**Descrição:**

<p align="justify">Aumenta o salário em 10% para os empregados que ganham menos de 5000. Salários acima ou iguais a 5000 permanecem inalterados.</p> 

**Arquivo:** `sql/atualizar_salarios.sql`

**Exemplo de Saída Após Atualização:**

| id | name   | salary    |
|----|--------|-----------|
| 1  | Alice  | 4950.00   |
| 2  | Bob    | 6000.00   |
| 3  | Carol  | 5280.00   |
| 4  | David  | 7000.00   |
| 5  | Eve    | 5499.99   |

**Instruções:**

<p align="justify">Execute o script para criar a tabela, inserir dados e aplicar a atualização condicional.</p> 

________________________________________________________________________________________________________________________________________________

### Criação e Consulta de uma VIEW

**Descrição:**

<p align="justify">Cria uma view chamada monthly_summary que mostra o resumo mensal das transações por conta. Em seguida, lista os resumos mensais apenas para contas que tiveram transações superiores a 10.000 em pelo menos um mês.</p> 

**Arquivo:** `sql/view_resumo_mensal.sql`

**Exemplo de Saída:**

| account_id | month    | total_amount |
|------------|----------|--------------|
| 1          | 2023-01  | 12000.00     |
| 1          | 2023-02  | 8000.00      |
| 2          | 2023-01  | 15000.00     |

**Instruções:**

<p align="justify">Execute o script para criar a view e testar a consulta.</p> 

___________________________________________________________________________________________________________________________________________________

<h2 align="center">  Códigos TypeScript✔️</h2>

### Manipulação de Tipos e Generics

**Descrição:**

<p align="justify"> Implementa uma função que extrai valores de uma chave específica de um array de objetos usando Generics para garantir tipagem segura.</p> 

**Arquivo:** `typescript/generics.ts`

**Exemplo de Uso:**

```
const data = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
];
const result = extractValues(data, 'name');
console.log(result); // ['Alice', 'Bob']
```

**Instruções:**

<p align="justify">Execute o arquivo TypeScript em um ambiente Node.js ou browser compatível.</p> 
 
### Validação e Tipagem com Union Types

**Descrição:**

<p align="justify">Implementa uma função que realiza operações matemáticas (add, subtract, etc.) e lança erros para operações não suportadas ou divisões por zero.</p> 

**Arquivo:** `typescript/union_types.ts`

**Exemplo de Uso:**

```
console.log(calculate('add', 10, 5)); // 15
console.log(calculate('divide', 10, 0)); // Error: Division by zero
```

**Instruções:**

<p align="justify">Compile o arquivo TypeScript e execute-o em um ambiente Node.js.</p> 


### Funções Modulares e Reutilizáveis

**Descrição:**

<p align="justify">Demonstra a implementação de funções modulares para dobrar números pares em uma lista, com validações adicionais.</p> 

**Arquivo:** `typescript/funcoes_modulares.ts`

**Exemplo de Uso:**

```
const numeros = [1, 2, 3, 4, 5, 6];
console.log(dobrarNumerosPares(numeros)); // [4, 8, 12]
```

**Instruções:**

<p align="justify">Execute o arquivo TypeScript para testar as funções.</p> 


<h2 align="center">Como Executar os Códigos✔️</h2>

### SQL:

- Certifique-se de ter um banco de dados (PostgreSQL, MySQL, etc.) configurado.
- Execute os scripts `.sql` diretamente no console do banco de dados ou use uma ferramenta como pgAdmin ou MySQL Workbench.
  
### TypeScript:

- Instale o Node.js e o compilador TypeScript (`npm install -g typescript`).
- Compile os arquivos TypeScript usando `tsc <nome_do_arquivo>.ts`.
- Execute os arquivos JavaScript gerados com `node <nome_do_arquivo>.js`.





