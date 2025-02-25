/* 
  Função: calculate
  Descrição: Recebe uma string representando uma operação matemática ('add', 'subtract', 'multiply', 'divide') e dois números.
  Realiza a operação correspondente e lança erros para operações não suportadas ou divisões por zero.

  Raciocínio:
  - Usamos Union Types (`Operation`) para garantir que apenas operações suportadas sejam aceitas.
  - O uso de `switch` permite mapear cada operação para sua respectiva lógica.
  - Incluímos validações específicas, como verificar divisão por zero e operações inválidas.
  - Tratamento de erros com mensagens descritivas facilita a depuração.

  Entrada:
  - `operation`: Uma string representando a operação ('add', 'subtract', 'multiply', 'divide').
  - `num1`: O primeiro número.
  - `num2`: O segundo número.

  Saída:
  - O resultado da operação matemática.

  Exemplo:
  calculate('add', 10, 5); // 15
  calculate('divide', 10, 0); // Error: Division by zero
*/

type Operation = 'add' | 'subtract' | 'multiply' | 'divide';

function calculate(operation: Operation, num1: number, num2: number): number {
    // Validação básica (opcional, mas útil)
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        throw new Error("Erro: Ambos os números devem ser do tipo 'number'.");
    }

    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            if (num2 === 0) {
                throw new Error("Erro: Divisão por zero.");
            }
            return num1 / num2;
        default:
            throw new Error(`Erro: Operação '${operation}' não suportada.`);
    }
}

// Teste 1: Caso básico
console.log("Resultado 1:", calculate('add', 10, 5)); // Saída esperada: 15

// Teste 2: Subtração
console.log("Resultado 2:", calculate('subtract', 10, 5)); // Saída esperada: 5

// Teste 3: Multiplicação
console.log("Resultado 3:", calculate('multiply', 10, 5)); // Saída esperada: 50

// Teste 4: Divisão válida
console.log("Resultado 4:", calculate('divide', 10, 2)); // Saída esperada: 5

// Teste 5: Divisão por zero
try {
    console.log(calculate('divide', 10, 0));
} catch (error) {
    console.error("Erro:", error.message); // Saída esperada: Erro: Divisão por zero.
}

// Teste 6: Operação inválida
try {
    console.log(calculate('modulus' as Operation, 10, 5));
} catch (error) {
    console.error("Erro:", error.message); // Saída esperada: Erro: Operação 'modulus' não suportada.
}

// Teste 7: Números inválidos
try {
    console.log(calculate('add', "10" as any, 5));
} catch (error) {
    console.error("Erro:", error.message); // Saída esperada: Erro: Ambos os números devem ser do tipo 'number'.
}
