import readline from 'readline-sync';
const units2: string[] = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

function convert2(valor: number, uniBase: string, uniConversao: string): number {
  const base = units2.indexOf(uniBase);
  const conv = units2.indexOf(uniConversao);
  const exponent = conv - base;
  return valor * Math.pow(10, exponent);
}

function exec2(): void {
  const valor = readline.questionFloat('Digite o valor a ser convertido:');

  const baseIndex = readline.keyInSelect(units2, 'Escolha a unidade base:');

  const convIndex = readline.keyInSelect(units2, 'Escolha a unidade final:');

  const base = units2[baseIndex];

  const conv = units2[convIndex];

  const result = convert2(valor, base, conv);

  console.log(`${valor} ${base} é igual a ${result} ${conv}`);
}

exec2();
