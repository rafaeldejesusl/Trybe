abstract class Person {
  private _name: string;
  private _birthDate: Date;

  constructor(name: string, birthDate: Date) {
    this.validateName(name);
    this.validateBirthDate(birthDate);
    this._name = name;
    this._birthDate = birthDate;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(value: Date) {
    this.validateBirthDate(value);
    this._birthDate = value;
  }

  private calculateAge(value: Date): number {
    const now = new Date();
    const result = now.getTime() - value.getTime();
    const yearInMs = 31536000000;
    return Math.round(result / yearInMs);
  }

  private validateName(value: string): void {
    if (value.length < 3) throw new Error('O nome deve ter no mínimo três caracteres');
  }

  private validateBirthDate(value: Date): void {
    const now = new Date();
    if (value.getTime() > now.getTime()) {
      throw new Error('A data de nascimento não pode ser uma data no futuro');
    }
    if (this.calculateAge(value) > 120) {
      throw new Error('A pessoa não pode possuir mais de 120 anos');
    }
  }

}

// const maria = new Person('Maria da Consolação', new Date('1980/01/25'));
// const luiza = new Person('Luiza Andrade', new Date('2005/10/02'));


// console.log(maria);
// console.log(luiza);

// // const invalidPersonName = new Person('An', new Date('2000/06/07'));
// // const invalidPersonAge = new Person('Ana Vitória', new Date('1900/06/07'));

export default Person;