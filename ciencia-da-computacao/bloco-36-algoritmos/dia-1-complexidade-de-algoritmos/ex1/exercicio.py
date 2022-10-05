# Exercicio 1
# def contains_duplicate(numbers):
#     numbers.sort() # O(n * log(n))
#     previous_number = 'not a number'
#     for number in numbers: # O(n)
#         if (previous_number == number):
#             return True
#         previous_number = number

#     return False

# Complexidade: O(n * log(n) + n) ou simplicando como O(n * log(n));


# Exercicio 2
# entrada = [ 0 0 0 0 1
#             0 0 0 0 1
#             1 1 1 1 1
#             0 0 0 1 0 ]

# resultado para (0, 4) = True
# resultado para (1, 1) = False

# Complexidade de Tempo: O(1) para acessar a coordenada e verificar a presença
# Complexidade de Espaço: O(1) pois retorna sempre um booleano


# Exercicio 3
# import random

# def randomAverages(n):
#     list_of_averages = []

#     for _ in range(100):
#         average = 0
#         for _ in range(n):
#             average += random.randrange(1, n)
#         average = average/n
#         list_of_averages.append(average)

#     return list_of_averages

# Complexidade de Tempo: O(100 * n) ou simplificando como O(n)
# Complexidade de Espaço: O(1) pois o retorno é sempre um array de 100 números


# Exercicio 4
# def kids_with_candies(candies, extra_candies):
#   parece que a solução percorre o array somente uma vez,
#   porém isto é feito duas vezes, uma no `max` e outra para
#   preencher a resposta
#   max_candies = max(candies)
#   return [candy + extra_candies >= max_candies for candy in candies]


# saída: [True, True, True, False, True]
# print(kids_with_candies([2, 3, 5, 1, 3], 3))

# Complexidade de Tempo: O(n + n) ou simplificando como O(n)
# Complexidade de Espaço: O(n) pois o retorno aumenta linearmente
