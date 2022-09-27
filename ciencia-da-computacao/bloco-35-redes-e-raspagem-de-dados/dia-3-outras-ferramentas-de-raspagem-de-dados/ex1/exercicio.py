from selenium import webdriver
from selenium.webdriver.common.by import By


chrome = webdriver.Chrome()

# Exercicio 1

# chrome.get("https://quotes.toscrape.com/")

# quote = chrome.find_element(By.CLASS_NAME, "text").get_attribute("innerHTML")

# print(quote)

# Exercicio 2

# chrome.get("https://www.wikimetal.com.br/iron-maiden-scorpions-kiss-veja-melhores-albuns-1982/")

# paragraphs = chrome.find_elements(By.TAG_NAME, "p")

# for paragraph in paragraphs:
#     print(paragraph.text)

# Exercicio 3

# chrome.get("https://diolinux.com.br/")

# for post in chrome.find_elements(By.CLASS_NAME, "post-outer"):
#     title = post.find_element(By.CLASS_NAME, "entry-title").text
#     link = post.find_element(By.TAG_NAME, "a").get_attribute("href")
#     text = post.find_element(By.CLASS_NAME, "entry-excerpt").text
#     print(title, link, text)
