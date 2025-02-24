/* 1. Testes de TypeScript
1.1 Manipulação de Tipos e Generics
Implemente uma função que recebe um array de objetos e retorna um novo array contendo apenas os valores de uma chave específica. Utilize Generics para garantir a tipagem.

Exemplo:

const data = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];
const result = extractValues(data, 'name');
Saída esperada: ['Alice', 'Bob'] */

function extractValues<T extends Record<string, any>, K extends keyof T>(
    array: T[], 
    key: K 
  ): T[K][] {
    return array.map((item) => item[key]);
  }
  
  const data = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];
  const result = extractValues(data, 'name');
  console.log(result); 