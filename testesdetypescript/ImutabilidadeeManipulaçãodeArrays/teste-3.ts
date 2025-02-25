/* 
  1.3 Imutabilidade e Manipulação de Arrays
  Implemente uma função que recebe uma lista de números e retorna uma nova lista onde todos os números negativos são transformados em positivos, sem modificar a lista original.
  
  Raciocínio:
  - A imutabilidade é importante porque evita alterações diretas na lista original, garantindo que os dados de entrada permaneçam intactos.
  - Usamos o método `map` para criar uma nova lista, aplicando uma transformação em cada elemento.
  - Para converter números negativos em positivos, usamos a função `Math.abs`, que retorna o valor absoluto de um número.

  Exemplo:
  const numbers = [-1, 2, -3, 4];
  const result = makeAllPositive(numbers);
  Saída esperada: [1, 2, 3, 4]
*/

function makeAllPositive(numbers) {
    if (!Array.isArray(numbers)) {
        throw new Error("A entrada deve ser uma lista de números.");
    }

    return numbers.map(num => {
        if (typeof num !== "number") {
            throw new Error("Todos os elementos da lista devem ser números.");
        }
        return Math.abs(num); 
    });
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

try {
    const invalidInput = "não é uma lista";
    console.log(makeAllPositive(invalidInput));
} catch (error) {
    console.error("Erro:", error.message);
}
