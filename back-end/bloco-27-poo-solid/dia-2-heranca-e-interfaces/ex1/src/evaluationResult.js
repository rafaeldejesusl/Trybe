"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EvaluationResult = /** @class */ (function () {
    function EvaluationResult(evaluation, score) {
        this.validateScore(score, evaluation);
        this._evaluation = evaluation;
        this._score = score;
    }
    Object.defineProperty(EvaluationResult.prototype, "evaluation", {
        get: function () {
            return this._evaluation;
        },
        set: function (value) {
            this._evaluation = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EvaluationResult.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (value) {
            this.validateScore(value, this.evaluation);
            this._score = value;
        },
        enumerable: false,
        configurable: true
    });
    EvaluationResult.prototype.validateScore = function (score, evaluation) {
        if (score < 0)
            throw new Error('A pontuação não pode ser negativa');
        if (evaluation.type === 'prova' && score > 25) {
            throw new Error('A pontuação não pode ser maior que a pontuação da avaliação.');
        }
        if (evaluation.type === 'trabalho' && score > 50) {
            throw new Error('A pontuação não pode ser maior que a pontuação da avaliação.');
        }
    };
    return EvaluationResult;
}());
exports.default = EvaluationResult;
