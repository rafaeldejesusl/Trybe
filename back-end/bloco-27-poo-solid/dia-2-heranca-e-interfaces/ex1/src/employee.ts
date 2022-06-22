import Enrollable from "./enrollable";
import Person from "./person";

class Employee extends Person implements Enrollable {
  private _salary: number;
  private _enrollment: string;
  private _admissionDate: Date;

  constructor(name: string, birthDate: Date, salary: number) {
    super(name, birthDate);
    this.validateSalary(salary);
    this._salary = salary;
    this._enrollment = this.generateEnrollment();
    this._admissionDate = new Date();
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    this.validateSalary(this.salary);
    this._salary = value;
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16) {
      throw new Error('O registro deve possuir no mínimo 16 caracteres');
    }
    this._enrollment = value;
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

  generateEnrollment(): string {
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

// const testInterfaceEmployee: Employee = {
//   registration: 'FNC1234567891011',
//   salary: 1200.00,
//   admissionDate: new Date(),

//   generateRegistration(): string {
//     const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

//     return `FNC${randomStr}`;
//   },
// };

// console.log(testInterfaceEmployee);

export default Employee;