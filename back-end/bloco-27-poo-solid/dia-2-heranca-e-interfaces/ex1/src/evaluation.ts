import Teacher from "./teacher";

class Evaluation {
  private _score: number;
  private _teacher: Teacher;
  private _type: 'prova' | 'trabalho';

  constructor(score: number, teacher: Teacher, type: 'prova' | 'trabalho') {
    this.validateScore(score, type);
    this._score = score;
    this._teacher = teacher;
    this._type = type;
  }

  get score(): number {
    return this._score;
  }
  
  set score(value: number) {
    this.validateScore(value, this.type);
    this._score = value;
  }
  
  get teacher(): Teacher {
    return this._teacher;
  }

  set teacher(value: Teacher) {
    this._teacher = value;
  }

  get type(): 'prova' | 'trabalho' {
    return this._type;
  }

  set type(value: 'prova' | 'trabalho') {
    this._type = value;
  }

  private validateScore(value: number, type: 'prova' | 'trabalho'): void {
    if (value < 0) throw new Error('A pontuação não pode ser negativa');
    if (type === 'prova' && value > 25) {
      throw new Error('A pontuação caso a avaliação seja do tipo "prova" não pode passar de 25 pontos');
    }
    if (type === 'trabalho' && value > 50) {
      throw new Error('A pontuação caso seja do tipo "trabalho" não pode passar de 50 pontos');
    }
  }

}

export default Evaluation;