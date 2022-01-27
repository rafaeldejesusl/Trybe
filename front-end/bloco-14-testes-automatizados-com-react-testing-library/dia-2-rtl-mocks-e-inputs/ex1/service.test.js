const service = require('./service');
jest.mock('./service');

// exercicio 1

test('exercício 1', () => {
  service.randomNumber = jest.fn().mockReturnValue(10);
  expect(service.randomNumber()).toBe(10);
  expect(service.randomNumber).toBeCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
});

// exercicio 2

test('exercicio 2', () => {
  service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b );
  expect(service.randomNumber(4, 2)).toBe(2);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
});

// exercicio 3

test('exercicio 3', () => {
  service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c );
  expect(service.randomNumber(4, 3, 2)).toBe(24);

  expect(service.randomNumber).toHaveBeenCalled();

  expect(service.randomNumber).toHaveBeenCalledTimes(1);

});

test('exercicio 3 - parte 2', () => {
  service.randomNumber.mockReset();
  service.randomNumber = jest.fn().mockImplementation((a) => a * 2 );
  expect(service.randomNumber(4)).toBe(8);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
})

// exercicio 4

test('exercicio 4', () => {
  service.stringUppercase = jest.fn().mockImplementation((string) => string.toLowerCase() );
  service.stringFirstLetter = jest.fn().mockImplementation((string) => string[string.length - 1] );
  service.stringConcat = jest.fn().mockImplementation((s1, s2, s3) => s1 + s2 + s3 );
  expect(service.stringUppercase('Ponte Preta')).toBe('ponte preta');
  expect(service.stringUppercase).toHaveBeenCalled();
  expect(service.stringUppercase).toHaveBeenCalledTimes(1);
  expect(service.stringFirstLetter('Ponte Preta')).toBe('a');
  expect(service.stringFirstLetter).toHaveBeenCalled();
  expect(service.stringFirstLetter).toHaveBeenCalledTimes(1);
  expect(service.stringConcat('Ponte', ' Pre', 'ta')).toBe('Ponte Preta');
  expect(service.stringConcat).toHaveBeenCalled();
  expect(service.stringConcat).toHaveBeenCalledTimes(1);
})
