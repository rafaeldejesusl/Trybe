"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, birthDate) {
        this.validateName(name);
        this.validateBirthDate(birthDate);
        this._name = name;
        this._birthDate = birthDate;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this.validateName(value);
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "birthDate", {
        get: function () {
            return this._birthDate;
        },
        set: function (value) {
            this.validateBirthDate(value);
            this._birthDate = value;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.calculateAge = function (value) {
        var now = new Date();
        var result = now.getTime() - value.getTime();
        var yearInMs = 31536000000;
        return Math.round(result / yearInMs);
    };
    Person.prototype.validateName = function (value) {
        if (value.length < 3)
            throw new Error('O nome deve ter no mínimo três caracteres');
    };
    Person.prototype.validateBirthDate = function (value) {
        var now = new Date();
        if (value.getTime() > now.getTime()) {
            throw new Error('A data de nascimento não pode ser uma data no futuro');
        }
        if (this.calculateAge(value) > 120) {
            throw new Error('A pessoa não pode possuir mais de 120 anos');
        }
    };
    return Person;
}());
// const maria = new Person('Maria da Consolação', new Date('1980/01/25'));
// const luiza = new Person('Luiza Andrade', new Date('2005/10/02'));
// console.log(maria);
// console.log(luiza);
// // const invalidPersonName = new Person('An', new Date('2000/06/07'));
// // const invalidPersonAge = new Person('Ana Vitória', new Date('1900/06/07'));
exports.default = Person;
