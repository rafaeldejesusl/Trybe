from exercicio import fizzbuzz, convert


def test_return_list_of_numbers():
    'Testa o retorno de uma lista com tamanho do input inicial'
    assert fizzbuzz(2) == [1, 2]


def test_return_of_fizz():
    'Testa o retorno da string "Fizz" nos números divisíveis por 3'
    assert fizzbuzz(3) == [1, 2, "Fizz"]


def test_return_of_buzz():
    'Testa o retorno da string "Buzz" nos números divisíveis por 5'
    assert fizzbuzz(5) == [1, 2, "Fizz", 4, "Buzz"]


def test_return_of_fizzbuzz():
    'Testa o retorno da string "FizzBuzz" nos números divisíveis por 3 e 5'
    assert fizzbuzz(15) == [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]


def test_return_of_empty_string():
    'Testa o retorno de uma string vazia'
    assert convert("") == ""


def test_return_of_string():
    'Testa o retorno de uma string comum'
    assert convert("1-HOME-SWEET-HOME") == "1-4663-79338-4663"


def test_return_of_big_string():
    'Testa o retorno de uma retorno de uma string maior que 30 caracteres'
    assert convert("1-HOME-SWEET-HOMEMY-MISERABLE-JOB") == "1-4663-79338-466369-647372253-562"


def test_return_of_invalid_characters():
    'Testa o retorno de caracteres inválidos'
    assert convert("M/-M*$ER@BL&_J.B") == "6/-6*$37@25&_5.2"
