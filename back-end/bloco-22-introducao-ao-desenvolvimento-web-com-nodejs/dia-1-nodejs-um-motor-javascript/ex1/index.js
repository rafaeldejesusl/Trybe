const readline = require('readline-sync');
const calculo = require('./imc');
const velocimetro = require('./velocidade');
const sorteio = require('./sorteio');

const lista = 'Selecione um dos seguintes scripts da lista:\n 1 - cálculo do IMC\n 2 - cálculo da velocidade\n 3 - sorteio automático\n ->';
const seletor = readline.questionInt(lista);
if (seletor === 1) calculo();
else if (seletor === 2) velocimetro();
else if (seletor === 3) sorteio();
else console.log('Número inválido');