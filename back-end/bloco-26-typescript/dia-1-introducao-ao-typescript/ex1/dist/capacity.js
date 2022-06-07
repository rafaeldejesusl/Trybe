"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const units3 = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
function convert3(valor, uniBase, uniConversao) {
    const base = units3.indexOf(uniBase);
    const conv = units3.indexOf(uniConversao);
    const exponent = conv - base;
    return valor * Math.pow(10, exponent);
}
function exec3() {
    const valor = readline_sync_1.default.questionFloat('Digite o valor a ser convertido:');
    const baseIndex = readline_sync_1.default.keyInSelect(units3, 'Escolha a unidade base:');
    const convIndex = readline_sync_1.default.keyInSelect(units3, 'Escolha a unidade final:');
    const base = units3[baseIndex];
    const conv = units3[convIndex];
    const result = convert3(valor, base, conv);
    console.log(`${valor} ${base} é igual a ${result} ${conv}`);
}
exec3();
