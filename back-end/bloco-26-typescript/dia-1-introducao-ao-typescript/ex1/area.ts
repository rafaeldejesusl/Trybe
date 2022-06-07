import readline from 'readline-sync';
const units4: string[] = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];

function convert4(valor: number, uniBase: string, uniConversao: string): number {
  const base = units4.indexOf(uniBase);
  const conv = units4.indexOf(uniConversao);
  const exponent = 2 * (conv - base);
  return valor * Math.pow(10, exponent);
}

function exec4(): void {
  const valor = readline.questionFloat('Digite o valor a ser convertido:');

  const baseIndex = readline.keyInSelect(units4, 'Escolha a unidade base:');

  const convIndex = readline.keyInSelect(units4, 'Escolha a unidade final:');

  const base = units4[baseIndex];

  const conv = units4[convIndex];

  const result = convert4(valor, base, conv);

  console.log(`${valor} ${base} é igual a ${result} ${conv}`);
}

exec4();
