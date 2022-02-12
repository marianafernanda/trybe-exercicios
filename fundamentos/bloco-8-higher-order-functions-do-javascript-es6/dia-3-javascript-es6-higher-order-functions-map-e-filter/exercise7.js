const books = require("../dia-3-javascript-es6-higher-order-functions-map-e-filter/data");

const expectedResult = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  // escreva seu código aqui
  const livro = books.filter((book) => book.author.name[1] === '.' && book.author.name[4] === '.' && book.author.name[7] === '.')[0].name;
  return livro;
}
console.log(authorWith3DotsOnName());