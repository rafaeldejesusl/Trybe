"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, birthDate, salary, subject) {
        var _this = _super.call(this, name, birthDate) || this;
        _this.validateSalary(salary);
        _this._subject = subject;
        _this._salary = salary;
        _this._registration = _this.generateRegistration();
        _this._admissionDate = new Date();
        return _this;
    }
    Object.defineProperty(Teacher.prototype, "subject", {
        get: function () {
            return this._subject;
        },
        set: function (value) {
            this._subject = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "salary", {
        get: function () {
            return this._salary;
        },
        set: function (value) {
            this.validateSalary(this.salary);
            this._salary = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "registration", {
        get: function () {
            return this._registration;
        },
        set: function (value) {
            if (value.length < 16) {
                throw new Error('O registro deve possuir no mínimo 16 caracteres');
            }
            this._registration = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "admissionDate", {
        get: function () {
            return this._admissionDate;
        },
        set: function (value) {
            var now = new Date();
            if (value.getTime() > now.getTime()) {
                throw new Error('A data de admissão não pode ser no futuro');
            }
            this._admissionDate = value;
        },
        enumerable: false,
        configurable: true
    });
    Teacher.prototype.generateRegistration = function () {
        var random = Math.floor(Math.random() * 100).toString().padStart(3, '0');
        var time = parseInt((new Date()).toLocaleString().replace(/[\/,:, ]/gm, ''));
        return "R".concat(time).concat(random);
    };
    Teacher.prototype.validateSalary = function (value) {
        if (value < 0) {
            throw new Error('O salário não pode ser negativo');
        }
    };
    return Teacher;
}(person_1.default));
// const math = new Subject('Matemática');
// const history = new Subject('História');
// const philosophy = new Subject('Filosofia');
// const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
// const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, history);
// const lucio = new Teacher('Lucio Teixeira', new Date('1986/01/29'), 2000, philosophy);
// console.log(marta);
// console.log(joao);
// console.log(lucio);
// // const invalidTeacherSalary = new Teacher('Marta da Silva', new Date('1980/03/30'), -2000, math);
// const today = new Date();
// today.setDate(today.getDate() + 1)
// const tomorrow = today;
// marta.admissionDate = tomorrow;
exports.default = Teacher;
