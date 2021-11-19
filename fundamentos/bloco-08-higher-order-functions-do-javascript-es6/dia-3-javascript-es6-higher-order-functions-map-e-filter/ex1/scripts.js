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

function formatedBookNames() {
  return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`)
}

function nameAndAge() {
  let result = books.map((book) => {
    let obj = {
      age: book.releaseYear - book.author.birthYear,
      author: book.author.name,
    };
    return obj;
  });
  return result.sort((a,b) => a.age - b.age);
}

function fantasyOrScienceFiction() {
  let result = books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica')
  return result;
}

function oldBooksOrdered() {
  let result = books.filter((book) => book.releaseYear <= 1961);
  return result.sort((a, b) => a.releaseYear - b.releaseYear)
}

function fantasyOrScienceFictionAuthors() {
  let result = fantasyOrScienceFiction();
  result = result.map((book) => book.author.name);
  return result.sort();
}

function oldBooks() {
  let result = oldBooksOrdered();
  result = result.map((book) => book.name);
  return result;
}

function authorWith3DotsOnName() {
  let result =  books.filter((book) => (
    book.author.name.split(' ').filter((word) => word.endsWith('.')).length === 3
  ));
  result = result.map((book) => book.name);
  return result;
}

console.log(authorWith3DotsOnName());