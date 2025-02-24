function calculateDiscount(price: number, isPremium: boolean): number {
    const discountRate = getDiscountRate(price, isPremium);
    return applyDiscount(price, discountRate);
  }
  
  function getDiscountRate(price: number, isPremium: boolean): number {
    if (isPremium) {
      return price > 100 ? 0.8 : 0.9;
    }
    return price > 100 ? 0.9 : 1.0;
  }
  
  function applyDiscount(price: number, discountRate: number): number {
    return price * discountRate;
  }

  /*Refatoração
- Separação de Responsabilidades :
--> A função calculateDiscount agora é responsável apenas por coordenar as chamadas para calcular o desconto final.
--> A lógica de determinar a taxa de desconto foi movida para a função getDiscountRate.
--> A aplicação do desconto foi isolada na função applyDiscount.
- Evitar Repetição de Código :
--> Antes, havia repetição na lógica de cálculo de desconto (price * 0.8, price * 0.9, etc.). 
--> Agora, isso é centralizado na função applyDiscount.
- Uso de Funções Puras :
--> As funções getDiscountRate e applyDiscount são puras, ou seja, elas dependem apenas de seus parâmetros e não têm efeitos colaterais. Isso facilita o teste e a manutenção.
- Melhoria na Legibilidade :
--> O uso de nomes descritivos (getDiscountRate e applyDiscount) torna o código mais intuitivo e autoexplicativo.
- Facilidade de Extensão :
--> Se for necessário adicionar novas regras de desconto no futuro, basta modificar ou estender a função getDiscountRate, sem alterar outras partes do código. */