# Exercicio 1
def monitor(array):
    count = 0
    max_count = 0
    for value in array:
        if value == 1:
            count += 1
        if value == 0:
            count = 0
        if count > max_count:
            max_count = count
    return max_count


# print(monitor([1, 1, 1, 1, 0, 0, 1, 1]))
# Complexidade de tempo: O(n), pois tem um for iterando o array
# Complexidade de tamanho: O(1), pois retorna sempre um valor inteiro

# Exercicio 2
def shuffle(array):
    length = (len(array) // 2)
    first = array[0:length]
    last = array[length:]
    result = []
    for i in range(0, length):
        result.append(first[i])
        result.append(last[i])
    return result


# print(shuffle([1, 4, 4, 7, 6, 6]))
# Complexidade de tempo: O(n), pois tem um for iterando o array
# Complexidade de tamanho: O(n), pois retorna um array do tamanho da entrada

# Exercicio 3
def combination(array):
    result = 0
    length = len(array)
    for i in range(0, length):
        for j in range(i + 1, length):
            if array[i] == array[j]:
                result += 1
    return result


# print(combination([1, 3, 1, 1, 2, 3]))
# Complexidade de tempo: O(n²), pois tem um for iterando dentre de outro
# Complexidade de tamanho: O(1), pois retorna um número inteiro

# Exercicio 4
def attendance(entry, exit, time):
    count = 0
    length = len(entry)
    for i in range(0, length):
        if entry[i] <= time and exit[i] >= time:
            count += 1
    return count


# print(attendance([1, 2, 3], [3, 2, 7], 4))
# Complexidade de tempo: O(n), pois tem um for iterando o array
# Complexidade de tamanho: O(1), pois retorna um número inteiro

# Exercicio 5
def count(grid):
    result = 0
    rows, columns = len(grid), len(grid[0])
    servers_in_rows = [0 for _ in range(rows)]
    servers_in_columns = [0 for _ in range(columns)]

    for i in range(rows):
        for j in range(columns):
            if grid[i][j] == 1:
                servers_in_rows[i] += 1
                servers_in_columns[j] += 1

    for i in range(rows):
        for j in range(columns):
            if grid[i][j] == 1 and (
                servers_in_rows[i] > 1 or servers_in_columns[j] > 1
            ):
                result += 1

    return result


# print(count([[1, 0], [1, 1]]))
# Complexidade de tempo: O(n²), pois tem um for iterando dentro de outro
# Complexidade de tamanho: O(1), pois retorna um número inteiro
