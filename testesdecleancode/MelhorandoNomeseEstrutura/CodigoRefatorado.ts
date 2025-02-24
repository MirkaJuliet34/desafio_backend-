function dobrarNumerosPares(numeros: number[]): number[] {
    const numerosParesDobrados: number[] = [];
  
    for (const numero of numeros) {
      if (ehPar(numero)) {
        numerosParesDobrados.push(dobrar(numero));
      }
    }
  
    return numerosParesDobrados;
  }
  
  function ehPar(valor: number): boolean {
    return valor % 2 === 0;
  }
  
  function dobrar(valor: number): number {
    return valor * 2;
  }

  /*Melhorias
- Nomes Significativos :
--> A função original c foi renomeada para dobrarNumerosPares, que descreve claramente o propósito da função.
--> O parâmetro x foi renomeado para numeros, indicando que é um array de números.
--> A variável r foi renomeada para numerosParesDobrados, tornando seu propósito mais evidente.
- Modularidade :
--> Foram criadas duas funções auxiliares:
    - ehPar(valor: number): boolean: Verifica se um número é par.
    - dobrar(valor: number): number: Dobra o valor de um número.
--> Essas funções encapsulam comportamentos específicos, tornando o código mais legível e reutilizável.
- Uso de for...of :
--> O loop for (let i = 0; i < x.length; i++) foi substituído por for (const numero of numeros), que é mais legível e evita o uso explícito de índices.
- Separação de Responsabilidades :
--> A lógica principal agora está dividida em partes menores e bem definidas, facilitando a manutenção e a compreensão do código. */