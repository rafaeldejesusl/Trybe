const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

// function containsA() {
//   let names1 = names.map((name) => name.toLowerCase());
//   let rep = names1.map((name) => name.split('a').length - 1);
//   console.log(rep);
//   return rep.reduce((total, item) => total = total + item, 0);
// }
function containsA() {
  return names.reduce((total, word)=> total += word.split('').reduce((rep, letter)=> letter === 'a' || letter === 'A' ? rep += 1 : rep, 0), 0);
}
console.log(containsA());