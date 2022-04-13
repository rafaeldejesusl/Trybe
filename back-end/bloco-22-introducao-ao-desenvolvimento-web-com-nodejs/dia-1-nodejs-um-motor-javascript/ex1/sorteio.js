const readline = require('readline-sync');

const sorteio = () => {
  const numero = readline.questionInt('Escolha um número entre 0 e 10:');
  const check = (valor) => {
    const sorteado = Math.floor(Math.random() * 11);
    if(valor === sorteado) return 'Parabéns, número correto!';
    else return `Opa, não foi dessa vez. O número era ${sorteado}`;
  };

  console.log(check(numero));

  const repeticao = readline.keyInYN('Pretende jogar novamente?');
  if(repeticao) sorteio();
  else console.log('Obrigado e até mais! o/');
};

module.exports = sorteio;