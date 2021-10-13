let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let mult = [];
for (let i = 0; i < numbers.length; i += 1) {
  if (i < numbers.length - 1){
    mult.push(numbers[i] * numbers[i + 1]);
  }
  else {
    mult.push(numbers[i] * 2);
  }
}
console.log(mult);