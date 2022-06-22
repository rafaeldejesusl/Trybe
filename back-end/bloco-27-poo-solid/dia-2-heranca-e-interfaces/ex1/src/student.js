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
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, birthDate) {
        var _this = _super.call(this, name, birthDate) || this;
        _this._evaluationsResults = [];
        _this._enrollment = _this.generateEnrollment();
        return _this;
    }
    Object.defineProperty(Student.prototype, "enrollment", {
        get: function () {
            return this._enrollment;
        },
        set: function (value) {
            if (value.length < 16) {
                throw new Error('A matrícula deve possuir no mínimo 16 caracteres');
            }
            this._enrollment = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "evaluationsResults", {
        get: function () {
            return this._evaluationsResults;
        },
        set: function (value) {
            this._evaluationsResults = value;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.sumGrades = function () {
        var evaluationSum = this.evaluationsResults.reduce(function (prev, cur) { return prev + cur.score; }, 0);
        return Math.round((evaluationSum) * 100) / 100;
    };
    Student.prototype.sumAverageGrades = function () {
        var length = this.evaluationsResults.length;
        var sum = this.sumGrades();
        return Math.round(sum / length * 100) / 100;
    };
    Student.prototype.generateEnrollment = function () {
        var random = Math.floor(Math.random() * 100).toString().padStart(3, '0');
        var time = parseInt((new Date()).toLocaleString().replace(/[\/,:, ]/gm, ''));
        return "".concat(time).concat(random);
    };
    Student.prototype.addEvaluationResult = function (value) {
        this.evaluationsResults.push(value);
    };
    return Student;
}(person_1.default));
// const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
// const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));
// const jessica = new Student('Jéssica Bianca Nunes', new Date('2004/06/06'));
// const tamires = new Student('Tamires Santos Bastos', new Date('2005/11/05'));
// const fernando = new Student('Fernando Gonçalves', new Date('2006/09/11'));
// carolina.examsGrades = [25, 20, 25, 23];
// lucas.examsGrades = [25, 20, 25, 23];
// jessica.worksGrades = [50, 45];
// tamires.worksGrades = [47, 42];
// console.log(carolina);
// console.log(lucas);
// console.log(jessica);
// console.log(tamires);
// console.log(fernando);
exports.default = Student;
