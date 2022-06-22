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
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, birthDate, salary) {
        var _this = _super.call(this, name, birthDate) || this;
        _this.validateSalary(salary);
        _this._salary = salary;
        _this._enrollment = _this.generateEnrollment();
        _this._admissionDate = new Date();
        return _this;
    }
    Object.defineProperty(Employee.prototype, "salary", {
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
    Object.defineProperty(Employee.prototype, "enrollment", {
        get: function () {
            return this._enrollment;
        },
        set: function (value) {
            if (value.length < 16) {
                throw new Error('O registro deve possuir no mínimo 16 caracteres');
            }
            this._enrollment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "admissionDate", {
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
    Employee.prototype.generateEnrollment = function () {
        var random = Math.floor(Math.random() * 100).toString().padStart(3, '0');
        var time = parseInt((new Date()).toLocaleString().replace(/[\/,:, ]/gm, ''));
        return "R".concat(time).concat(random);
    };
    Employee.prototype.validateSalary = function (value) {
        if (value < 0) {
            throw new Error('O salário não pode ser negativo');
        }
    };
    return Employee;
}(person_1.default));
// const testInterfaceEmployee: Employee = {
//   registration: 'FNC1234567891011',
//   salary: 1200.00,
//   admissionDate: new Date(),
//   generateRegistration(): string {
//     const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
//     return `FNC${randomStr}`;
//   },
// };
// console.log(testInterfaceEmployee);
exports.default = Employee;
