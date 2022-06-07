"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const units5 = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];
function convert5(valor, uniBase, uniConversao) {
    const base = units5.indexOf(uniBase);
    const conv = units5.indexOf(uniConversao);
    const exponent = 3 * (conv - base);
    return valor * Math.pow(10, exponent);
}
function exec5() {
    const valor = readline_sync_1.default.questionFloat('Digite o valor a ser convertido:');
    const baseIndex = readline_sync_1.default.keyInSelect(units5, 'Escolha a unidade base:');
    const convIndex = readline_sync_1.default.keyInSelect(units5, 'Escolha a unidade final:');
    const base = units5[baseIndex];
    const conv = units5[convIndex];
    const result = convert5(valor, base, conv);
    console.log(`${valor} ${base} é igual a ${result} ${conv}`);
}
exec5();
