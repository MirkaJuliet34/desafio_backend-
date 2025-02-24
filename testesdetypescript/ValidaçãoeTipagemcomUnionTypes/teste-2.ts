/*1.2 Validação e Tipagem com Union Types
Implemente uma função que recebe uma string representando uma operação matemática (add, subtract, multiply, divide) e dois números. A função deve realizar a operação correspondente e lançar um erro caso a operação não seja suportada.

Exemplo:

calculate('add', 10, 5); // 15
calculate('divide', 10, 0); // Error: Division by zero */


type Operation = 'add' | 'subtract' | 'multiply' | 'divide';

function calculate(operation: Operation, num1: number, num2: number): number {
    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            if (num2 === 0) {
                throw new Error('Division by zero');
            }
            return num1 / num2;
        default:
            throw new Error('Unsupported operation');
    }
}

// Exemplos de uso:
try {
    console.log(calculate('add', 10, 5)); // Saída: 15
    console.log(calculate('subtract', 10, 5)); // Saída: 5
    console.log(calculate('multiply', 10, 5)); // Saída: 50
    console.log(calculate('divide', 10, 2)); // Saída: 5
    console.log(calculate('divide', 10, 0)); // Erro: Division by zero
    // console.log(calculate('modulus', 10, 5)); // Erro: Unsupported operation
} catch (error) {
    console.error(error.message);
}