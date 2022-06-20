"use strict";
class Client {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
}
class Item {
    constructor(name, price) {
        this._name = name;
        this._price = price;
    }
    get name() {
        return this._name;
    }
    get price() {
        return this._price;
    }
}
class Order {
    constructor(client, orderItems, paymentMethod, discount) {
        this._client = client;
        this._orderItems = orderItems;
        this._paymentMethod = paymentMethod;
        this._discount = discount;
    }
    get client() {
        return this._client;
    }
    get orderItems() {
        return this._orderItems;
    }
    get paymentMethod() {
        return this._paymentMethod;
    }
    get discount() {
        return this._discount;
    }
    calculateTotal() {
        const prices = this.orderItems.map((e) => e.price);
        const result = prices.reduce((prev, cur) => prev + cur, 0);
        return Math.round(result * 100) / 100;
    }
    calculateTotalWithDiscount() {
        const sum = this.calculateTotal();
        const result = sum - (sum * this.discount);
        return Math.round(result * 100) / 100;
    }
}
const client = new Client('João');
const sandwiche = new Item('Sandwiche Natural', 5.00);
const juice = new Item('Suco de Abacaxí', 5.00);
const dessert = new Item('Gelatina de Uva', 2.50);
const order = new Order(client, [sandwiche, juice, dessert], 'dinheiro', 0.10);
console.log(order);
console.log('Valor normal: ', order.calculateTotal());
console.log('Valor com desconto: ', order.calculateTotalWithDiscount());
