/* 
  Função: makeAllPositive
  Descrição: Recebe uma lista de números e retorna uma nova lista onde todos os números negativos são transformados em positivos.
  A lista original não é modificada (imutabilidade).

  Raciocínio:
  - A imutabilidade é importante porque evita alterações diretas na lista original.
  - Usamos o método `map` para criar uma nova lista, aplicando uma transformação em cada elemento.
  - Para converter números negativos em positivos, usamos a função `Math.abs`, que retorna o valor absoluto de um número.

  Entrada:
  - Uma lista de números (Array).
  
  Saída:
  - Uma nova lista com todos os números positivos.

  Exemplo:
  const numbers = [-1, 2, -3, 4];
  const result = makeAllPositive(numbers);
  Saída esperada: [1, 2, 3, 4]
*/

function makeAllPositive(numbers) {
    // Verifica se a entrada é válida
    if (!Array.isArray(numbers)) {
        throw new Error("Erro: A entrada deve ser uma lista de números.");
    }

    // Cria uma nova lista com valores absolutos usando o método map
    return numbers.map((num, index) => {
        // Garante que apenas números sejam processados
        if (typeof num !== "number") {
            throw new Error(`Erro no índice ${index}: Todos os elementos da lista devem ser números.`);
        }
        return Math.abs(num); // Converte o número para positivo
    });
}

// Teste 1: Lista com números positivos e negativos
const numbers1 = [-1, 2, -3, 4]; 
const result1 = makeAllPositive(numbers1); 
console.log("Lista original:", numbers1); 
console.log("Resultado:", result1); 

// Teste 2: Lista com números negativos e zero
const numbers2 = [-5, -10, 0, 15]; 
const result2 = makeAllPositive(numbers2);
console.log("Lista original:", numbers2); 
console.log("Resultado:", result2); 

// Teste 3: Lista vazia
const numbers3 = []; 
const result3 = makeAllPositive(numbers3);
console.log("Lista original:", numbers3); 
console.log("Resultado:", result3); 

// Teste 4: Caso inválido (entrada não é uma lista)
try {
    const invalidInput = "não é uma lista";
    console.log(makeAllPositive(invalidInput));
} catch (error) {
    console.error("Erro:", error.message);
}

// Teste 5: Caso inválido (elemento não é um número)
try {
    const invalidNumbers = [-1, "texto", -3];
    console.log(makeAllPositive(invalidNumbers));
} catch (error) {
    console.error("Erro:", error.message);
}
