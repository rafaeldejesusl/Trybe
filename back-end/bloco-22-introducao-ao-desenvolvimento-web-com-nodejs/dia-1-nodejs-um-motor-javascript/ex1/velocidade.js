const readline = require('readline-sync');

const velocimetro = () => {
  const distancia = readline.questionInt('Qual a distância precorrida em metros?');
  const tempo = readline.questionInt('Qual o tempo gasto em segundos?');
  const velocidade = (distancia / tempo).toFixed(2);
  console.log(`Velocidade de ${velocidade} m/s`);
};

module.exports = velocimetro;