"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const units1 = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
function convert1(valor, uniBase, uniConversao) {
    const base = units1.indexOf(uniBase);
    const conv = units1.indexOf(uniConversao);
    const exponent = conv - base;
    return valor * Math.pow(10, exponent);
}
function exec1() {
    const valor = readline_sync_1.default.questionFloat('Digite o valor a ser convertido:');
    const baseIndex = readline_sync_1.default.keyInSelect(units1, 'Escolha a unidade base:');
    const convIndex = readline_sync_1.default.keyInSelect(units1, 'Escolha a unidade final:');
    const base = units1[baseIndex];
    const conv = units1[convIndex];
    const result = convert1(valor, base, conv);
    console.log(`${valor} ${base} é igual a ${result} ${conv}`);
}
exec1();
