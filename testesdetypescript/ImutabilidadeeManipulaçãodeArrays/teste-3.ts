/*1.3 Imutabilidade e Manipulação de Arrays
Implemente uma função que recebe uma lista de números e retorna uma nova lista onde todos os números negativos são transformados em positivos, sem modificar a lista original.

Exemplo:

const numbers = [-1, 2, -3, 4];
const result = makeAllPositive(numbers);
Saída esperada: [1, 2, 3, 4] */


function makeAllPositive(numbers) {
    return numbers.map(num => Math.abs(num));
  }
  
  const numbers1 = [-1, 2, -3, 4]; 
  const result1 = makeAllPositive(numbers1); 
  console.log("Lista original:", numbers1); 
  console.log("Resultado:", result1); 
  
  const numbers2 = [-5, -10, 0, 15]; 
  const result2 = makeAllPositive(numbers2);
  console.log("Lista original:", numbers2); 
  console.log("Resultado:", result2); 
  
  const numbers3 = []; 
  const result3 = makeAllPositive(numbers3);
  console.log("Lista original:", numbers3); 
  console.log("Resultado:", result3); 