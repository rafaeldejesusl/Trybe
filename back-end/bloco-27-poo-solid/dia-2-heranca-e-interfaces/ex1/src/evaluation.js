"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Evaluation = /** @class */ (function () {
    function Evaluation(score, teacher, type) {
        this.validateScore(score, type);
        this._score = score;
        this._teacher = teacher;
        this._type = type;
    }
    Object.defineProperty(Evaluation.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (value) {
            this.validateScore(value, this.type);
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
    Object.defineProperty(Evaluation.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    Evaluation.prototype.validateScore = function (value, type) {
        if (value < 0)
            throw new Error('A pontuação não pode ser negativa');
        if (type === 'prova' && value > 25) {
            throw new Error('A pontuação caso a avaliação seja do tipo "prova" não pode passar de 25 pontos');
        }
        if (type === 'trabalho' && value > 50) {
            throw new Error('A pontuação caso seja do tipo "trabalho" não pode passar de 50 pontos');
        }
    };
    return Evaluation;
}());
exports.default = Evaluation;
