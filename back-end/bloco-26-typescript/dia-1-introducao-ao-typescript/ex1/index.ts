import readline from 'readline-sync';

const scripts: { name: string, script: string }[] = [
  { name: 'Conversor de comprimento', script: './length' },
  { name: 'Conversor de massa', script: './mass' },
  { name: 'Conversor de capacidade', script: './capacity' },
  { name: 'Conversor de área', script: './area' },
  { name: 'Conversor de volume', script: './volume' },
];

const scriptNames = scripts.map((e) => e.name);

const scriptIndex = readline.keyInSelect(scriptNames, 'Escolha um dos conversores de unidade:');

require(scripts[scriptIndex].script);
