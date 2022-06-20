class Data {
  private _day: number;
  private _month: number;
  private _year: number;

  constructor(day: number, month: number, year: number) {
    if (this.validateDate(day, month, year)) {
      this._day = day;
      this._month = month;
      this._year = year;
    } else {
      this._day = 1;
      this._month = 1;
      this._year = 1900;
    }
  }

  get day(): number {
    return this._day;
  }

  get month(): number {
    return this._month;
  }

  get year(): number {
    return this._year;
  }

  validateDate(day: number, month:number, year: number):boolean {
    const dateString = `${year}-${month}-${day}`;
    const actualDate = new Date(dateString);
    
    if (actualDate.getDate() !== day) return false;
    
    return true;
  }

  getMonthName(): string {
    enum Months {
      'Janeiro'= 1,
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    };
    return Months[this.month];
  }

  isLeapYear(): boolean {
    return ((this.year % 4 === 0) && (this.year % 100 !== 0) || (this.year % 400 === 0));
  }

  compare(comparedDate: Data): number {
    const actual = new Date(`${this.year}-${this.month}-${this.day}`);
    const compared = new Date(
      `${comparedDate.year}-${comparedDate.month}-${comparedDate.day}`
    );

    if (actual > compared) return 1;
    if (actual < compared) return -1;

    return 0;
  }

  format(model: string): string {
    const conditions: boolean[] = [
      (!model.match(/a{2,4}/g)),
      (!model.match(/m{2}/g) && !model.match(/M{1}/g)),
      (!model.match(/d{2}/g))
    ];

    if (conditions.every((e) => e)) {
      throw new Error(`O formato passado é inválido: ${model}`);
    }

    const day = this.day > 9 ? this.day.toString() : `0${this.day}`;
    const month = this.month > 9 ? this.month.toString() : `0${this.month}`;
    const year = this.year.toString();

    const formattedDate = model
      .replace('aaaa', year)
      .replace('aa', year.substring(year.length - 2))
      .replace('mm', month)
      .replace('M', this.getMonthName())
      .replace('dd', day);

    return formattedDate;
  }

}

const testDate = new Data(29, 1, 1989);

console.log(testDate);
console.log('Dia: ', testDate.day);
console.log('Mês: ', testDate.month);
console.log('Mês por extenso: ', testDate.getMonthName());
console.log('Ano: ', testDate.year);
console.log('É ano bissexto: ', testDate.isLeapYear() ? 'Sim' : 'Não');
console.log(testDate.format('dd/mm/aaaa'));
console.log(testDate.format('dd-mm-aaaa'));
console.log(testDate.format('aaaa/mm/dd'));
console.log(testDate.format('aaaa-mm-dd'));
console.log(testDate.format('dd de M de aa'));
console.log(testDate.format('dd, M de aaaa'));

const otherDate = new Data(30, 1, 2021);

const compared = testDate.compare(otherDate);

const compareStates = ['anterior', 'igual', 'posterior'];

console.log(`A primeira data é ${compareStates[compared + 1]} a segunda.`);

// data inválida
const invalidDate = new Data(31, 2, 2021);

console.log('Teste data inválida: ', invalidDate);

// formato inválido
console.log(invalidDate.format('a m d'));