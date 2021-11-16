const newEmployees = (func) => {
  const employees = {
    id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
const createEmail = (nome) => {
  return obj = {
    nome: nome,
    email: `${nome.replace(' ', '_').toLowerCase()}@trybe.com`,
  }
};

console.log(newEmployees(createEmail));

const sort = (numero, func) => {
  const winner = Math.floor(Math.random() * 5);
  return func(numero, winner);
};
const check = (numero1, numero2) => {
  if (numero1 === numero2) {
    return 'Parabéns você ganhou';
  } else {
    return 'Tente novamente';
  }
};

console.log(sort(3, check));

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const resultado = (gabarito, resposta, func) => {
  return `Sua nota foi ${func(gabarito, resposta)}`;
};
const comparator = (gabarito, resposta) => {
  let pontuação = 0;
  for (let i = 0; i < gabarito.length; i += 1) {
    if (gabarito[i] === resposta[i]){
      pontuação += 1;
    } else if (resposta[i] === 'N.A') {
      pontuação = pontuação;
    } else {
      pontuação -= 0.5;
    }
  }
  return pontuação;
};

console.log(resultado(RIGHT_ANSWERS, STUDENT_ANSWERS, comparator));