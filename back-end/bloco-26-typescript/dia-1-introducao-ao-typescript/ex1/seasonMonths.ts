import readline from 'readline-sync';
import Months from './months';
import Seasons from './seasons';

const northSeasons = {
  [Seasons.OUTONO]: [Months.SETEMBRO, Months.OUTUBRO, Months.NOVEMBRO, Months.DEZEMBRO],
  [Seasons.INVERNO]: [Months.DEZEMBRO, Months.JANEIRO, Months.FEVEREIRO, Months.MARÇO],
  [Seasons.PRIMAVERA]: [Months.MARÇO, Months.ABRIL, Months.MAIO, Months.JUNHO],
  [Seasons.VERÃO]: [Months.JUNHO, Months.JULHO, Months.AGOSTO, Months.SETEMBRO],
};

const southSeasons = {
  [Seasons.OUTONO]: northSeasons.Primavera,
  [Seasons.INVERNO]: northSeasons.Verão,
  [Seasons.PRIMAVERA]: northSeasons.Outono,
  [Seasons.VERÃO]: northSeasons.Inverno,
};

const hemispheres = {
  Sul: southSeasons,
  Norte: northSeasons,
};

const monthNames = Object.values(Months);

const hemisphereNames = Object.keys(hemispheres);

const monthSelected = readline.keyInSelect(monthNames, 'Escolha um mês');

const hemisphereSelected = readline.keyInSelect(hemisphereNames, 'Escolha um hemisfério');

const month = monthNames[monthSelected];

const hemisphere = hemisphereNames[hemisphereSelected];

const hemisphereSeasons = Object.values(hemispheres)[hemisphereSelected];

const seasonList: string[] = [];

Object.entries(hemisphereSeasons).forEach((e) => {
  const actualSeason = e[0];
  const actualMonths = e[1];
  if (actualMonths.includes(month)) seasonList.push(actualSeason);
});

console.log(`Mês: ${month}`);
console.log(`Hemisfério: ${hemisphere}`);
console.log(`Estações:`);
seasonList.forEach((e) => console.log(e));
