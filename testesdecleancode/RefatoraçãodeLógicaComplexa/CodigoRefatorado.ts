/* 
  Função: calculateDiscount
  Descrição: Calcula o preço final após aplicar um desconto com base no valor e no status de cliente premium.
  
  Raciocínio:
  - A função principal (`calculateDiscount`) coordena as chamadas para calcular a taxa de desconto e aplicá-la ao preço.
  - A lógica de determinar a taxa de desconto foi isolada na função `getDiscountRate`.
  - A aplicação do desconto foi encapsulada na função `applyDiscount`.

  Entrada:
  - `price`: O preço original do produto (número).
  - `isPremium`: Indica se o cliente é premium (booleano).

  Saída:
  - O preço final após aplicar o desconto.

  Exemplo:
  console.log(calculateDiscount(150, true)); // Saída esperada: 120 (150 * 0.8)
  console.log(calculateDiscount(50, false)); // Saída esperada: 50 (50 * 1.0)
*/

function calculateDiscount(price: number, isPremium: boolean): number {
    // Validação básica
    if (typeof price !== "number" || price < 0) {
        throw new Error("Erro: O preço deve ser um número positivo.");
    }
    if (typeof isPremium !== "boolean") {
        throw new Error("Erro: O status de cliente premium deve ser um booleano.");
    }

    // Coordenação das funções auxiliares
    const discountRate = getDiscountRate(price, isPremium);
    return applyDiscount(price, discountRate);
}

// Função para determinar a taxa de desconto
function getDiscountRate(price: number, isPremium: boolean): number {
    /*
      Lógica de desconto:
      - Clientes premium recebem 20% de desconto em produtos acima de 100 e 10% em outros.
      - Clientes não premium recebem 10% de desconto em produtos acima de 100 e nenhum desconto em outros.
    */
    if (isPremium) {
        return price > 100 ? 0.8 : 0.9;
    }
    return price > 100 ? 0.9 : 1.0;
}

// Função para aplicar o desconto
function applyDiscount(price: number, discountRate: number): number {
    /*
      Aplica a taxa de desconto ao preço.
      - Multiplica o preço pela taxa de desconto.
    */
    return price * discountRate;
}

// Teste 1: Cliente premium com preço alto
console.log("Resultado 1:", calculateDiscount(150, true)); // Saída esperada: 120 (150 * 0.8)

// Teste 2: Cliente premium com preço baixo
console.log("Resultado 2:", calculateDiscount(50, true)); // Saída esperada: 45 (50 * 0.9)

// Teste 3: Cliente não premium com preço alto
console.log("Resultado 3:", calculateDiscount(150, false)); // Saída esperada: 135 (150 * 0.9)

// Teste 4: Cliente não premium com preço baixo
console.log("Resultado 4:", calculateDiscount(50, false)); // Saída esperada: 50 (50 * 1.0)

// Teste 5: Preço inválido
try {
    console.log(calculateDiscount(-100, true));
} catch (error) {
    console.error("Erro:", error.message); // Saída esperada: Erro: O preço deve ser um número positivo.
}

// Teste 6: Status de cliente premium inválido
try {
    console.log(calculateDiscount(150, "premium" as any));
} catch (error) {
    console.error("Erro:", error.message); // Saída esperada: Erro: O status de cliente premium deve ser um booleano.
}
