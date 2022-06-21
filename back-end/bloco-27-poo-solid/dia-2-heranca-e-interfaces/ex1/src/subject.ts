class Subject {
  private _name: string;

  constructor(name: string) {
    this.validateName(name);
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  validateName(value: string): void {
    if (value.length < 3) {
      throw new Error('O nome tem que possuir no mínimo 3 caracteres');
    }
  }

}

// const math = new Subject('Matemática');
// const story = new Subject('História');
// const philosophy = new Subject('Filosofia');

// console.log(math);
// console.log(story);
// console.log(philosophy);

// const invalidSubjectName = new Subject('Po');

export default Subject;