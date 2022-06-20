class Client {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

}

class Item {
  private _name: string;
  private _price: number;

  constructor(name: string, price: number) {
    this._name = name;
    this._price = price;
  }

  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price;
  }

}

class Order {
  private _client: Client;
  private _orderItems: Item[];
  private _paymentMethod: string;
  private _discount: number;

  constructor(client: Client, orderItems: Item[], paymentMethod: string, discount: number) {
    this._client = client;
    this._orderItems = orderItems;
    this._paymentMethod = paymentMethod;
    this._discount = discount;
  }

  get client(): Client {
    return this._client;
  }

  get orderItems(): Item[] {
    return this._orderItems;
  }

  get paymentMethod(): string {
    return this._paymentMethod;
  }

  get discount(): number {
    return this._discount;
  }

  calculateTotal():number {
    const prices = this.orderItems.map((e) => e.price);
    const result = prices.reduce((prev, cur) => prev + cur, 0)
    return Math.round(result * 100)/ 100;
  }

  calculateTotalWithDiscount() {
    const sum = this.calculateTotal();
    const result = sum - (sum * this.discount);
    return Math.round(result * 100)/ 100;
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