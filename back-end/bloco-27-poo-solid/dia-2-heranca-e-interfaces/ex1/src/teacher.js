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
var employee_1 = require("./employee");
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, birthDate, salary, subject) {
        var _this = _super.call(this, name, birthDate, salary) || this;
        _this._subject = subject;
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
    return Teacher;
}(employee_1.default));
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
