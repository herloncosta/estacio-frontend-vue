namespace Functions {
  // Funções sem retorno
  function print(msg: string): void {
    console.log(msg);
  }
  print("Função sem retorno.");

  // Funções com retorno
  function sum(a: number, b: number): number {
    return a + b;
  }
  console.log(sum(1, 2));

  // Funções recursivas
  function factorial(n: number): number {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }
  console.log(factorial(5));

  // Funções com parâmetros opcionais
  function sum2(a: number, b: number, c?: number): number {
    return a + b + (c || 0);
  }
  console.log(sum2(1, 2));
  console.log(sum2(1, 2, 3));

  // Funções com parâmetros rest
  function sum3(...numbers: number[]): number {
    let result: number = 0;
    for (const number of numbers) {
      result += number;
    }
    return result;
  }

  // Arrow functions
  const sum4 = (a: number, b: number): number => a + b;
  console.log(sum4(1, 2));

  // Arrow functions com parâmetros opcionais
  const sum5 = (a: number, b: number, c?: number): number => a + b + (c || 0);
  console.log(sum5(1, 2));

  // Arrow functions com parâmetros rest
  const sum6 = (...numbers: number[]): number => {
    let result: number = 0;
    for (const number of numbers) {
      result += number;
    }
    return result;
  };
  console.log(sum6(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

  // Funções anônimas
  const sum7 = function (a: number, b: number): number {
    return a + b;
  };
  console.log(sum7(1, 2));

  // Funções anônimas com parâmetros opcionais
  const sum8 = function (a: number, b: number, c?: number): number {
    return a + b + (c || 0);
  };
  console.log(sum8(1, 2));

  // Funções anônimas com parâmetros rest
  const sum9 = function (...numbers: number[]): number {
    let result: number = 0;
    for (const number of numbers) {
      result += number;
    }
    return result;
  };
  console.log(sum9(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

  // Funções com Regular Expressions para verificação de padrões
  function checar_padrao(par_padrao: RegExp, par_texto: string): string {
    if (par_padrao.test(par_texto)) {
      return "Foi detectado o padrão dentro do texto";
    }
    return "Não foi detectado o padrão dentro do texto";
  }

  const texto_teste: string = "O objetivo desse texto é realizar testes";
  const padrao_regex: RegExp = /te/;
  let res_teste: string = checar_padrao(padrao_regex, texto_teste);
  console.log(`O resultado da execução do regex foi: ${res_teste}`);
}
