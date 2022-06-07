import readline from 'readline-sync';
const units5: string[] = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];

function convert5(valor: number, uniBase: string, uniConversao: string): number {
  const base = units5.indexOf(uniBase);
  const conv = units5.indexOf(uniConversao);
  const exponent = 3 * (conv - base);
  return valor * Math.pow(10, exponent);
}

function exec5(): void {
  const valor = readline.questionFloat('Digite o valor a ser convertido:');

  const baseIndex = readline.keyInSelect(units5, 'Escolha a unidade base:');

  const convIndex = readline.keyInSelect(units5, 'Escolha a unidade final:');

  const base = units5[baseIndex];

  const conv = units5[convIndex];

  const result = convert5(valor, base, conv);

  console.log(`${valor} ${base} é igual a ${result} ${conv}`);
}

exec5();