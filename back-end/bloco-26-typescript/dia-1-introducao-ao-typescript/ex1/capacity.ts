import readline from 'readline-sync';
const units3: string[] = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

function convert3(valor: number, uniBase: string, uniConversao: string): number {
  const base = units3.indexOf(uniBase);
  const conv = units3.indexOf(uniConversao);
  const exponent = conv - base;
  return valor * Math.pow(10, exponent);
}

function exec3(): void {
  const valor = readline.questionFloat('Digite o valor a ser convertido:');

  const baseIndex = readline.keyInSelect(units3, 'Escolha a unidade base:');

  const convIndex = readline.keyInSelect(units3, 'Escolha a unidade final:');

  const base = units3[baseIndex];

  const conv = units3[convIndex];

  const result = convert3(valor, base, conv);

  console.log(`${valor} ${base} é igual a ${result} ${conv}`);
}

exec3();