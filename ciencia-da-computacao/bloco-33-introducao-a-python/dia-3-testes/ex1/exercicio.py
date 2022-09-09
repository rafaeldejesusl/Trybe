def fizzbuzz(n):
    list = range(1, n + 1)
    result = []
    for n in list:
        if n % 3 == 0 and n % 5 == 0:
            result.append("FizzBuzz")
        elif n % 3 == 0:
            result.append("Fizz")
        elif n % 5 == 0:
            result.append("Buzz")
        else:
            result.append(n)
    return result


def convert(str):
    chars = list(str)
    result = ""
    for char in chars:
        if char in "ABC":
            result = result + "2"
        elif char in "DEF":
            result = result + "3"
        elif char in "GHI":
            result = result + "4"
        elif char in "JKL":
            result = result + "5"
        elif char in "MNO":
            result = result + "6"
        elif char in "PQRS":
            result = result + "7"
        elif char in "TUV":
            result = result + "8"
        elif char in "WXYZ":
            result = result + "9"
        else:
            result = result + char
    return result
