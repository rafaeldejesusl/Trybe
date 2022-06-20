"use strict";
class Student {
    constructor(matricula, nome) {
        this._matricula = matricula;
        this._nome = nome;
        this._prova = [];
        this._trabalho = [];
    }
    get matricula() {
        return this._matricula;
    }
    get nome() {
        return this._nome;
    }
    get prova() {
        return this._prova;
    }
    set prova(payload) {
        if (payload.length > 4) {
            throw new Error('O estudante pode ter apenas 4 notas de provas.');
        }
        this._prova = payload;
    }
    get trabalho() {
        return this._trabalho;
    }
    set trabalho(payload) {
        if (payload.length > 2) {
            throw new Error('O estudante pode ter apenas 2 notas de trabalhos.');
        }
        this._trabalho = payload;
    }
    soma() {
        const totalProva = this.prova
            .reduce((previous, current) => previous + current, 0);
        const totalTrabalho = this.trabalho
            .reduce((previous, current) => previous + current, 0);
        return totalProva + totalTrabalho;
    }
    media() {
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
