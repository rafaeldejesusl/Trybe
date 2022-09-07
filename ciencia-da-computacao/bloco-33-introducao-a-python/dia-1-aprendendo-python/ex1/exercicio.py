# exercicio 1
def greater(x, y):
    if x > y:
        return x
    else:
        return y


# print(greater(3, 7))

# exercicio 2
def average(list):
    length = len(list)
    sum = 0
    for item in list:
        sum += item
    return sum / length


# print(average([4, 6, 8, 10]))

# exercicio 3
def square(n):
    if n > 1:
        for i in range(n):
            print(n * '*')


# square(5)

# exercicio 4
def bigger(list):
    result = ''
    for word in list:
        if len(word) > len(result):
            result = word
    return result


# print(bigger(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))

# exercicio 5
def paint_calc(area):
    liter = area / 3
    can = liter // 18
    if liter % 18 != 0:
        can += 1
    price = can * 80.00
    return (can, price)


# print(paint_calc(800))

# exercicio 6
def triangle(a, b, c):
    if a + b > c and a + c > b and b + c > a:
        if a == b == c:
            return "Triângulo Equilátero"
        if a == b or b == c or a == c:
            return "Triângulo Isósceles"
        else:
            return "Triângulo Escaleno"
    else:
        return "Não é triângulo"


print(triangle(3, 4, 5))
