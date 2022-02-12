const books = require("../dia-3-javascript-es6-higher-order-functions-map-e-filter/data");

const expectedResult = [
  "O Senhor dos Anéis",
  "Fundação",
  "O Chamado de Cthulhu",
];

function oldBooks() {
  // escreva seu código aqui
  const livros60 = books.filter((book) => 2022 - book.releaseYear > 60);
  const livros = livros60.map((book) => book.name);
  return livros;
}
console.log(oldBooks());
