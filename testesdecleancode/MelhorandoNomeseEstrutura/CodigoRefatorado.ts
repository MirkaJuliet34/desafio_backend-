/* 
  Função: dobrarNumerosPares
  Descrição: Recebe uma lista de números e retorna uma nova lista contendo apenas os números pares dobrados.
  
  Raciocínio:
  - A função principal (`dobrarNumerosPares`) percorre a lista de números e aplica duas operações:
    1. Verifica se o número é par usando a função auxiliar `ehPar`.
    2. Dobra o número usando a função auxiliar `dobrar`.
  - A modularidade facilita a reutilização das funções auxiliares em outros contextos.
  - O uso de `for...of` torna o código mais legível e evita o uso explícito de índices.

  Entrada:
  - `numeros`: Uma lista de números.

  Saída:
  - Uma nova lista contendo apenas os números pares dobrados.

  Exemplo:
  const numeros = [1, 2, 3, 4, 5, 6];
  console.log(dobrarNumerosPares(numeros)); // Saída esperada: [4, 8, 12]
*/

function dobrarNumerosPares(numeros: number[]): number[] {
    // Verifica se a entrada é válida
    if (!Array.isArray(numeros)) {
        throw new Error("Erro: A entrada deve ser uma lista de números.");
    }

    const numerosParesDobrados: number[] = [];

    // Itera sobre cada número da lista
    for (const numero of numeros) {
        // Garante que o elemento seja um número
        if (typeof numero !== "number") {
            throw new Error(`Erro: O valor '${numero}' não é um número.`);
        }

        // Verifica se o número é par e o dobra
        if (ehPar(numero)) {
            numerosParesDobrados.push(dobrar(numero));
        }
    }

    return numerosParesDobrados;
}

// Função auxiliar: Verifica se um número é par
function ehPar(valor: number): boolean {
    return valor % 2 === 0;
}

// Função auxiliar: Dobra um número
function dobrar(valor: number): number {
    return valor * 2;
}

// Teste 1: Caso básico
const numeros1 = [1, 2, 3, 4, 5, 6];
console.log("Resultado 1:", dobrarNumerosPares(numeros1)); // Saída esperada: [4, 8, 12]

// Teste 2: Lista vazia
const numeros2: number[] = [];
console.log("Resultado 2:", dobrarNumerosPares(numeros2)); // Saída esperada: []

// Teste 3: Lista sem números pares
const numeros3 = [1, 3, 5];
console.log("Resultado 3:", dobrarNumerosPares(numeros3)); // Saída esperada: []

// Teste 4: Caso inválido (entrada não é uma lista)
try {
    const invalidInput = "não é uma lista";
    console.log(dobrarNumerosPares(invalidInput as any));
} catch (error) {
    console.error("Erro:", error.message); // Saída esperada: Erro: A entrada deve ser uma lista de números.
}

// Teste 5: Caso inválido (elemento não é um número)
try {
    const invalidNumbers = [1, "texto", 3];
    console.log(dobrarNumerosPares(invalidNumbers as any));
} catch (error) {
    console.error("Erro:", error.message); // Saída esperada: Erro: O valor 'texto' não é um número.
}
