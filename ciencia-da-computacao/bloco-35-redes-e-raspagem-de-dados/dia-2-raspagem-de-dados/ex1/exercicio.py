import requests
from parsel import Selector


# Exercicio 1
# response = requests.get("https://httpbin.org/encoding/utf8")
# print(response.text)

# Exercicio 2
# response = requests.get("https://api.github.com/users")
# data = response.json()
# for user in data:
#     print(user["login"], user["url"])

# Exercicio 3
# response = requests.get(
#     "https://scrapethissite.com/pages/advanced/?gotcha=headers",
#     headers={"User-agent": "Mozilla", "Accept": "text/html"},
# )
# assert "bot detected" not in response.text

# Exercicio 4 e 5
response = requests.get("http://books.toscrape.com/catalogue/the-grand-design_405/index.html")
selector = Selector(response.text)
title = selector.css("div.product_main h1::text").get()
price = selector.css("p.price_color::text").re_first(r"\d*\.\d{2}")
description = selector.css("#product_description ~ p::text").get()
suffix = "...more"
if description.endswith(suffix):
    description = description[:-len(suffix)]
url = "http://books.toscrape.com/catalogue/"
img = url + selector.css("div.active img::attr(src)").get()
availability = selector.css("p.availability::text").re_first("\d")
print(title, price, description, img, availability)

