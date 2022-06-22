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
var evaluation_1 = require("./evaluation");
var Exam = /** @class */ (function (_super) {
    __extends(Exam, _super);
    function Exam(teacher, score) {
        return _super.call(this, score, teacher, 'prova') || this;
    }
    Exam.prototype.validateScore = function (value) {
        _super.prototype.validateScore.call(this, value);
        if (value > 25) {
            throw new Error('A pontuação não pode passar de 25 pontos');
        }
    };
    return Exam;
}(evaluation_1.default));
exports.default = Exam;
