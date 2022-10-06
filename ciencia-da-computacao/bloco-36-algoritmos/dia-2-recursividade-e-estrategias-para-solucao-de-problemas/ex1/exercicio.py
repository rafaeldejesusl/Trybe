# Exercicio 1

def pares(n):
    quantd = 0
    for number in range(1, n + 1):
        if (number % 2 == 0):
            quantd += 1
    return quantd


# Exercicio 2

def pares_recursivo(n):
    if n == 2:
        return 1
    if n % 2 == 0:
        return 1 + pares_recursivo(n-1)
    else:
        return pares_recursivo(n - 1)


# Exercicio 3

def maior_inteiro(lista):
    tamanho = len(lista)
    if tamanho == 1:
        return lista[0]
    else:
        maior = maior_inteiro(lista[:-1])
        if maior > lista[tamanho - 1]:
            return maior
        else:
            return lista[tamanho - 1]


# Exercicio 4

def mdc(x, y):
    if y == 0:
        return x
    else:
        return mdc(y, x % y)
