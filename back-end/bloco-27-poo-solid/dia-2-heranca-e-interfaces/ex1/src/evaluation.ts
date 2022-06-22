import Teacher from "./teacher";

abstract class Evaluation {
  private _score: number;
  private _teacher: Teacher;
  public type: string;

  constructor(score: number, teacher: Teacher, type: string) {
    this.validateScore(score);
    this._score = score;
    this._teacher = teacher;
    this.type = type;
  }

  get score(): number {
    return this._score;
  }
  
  set score(value: number) {
    this.validateScore(value);
    this._score = value;
  }
  
  get teacher(): Teacher {
    return this._teacher;
  }

  set teacher(value: Teacher) {
    this._teacher = value;
  }

  validateScore(value: number): void {
    if (value < 0) throw new Error('A pontuação não pode ser negativa');
  }

}

export default Evaluation;