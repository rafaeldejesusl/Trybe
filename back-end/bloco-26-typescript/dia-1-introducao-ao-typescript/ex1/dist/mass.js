"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const units2 = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
function convert2(valor, uniBase, uniConversao) {
    const base = units2.indexOf(uniBase);
    const conv = units2.indexOf(uniConversao);
    const exponent = conv - base;
    return valor * Math.pow(10, exponent);
}
function exec2() {
    const valor = readline_sync_1.default.questionFloat('Digite o valor a ser convertido:');
    const baseIndex = readline_sync_1.default.keyInSelect(units2, 'Escolha a unidade base:');
    const convIndex = readline_sync_1.default.keyInSelect(units2, 'Escolha a unidade final:');
    const base = units2[baseIndex];
    const conv = units2[convIndex];
    const result = convert2(valor, base, conv);
    console.log(`${valor} ${base} é igual a ${result} ${conv}`);
}
exec2();
