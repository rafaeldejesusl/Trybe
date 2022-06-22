"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Evaluation = /** @class */ (function () {
    function Evaluation(score, teacher, type) {
        this.validateScore(score);
        this._score = score;
        this._teacher = teacher;
        this.type = type;
    }
    Object.defineProperty(Evaluation.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (value) {
            this.validateScore(value);
            this._score = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Evaluation.prototype, "teacher", {
        get: function () {
            return this._teacher;
        },
        set: function (value) {
            this._teacher = value;
        },
        enumerable: false,
        configurable: true
    });
    Evaluation.prototype.validateScore = function (value) {
        if (value < 0)
            throw new Error('A pontuação não pode ser negativa');
    };
    return Evaluation;
}());
exports.default = Evaluation;
