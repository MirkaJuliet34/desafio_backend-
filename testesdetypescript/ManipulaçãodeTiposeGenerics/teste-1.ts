/* 
  Função: extractValues
  Descrição: Recebe um array de objetos e retorna um novo array contendo apenas os valores de uma chave específica.
  Utiliza Generics para garantir tipagem segura e flexível.

  Raciocínio:
  - Usamos Generics (`T` e `K`) para garantir que a função seja reutilizável com diferentes tipos de objetos e chaves.
  - A restrição `T extends Record<string, any>` garante que `T` seja um objeto com chaves string.
  - A restrição `K extends keyof T` garante que `key` seja uma chave válida do tipo `T`.
  - O método `map` é usado para extrair os valores da chave especificada de cada objeto no array.

  Entrada:
  - `array`: Um array de objetos do tipo `T`.
  - `key`: Uma chave específica do tipo `K` presente nos objetos.

  Saída:
  - Um array contendo os valores associados à chave especificada.

  Exemplo:
  const data = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];
  const result = extractValues(data, 'name');
  Saída esperada: ['Alice', 'Bob']
*/

function extractValues<T extends Record<string, any>, K extends keyof T>(
    array: T[], 
    key: K 
): T[K][] {
    // Verifica se a entrada é válida
    if (!Array.isArray(array)) {
        throw new Error("Erro: A entrada deve ser um array de objetos.");
    }

    // Cria um novo array com os valores da chave especificada
    return array.map((item) => {
        // Garante que a chave exista no objeto
        if (!(key in item)) {
            throw new Error(`Erro: A chave '${String(key)}' não existe em um dos objetos.`);
        }
        return item[key];
    });
}

// Teste 1: Caso básico
const data1 = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
];
const result1 = extractValues(data1, 'name');
console.log("Resultado 1:", result1); // Saída esperada: ['Alice', 'Bob']

// Teste 2: Chave numérica
const data2 = [
    { id: 1, age: 25 },
    { id: 2, age: 30 },
];
const result2 = extractValues(data2, 'age');
console.log("Resultado 2:", result2); // Saída esperada: [25, 30]

// Teste 3: Lista vazia
const data3: { id: number; name: string }[] = [];
const result3 = extractValues(data3, 'name');
console.log("Resultado 3:", result3); // Saída esperada: []

// Teste 4: Caso inválido (entrada não é um array)
try {
    const invalidInput = "não é um array";
    console.log(extractValues(invalidInput as any, 'name'));
} catch (error) {
    console.error("Erro:", error.message);
}

// Teste 5: Caso inválido (chave inexistente)
try {
    const invalidData = [
        { id: 1, name: 'Alice' },
        { id: 2, age: 30 }, // 'name' não existe neste objeto
    ];
    console.log(extractValues(invalidData, 'name'));
} catch (error) {
    console.error("Erro:", error.message);
}
