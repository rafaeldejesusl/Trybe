const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  let result = arrays.reduce((total, item) => total.concat(item), []);
  return result;
}
console.log(flatten());