"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const units4 = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];
function convert4(valor, uniBase, uniConversao) {
    const base = units4.indexOf(uniBase);
    const conv = units4.indexOf(uniConversao);
    const exponent = 2 * (conv - base);
    return valor * Math.pow(10, exponent);
}
function exec4() {
    const valor = readline_sync_1.default.questionFloat('Digite o valor a ser convertido:');
    const baseIndex = readline_sync_1.default.keyInSelect(units4, 'Escolha a unidade base:');
    const convIndex = readline_sync_1.default.keyInSelect(units4, 'Escolha a unidade final:');
    const base = units4[baseIndex];
    const conv = units4[convIndex];
    const result = convert4(valor, base, conv);
    console.log(`${valor} ${base} é igual a ${result} ${conv}`);
}
exec4();
