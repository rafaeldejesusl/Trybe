const readline = require('readline-sync');

const calculo = () => {
  const peso = readline.questionInt('Qual seu peso? ');
  const altura = readline.questionFloat('Qual sua altura? ');
  const imc = peso / Math.pow(altura, 2);
  const classificar = (imc) => {
    if(imc < 18.5) return 'Abaixo do peso (magreza)';
    else if(imc <= 24.9) return 'Peso normal';
    else if(imc <= 29.9) return 'Acima do peso (sobrepeso)';
    else if(imc <= 34.9) return 'Obesidade grau I';
    else if(imc <= 39.9) return 'Obesidade grau II';
    else if(40 <= imc) return 'Obesidade grau III e IV';
  };
  console.log(imc);
  console.log(classificar(imc));
};

module.exports = calculo;