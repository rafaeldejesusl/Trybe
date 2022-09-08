import csv
import json
import random


# exercicio 1
def string_printer():
    name = input("Digite um nome:\n")
    while len(name) > 0:
        print(name)
        name = name[:-1]


# string_printer()

# exercicio 2
def random_word():
    word = random.choice(["pizza", "arroz", "coxinha"])
    scrambled_word = "".join(random.sample(word, len(word)))
    print(scrambled_word)
    for n in range(3):
        user_input = input("Tente descobrir a palavra embaralhada:\n")
        if user_input == word:
            print("Acertou")
            return
        else:
            print("Errou")
    print(f"Sem mais tentativas. A palavra era {word}")


# random_word()

# exercicio 3
def random_word2():
    with open("words.txt") as file:
        words = [line.strip() for line in file]
    word = random.choice(words)
    scrambled_word = "".join(random.sample(word, len(word)))
    print(scrambled_word)
    for n in range(3):
        user_input = input("Tente descobrir a palavra embaralhada:\n")
        if user_input == word:
            print("Acertou")
            return
        else:
            print("Errou")
    print(f"Sem mais tentativas. A palavra era {word}")


# random_word2()

# exercicio 4
def book_category():
    with open("books.json") as file:
        books = json.load(file)
    categories = {}
    for book in books:
        for category in book["categories"]:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1
    table_rows = [
      [row_category, num_books / len(books)]
      for row_category, num_books in categories.items()
    ]
    header = ["categoria", "porcentagem"]
    with open("report.csv", "w") as file:
        writer = csv.writer(file)
        writer.writerow(header)
        writer.writerows(table_rows)


book_category()
