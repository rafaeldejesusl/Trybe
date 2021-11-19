const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

function reduceNames() {
  let result = books.reduce((total, item) => total = `${total}, ${item.author.name}`, ``);
  result = `${result.slice(2)}.`;
  return result;
}
console.log(reduceNames());

function averageAge() {
  let result = books.reduce((total, number) => total = total + (number.releaseYear - number.author.birthYear), 0);
  result = result / books.length;
  return result;
}
console.log(averageAge());

function longestNamedBook() {
  let result = books.reduce((total, number) => total.length < number.name.length ? total = number.name : total, '');
  result = books.find((book) => book.name = result);
  return result
}
console.log(longestNamedBook());