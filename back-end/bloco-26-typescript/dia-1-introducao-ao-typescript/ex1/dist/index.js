"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const scripts = [
    { name: 'Conversor de comprimento', script: './length' },
    { name: 'Conversor de massa', script: './mass' },
    { name: 'Conversor de capacidade', script: './capacity' },
    { name: 'Conversor de área', script: './area' },
    { name: 'Conversor de volume', script: './volume' },
];
const scriptNames = scripts.map((e) => e.name);
const scriptIndex = readline_sync_1.default.keyInSelect(scriptNames, 'Escolha um dos conversores de unidade:');
require(scripts[scriptIndex].script);
