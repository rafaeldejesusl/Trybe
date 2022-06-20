"use strict";
class Data {
    constructor(day, month, year) {
        if (this.validateDate(day, month, year)) {
            this._day = day;
            this._month = month;
            this._year = year;
        }
        else {
            this._day = 1;
            this._month = 1;
            this._year = 1900;
        }
    }
    get day() {
        return this._day;
    }
    get month() {
        return this._month;
    }
    get year() {
        return this._year;
    }
    validateDate(day, month, year) {
        const dateString = `${year}-${month}-${day}`;
        const actualDate = new Date(dateString);
        if (actualDate.getDate() !== day)
            return false;
        return true;
    }
    getMonthName() {
        let Months;
        (function (Months) {
            Months[Months["Janeiro"] = 1] = "Janeiro";
            Months[Months["Fevereiro"] = 2] = "Fevereiro";
            Months[Months["Mar\u00E7o"] = 3] = "Mar\u00E7o";
            Months[Months["Abril"] = 4] = "Abril";
            Months[Months["Maio"] = 5] = "Maio";
            Months[Months["Junho"] = 6] = "Junho";
            Months[Months["Julho"] = 7] = "Julho";
            Months[Months["Agosto"] = 8] = "Agosto";
            Months[Months["Setembro"] = 9] = "Setembro";
            Months[Months["Outubro"] = 10] = "Outubro";
            Months[Months["Novembro"] = 11] = "Novembro";
            Months[Months["Dezembro"] = 12] = "Dezembro";
        })(Months || (Months = {}));
        ;
        return Months[this.month];
    }
    isLeapYear() {
        return ((this.year % 4 === 0) && (this.year % 100 !== 0) || (this.year % 400 === 0));
    }
    compare(comparedDate) {
        const actual = new Date(`${this.year}-${this.month}-${this.day}`);
        const compared = new Date(`${comparedDate.year}-${comparedDate.month}-${comparedDate.day}`);
        if (actual > compared)
            return 1;
        if (actual < compared)
            return -1;
        return 0;
    }
    format(model) {
        const conditions = [
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
