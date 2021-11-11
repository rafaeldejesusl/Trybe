const array = ['Git', 'HTML', 'CSS', 'JavaScript', 'Bash'];
let string = 'Tryber x aqui!';

const func1 = nome => {
  result = string.replace('x', nome);
  return result;
}

// console.log(func1('Rafael'));

const func2 = nome => {
  const skills = array.sort();
  let texto = `${nome} Minhas cincos principais habilidades são:`;
  for (let i = 0; i < skills.length; i += 1) {
    texto = `${texto}
    ${skills[i]}`;
  }
  return texto;
}

console.log(func2(func1('Rafael')));