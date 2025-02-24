// Definindo uma interface para garantir a tipagem correta dos itens
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
  function processItems(items: Item[]): void { // Errol por causa da função duplicada
    items.forEach((item) => {
      if (isExpensive(item)) {
        logExpensiveItem(item);
      }
    });
  }


   /* Problemas identificados:
- Uso de any[]: O tipo any é muito genérico e não oferece segurança de tipos. Devemos usar uma interface ou tipo explícito para descrever a estrutura dos itens.
- Iteração manual: O uso de um loop for com índice (i) pode ser substituído por métodos mais modernos e expressivos, como forEach.
- Concatenação de strings: A concatenação de strings usando + pode ser substituída por template literals para maior legibilidade.
- Responsabilidade única: A função faz duas coisas: verifica se o item é caro e imprime no console. Podemos separar essas responsabilidades.
- Nomes pouco descritivos: O nome da função (processItems) é genérico e não indica claramente o que ela faz.
 */

  /*Melhorias
- Tipagem Explícita com Interface (Item):
  --> Criamos uma interface Item para definir a estrutura esperada dos objetos na lista. Isso melhora a segurança de tipos e facilita a compreensão do código.
- Separação de Responsabilidades:
  --> Dividimos a lógica em funções menores e específicas:
      - isExpensive: Verifica se um item é caro.
      - logExpensiveItem: Imprime a mensagem no console.
  --> Isso torna o código mais modular e reutilizável.
- Uso de Métodos Modernos (forEach):
  --> Substituímos o loop for por forEach, que é mais expressivo e elimina a necessidade de gerenciar índices manualmente.
- Template Literals:
  --> Usamos template literals (${}) para concatenar strings, o que melhora a legibilidade.
- Nomes Descritivos:
  --> Renomeamos as funções para refletir melhor suas responsabilidades, como isExpensive e logExpensiveItem. */

  /*Benefícios do Código Refatorado
- Legibilidade: O código é mais fácil de ler e entender.
- Manutenção: Alterações futuras são mais simples, pois cada função tem uma responsabilidade clara.
- Reutilização: As funções isExpensive e logExpensiveItem podem ser reutilizadas em outros contextos.
- Segurança de Tipos: A interface Item garante que os dados tenham a estrutura correta, reduzindo erros em tempo de execução. */