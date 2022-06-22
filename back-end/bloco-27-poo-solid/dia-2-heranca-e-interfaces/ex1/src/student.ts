import Enrollable from './enrollable';
import Person from './person';

class Student extends Person implements Enrollable {
  private _enrollment: string;
  private _evaluationsResults: number[] = [];

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

  get evaluationsResults(): number[] {
    return this._evaluationsResults;
  }

  set evaluationsResults(value: number[]) {
    this._evaluationsResults = value;
  }

  sumGrades(): number {
    const evaluationSum = this.evaluationsResults.reduce((prev, cur) => prev + cur, 0);
    return Math.round((evaluationSum) * 100) / 100
  }

  sumAverageGrade() : number {
    const length = this.evaluationsResults.length;
    const sum = this.sumGrades();
    return Math.round(sum / length * 100) / 100;
  }

  generateEnrollment(): string {
    const random = Math.floor(Math.random() * 100).toString().padStart(3, '0');
    const time = parseInt((new Date()).toLocaleString().replace(/[\/,:, ]/gm, ''))
    return `${time}${random}`;
  }

  addEvaluationResult(value: number): void {
    this.evaluationsResults.push(value);
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