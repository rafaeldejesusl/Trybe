import readline from 'readline-sync';
const units1: string[] = ['km', 'hm', 'dam', 'm', 'dm', 'cm','mm'];

function convert1(valor: number, uniBase: string, uniConversao: string): number {
  const base = units1.indexOf(uniBase);
  const conv = units1.indexOf(uniConversao);
  const exponent = conv - base;
  return valor * Math.pow(10, exponent);
}

function exec1(): void {
  const valor = readline.questionFloat('Digite o valor a ser convertido:');

  const baseIndex = readline.keyInSelect(units1, 'Escolha a unidade base:');

  const convIndex = readline.keyInSelect(units1, 'Escolha a unidade final:');

  const base = units1[baseIndex];

  const conv = units1[convIndex];

  const result = convert1(valor, base, conv);

  console.log(`${valor} ${base} é igual a ${result} ${conv}`);
}

exec1();
