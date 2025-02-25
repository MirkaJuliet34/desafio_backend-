/* 
  Interface: Item
  Descrição: Define a estrutura de um item com nome e preço.
  Raciocínio:
  - Usamos uma interface para garantir que todos os itens tenham as propriedades `name` e `price`.
  - Isso melhora a segurança de tipos e facilita a compreensão do código.

  Função: isExpensive
  Descrição: Verifica se um item é caro (preço maior que 100).
  Raciocínio:
  - A função encapsula a lógica de verificação de preço, tornando-a reutilizável e clara.

  Função: logExpensiveItem
  Descrição: Imprime no console que um item é caro.
  Raciocínio:
  - A função separa a responsabilidade de exibir mensagens, melhorando a modularidade.

  Função: processItems
  Descrição: Processa uma lista de itens e imprime mensagens para os itens caros.
  Raciocínio:
  - A função principal delega tarefas específicas para funções auxiliares, seguindo o princípio da responsabilidade única.
  - O uso de `forEach` elimina a necessidade de gerenciar índices manualmente.

  Exemplo:
  const items = [
      { name: "Laptop", price: 1200 },
      { name: "Mouse", price: 20 },
      { name: "Smartphone", price: 800 },
  ];
  processItems(items);
  // Saída esperada:
  // Laptop is expensive
  // Smartphone is expensive
*/

// Interface para definir a estrutura dos itens
interface Item {
    name: string;
    price: number;
}

// Função para verificar se um item é caro
function isExpensive(item: Item): boolean {
    return item.price > 100;
}

// Função para imprimir mensagens sobre itens caros
function logExpensiveItem(item: Item): void {
    console.log(`${item.name} is expensive`);
}

// Função principal para processar os itens
function processItems(items: Item[]): void {
    // Validação básica
    if (!Array.isArray(items)) {
        throw new Error("Erro: A entrada deve ser uma lista de itens.");
    }

    items.forEach((item) => {
        // Garante que o item siga a interface Item
        if (typeof item.name !== "string" || typeof item.price !== "number") {
            throw new Error(`Erro: Item inválido encontrado: ${JSON.stringify(item)}`);
        }

        // Verifica se o item é caro e imprime a mensagem
        if (isExpensive(item)) {
            logExpensiveItem(item);
        }
    });
}

// Teste 1: Caso básico
const items1 = [
    { name: "Laptop", price: 1200 },
    { name: "Mouse", price: 20 },
    { name: "Smartphone", price: 800 },
];
console.log("Resultado 1:");
processItems(items1);
// Saída esperada:
// Laptop is expensive
// Smartphone is expensive

// Teste 2: Lista vazia
const items2: Item[] = [];
console.log("Resultado 2:");
processItems(items2); // Saída esperada: Nenhuma mensagem

// Teste 3: Lista sem itens caros
const items3 = [
    { name: "Notebook", price: 50 },
    { name: "Teclado", price: 30 },
];
console.log("Resultado 3:");
processItems(items3); // Saída esperada: Nenhuma mensagem

// Teste 4: Caso inválido (entrada não é uma lista)
try {
    const invalidInput = "não é uma lista";
    console.log(processItems(invalidInput as any));
} catch (error) {
    console.error("Erro:", error.message); // Saída esperada: Erro: A entrada deve ser uma lista de itens.
}

// Teste 5: Caso inválido (item inválido)
try {
    const invalidItems = [
        { name: "Monitor", price: "caro" }, // Preço inválido
    ];
    console.log(processItems(invalidItems as any));
} catch (error) {
    console.error("Erro:", error.message); // Saída esperada: Erro: Item inválido encontrado.
}
