import Enrollable from './enrollable';
import Person from './person';

class Student extends Person implements Enrollable {
  private _enrollment: string;
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16) {
      throw new Error('A matrícula deve possuir no mínimo 16 caracteres');
    }
    this._enrollment = value;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length > 4) {
      throw new Error('A pessoa estudante deve possuir no máximo 4 notas de provas');
    }
    this._examsGrades = value;
  }

  get worksGrades(): number[] {
    return this._worksGrades;
  }

  set worksGrades(value: number[]) {
    if (value.length > 2) {
      throw new Error('A pessoa estudante deve possuir no máximo 2 notas de trabalhos');
    }
    this._worksGrades = value;
  }

  sumGrades(): number {
    const examsSum = this.examsGrades.reduce((prev, cur) => prev + cur, 0);
    const worksSum = this.worksGrades.reduce((prev, cur) => prev + cur, 0);
    return Math.round((examsSum + worksSum) * 100) / 100
  }

  sumAverageGrade() : number {
    const totalLength = this.examsGrades.length + this.worksGrades.length;
    const sum = this.sumGrades();
    return Math.round(sum / totalLength * 100) / 100;
  }

  generateEnrollment(): string {
    const random = Math.floor(Math.random() * 100).toString().padStart(3, '0');
    const time = parseInt((new Date()).toLocaleString().replace(/[\/,:, ]/gm, ''))
    return `${time}${random}`;
  }

}

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

export default Student;