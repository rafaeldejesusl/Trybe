import Person from "./person";
import Employee from "./employee";
import Subject from "./subject";

class Teacher extends Person implements Employee {
  private _subject: Subject;
  private _salary: number;
  private _registration: string;
  private _admissionDate: Date;

  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate);
    this.validateSalary(salary);
    this._subject = subject;
    this._salary = salary;
    this._registration = this.generateRegistration();
    this._admissionDate = new Date();
  }

  get subject(): Subject {
    return this._subject;
  }

  set subject(value: Subject) {
    this._subject = value;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    this.validateSalary(this.salary);
    this._salary = value;
  }

  get registration(): string {
    return this._registration;
  }

  set registration(value: string) {
    if (value.length < 16) {
      throw new Error('O registro deve possuir no mínimo 16 caracteres');
    }
    this._registration = value;
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  set admissionDate(value: Date) {
    const now = new Date();
    if (value.getTime() > now.getTime()) {
      throw new Error('A data de admissão não pode ser no futuro');
    }
    this._admissionDate = value;
  }

  generateRegistration(): string {
    const random = Math.floor(Math.random() * 100).toString().padStart(3, '0');
    const time = parseInt((new Date()).toLocaleString().replace(/[\/,:, ]/gm, ''))
    return `R${time}${random}`;
  }

  validateSalary(value: number): void {
    if (value < 0) {
      throw new Error('O salário não pode ser negativo');
    }
  }

}

// const math = new Subject('Matemática');
// const history = new Subject('História');
// const philosophy = new Subject('Filosofia');

// const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
// const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, history);
// const lucio = new Teacher('Lucio Teixeira', new Date('1986/01/29'), 2000, philosophy);

// console.log(marta);
// console.log(joao);
// console.log(lucio);

// // const invalidTeacherSalary = new Teacher('Marta da Silva', new Date('1980/03/30'), -2000, math);

// const today = new Date();
// today.setDate(today.getDate() + 1)
// const tomorrow = today;
// marta.admissionDate = tomorrow;

export default Teacher;