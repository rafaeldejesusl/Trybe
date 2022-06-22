import Evaluation from "./evaluation";

class EvaluationResult {
  private _evaluation: Evaluation;
  private _score: number;

  constructor(evaluation: Evaluation, score: number) {
    this.validateScore(score, evaluation);
    this._evaluation = evaluation;
    this._score = score;
  }

  get evaluation(): Evaluation {
    return this._evaluation;
  }

  set evaluation(value: Evaluation) {
    this._evaluation = value;
  }

  get score(): number {
    return this._score;
  }

  set score(value: number) {
    this.validateScore(value, this.evaluation);
    this._score = value;
  }

  validateScore(score: number, evaluation: Evaluation): void {
    if (score < 0) throw new Error('A pontuação não pode ser negativa');
    if (evaluation.type === 'prova' && score > 25) {
      throw new Error('A pontuação não pode ser maior que a pontuação da avaliação.');
    }
    if (evaluation.type === 'trabalho' && score > 50) {
      throw new Error('A pontuação não pode ser maior que a pontuação da avaliação.');
    }
  }

}

export default EvaluationResult;