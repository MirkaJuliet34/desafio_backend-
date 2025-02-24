# Testes Implementados 🚀

Testes desenvolvidos para avaliar manipulação de tipos em TypeScript, consultas SQL e princípios de Clean Code.


## 1. Testes de TypeScript ✅

### Manipulação de Tipos e Generics 

- Foi implementada a função `extractValues<T, K extends keyof T>(data: T[], key: K): T[K][]`, que recebe um array de objetos e retorna os valores de uma chave específica.

### Validação e Tipagem com Union Types 

- Implementei a função `calculate`, que recebe uma string representando uma operação matemática e dois números. Foi utilizado Union Types para limitar os valores aceitos.

### Imutabilidade e Manipulação de Arrays

- A função `makeAllPositive` transforma números negativos em positivos sem modificar o array original.

#

## Testes de SQL2.1 ✅


### Consulta com Agregação

- Foi escrita uma query para calcular a receita total (`quantity * price`) para cada produto na tabela `sales`, ordenando os resultados em ordem decrescente.

### Identificar Registros Duplicados 

- Implementei uma query para identificar emails duplicados na tabela `users`, listando o número de ocorrências.

### Atualizar Dados Condicionalmente 

- Criei uma query para aumentar o salário em 10% para empregados que ganham menos de 5000, sem alterar os outros registros.

### Consulta com JOIN Simples 

- Foi desenvolvida uma query para listar os clientes que realizaram compras e o total de compras efetuadas, ordenando por valor total.

### Consulta com JOIN e Filtragem 

- Criei uma consulta que relaciona produtos, categorias e vendas, filtrando apenas categorias que venderam mais de 100 unidades.

### Criação e Consulta de uma VIEW 

- Criei uma `VIEW` chamada `monthly_summary` para agrupar transações mensais e permitimos consultar contas com transações superiores a 10.000 em pelo menos um mês.

#

## Testes de Clean Code ✅

### Refatoração de Código

- Refatorei a função `processItems` para torná-la mais legível e modular.

### Refatoração de Lógica Complexa

- Reestruturei `calculateDiscount` para evitar redundâncias e melhorar a organização do código.

### Melhorando Nomes e Estrutura

- Refatorei a função `c` para utilizar nomes mais descritivos e melhorar a modularidade do código.