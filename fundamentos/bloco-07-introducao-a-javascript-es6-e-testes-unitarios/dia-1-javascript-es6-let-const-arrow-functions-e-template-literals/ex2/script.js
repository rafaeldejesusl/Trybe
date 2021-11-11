const fatorial = number => {
  let sum = 1;
  if (number <= 0) {
    console.log(`Apenas números positivos`);
  } else {
    for (let i = 1; i <= number; i += 1) {
      sum = sum * i;
    }
    console.log(sum);
  }
}
// fatorial(0);

const longestWord = texto => {
  const array = texto.split(' ');
  let longest = '';
  for (let i = 0; i < array.length; i += 1) {
    array[i].length > longest.length ? longest = array[i] : longest
  }
  console.log(longest);
}
longestWord("Antônio foi no banheiro e não sabemos o que aconteceu");