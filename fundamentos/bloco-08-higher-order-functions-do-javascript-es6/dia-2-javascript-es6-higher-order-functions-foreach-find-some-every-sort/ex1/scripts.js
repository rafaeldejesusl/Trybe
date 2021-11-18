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

function authorBornIn1947() {
  let check = books.find((book) => book.author.birthYear === 1947);
  return check.author.name;
};

function smallerName() {
  let nameBook = books[0].name;
  books.forEach((book) => {
    if (book.name.length < nameBook.length) {
      nameBook = book.name;
    }
    return nameBook;
  });
  return nameBook;
};

function getNamedBook() {
  return books.find((book) => book.name.length === 26);
};

function booksOrderedByReleaseYearDesc() {
  return books.sort((a, b) => b.releaseYear - a.releaseYear);
};

function everyoneWasBornOnSecXX() {
  return books.every((book) => 1901 <= book.author.birthYear && book.author.birthYear <= 2000);
};

function someBookWasReleaseOnThe80s() {
  return books.some((book) => 1980 <= book.releaseYear && book.releaseYear <= 1989);
};

function authorUnique() {
  return books.every((book) => !books.some((anotherBook) => book.author.birthYear === anotherBook.author.birthYear && book.author.name !== anotherBook.author.name));
};
  


console.log(authorUnique());