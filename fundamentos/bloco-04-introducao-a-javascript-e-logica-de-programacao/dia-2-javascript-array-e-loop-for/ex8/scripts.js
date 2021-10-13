let array = [];
for (let i = 0; i < 25; i += 1) {
  array[i] = i + 1;
}
for (let div of array) {
  div = div / 2;
  console.log(div);
}