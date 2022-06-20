class Student {
  private _matricula: string;
  private _nome: string;
  private _prova: number[];
  private _trabalho: number[];

  constructor(matricula: string, nome: string) {
    this._matricula = matricula;
    this._nome = nome;
    this._prova = [];
    this._trabalho = [];
  }

  get matricula(): string {
    return this._matricula;
  }

  get nome(): string {
    return this._nome;
  }

  get prova(): number[] {
    return this._prova;
  }

  set prova(payload: number[]) {
    if (payload.length > 4) {
      throw new Error('O estudante pode ter apenas 4 notas de provas.');
    }

    this._prova = payload;
  }

  get trabalho(): number[] {
    return this._trabalho;
  }

  set trabalho(payload: number[]) {
    if (payload.length > 2) {
      throw new Error('O estudante pode ter apenas 2 notas de trabalhos.');
    }

    this._trabalho = payload;
  }

  soma():number {
    const totalProva = this.prova
      .reduce((previous, current) => previous + current, 0);
    const totalTrabalho = this.trabalho
      .reduce((previous, current) => previous + current, 0);
    return totalProva + totalTrabalho;
  }

  media():number {
    const total = this.soma();
    const quantity = this.prova.length + this.trabalho.length;
    return Math.round(total / quantity * 100) / 100;
  }
}

const personOne = new Student('202001011', 'Maria da Silva');

personOne.prova = [8, 8, 9, 8];

personOne.trabalho = [10, 7];

console.log(personOne);

console.log(personOne.soma());

console.log(personOne.media());
