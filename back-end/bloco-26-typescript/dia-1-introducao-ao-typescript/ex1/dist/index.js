"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const months_1 = __importDefault(require("./months"));
const seasons_1 = __importDefault(require("./seasons"));
const northSeasons = {
    [seasons_1.default.OUTONO]: [months_1.default.SETEMBRO, months_1.default.OUTUBRO, months_1.default.NOVEMBRO, months_1.default.DEZEMBRO],
    [seasons_1.default.INVERNO]: [months_1.default.DEZEMBRO, months_1.default.JANEIRO, months_1.default.FEVEREIRO, months_1.default.MARÇO],
    [seasons_1.default.PRIMAVERA]: [months_1.default.MARÇO, months_1.default.ABRIL, months_1.default.MAIO, months_1.default.JUNHO],
    [seasons_1.default.VERÃO]: [months_1.default.JUNHO, months_1.default.JULHO, months_1.default.AGOSTO, months_1.default.SETEMBRO],
};
const southSeasons = {
    [seasons_1.default.OUTONO]: northSeasons.Primavera,
    [seasons_1.default.INVERNO]: northSeasons.Verão,
    [seasons_1.default.PRIMAVERA]: northSeasons.Outono,
    [seasons_1.default.VERÃO]: northSeasons.Inverno,
};
const hemispheres = {
    Sul: southSeasons,
    Norte: northSeasons,
};
const monthNames = Object.values(months_1.default);
const hemisphereNames = Object.keys(hemispheres);
const monthSelected = readline_sync_1.default.keyInSelect(monthNames, 'Escolha um mês');
const hemisphereSelected = readline_sync_1.default.keyInSelect(hemisphereNames, 'Escolha um hemisfério');
const month = monthNames[monthSelected];
const hemisphere = hemisphereNames[hemisphereSelected];
const hemisphereSeasons = Object.values(hemispheres)[hemisphereSelected];
const seasonList = [];
Object.entries(hemisphereSeasons).forEach((e) => {
    const actualSeason = e[0];
    const actualMonths = e[1];
    if (actualMonths.includes(month))
        seasonList.push(actualSeason);
});
console.log(`Mês: ${month}`);
console.log(`Hemisfério: ${hemisphere}`);
console.log(`Estações:`);
seasonList.forEach((e) => console.log(e));
