const myFizzBuzz = require('./myFizzBuzz');

test('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
});

test('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
  expect(myFizzBuzz(9)).toBe('fizz');
});

test('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
  expect(myFizzBuzz(10)).toBe('buzz');
});

test('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
  expect(myFizzBuzz(7)).toBe(7);
});

test('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
  expect(myFizzBuzz('3')).toBe(false);
});