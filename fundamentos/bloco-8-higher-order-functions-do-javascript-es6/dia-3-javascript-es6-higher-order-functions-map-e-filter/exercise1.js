const books = require('../dia-3-javascript-es6-higher-order-functions-map-e-filter/data');

const expectedResult = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

function formatedBookNames() {
  // escreva seu código aqui
  const arrayMaiuscula = books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`.toUpperCase());
  return arrayMaiuscula;
}
console.log(formatedBookNames());