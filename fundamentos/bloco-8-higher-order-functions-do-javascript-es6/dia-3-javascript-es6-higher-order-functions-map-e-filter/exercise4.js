const books = require("../dia-3-javascript-es6-higher-order-functions-map-e-filter/data");

const expectedResult = [
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: { name: "H. P. Lovecraft", birthYear: 1890 },
    releaseYear: 1928,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: { name: "Isaac Asimov", birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: { name: "J. R. R. Tolkien", birthYear: 1892 },
    releaseYear: 1954,
  },
];

function oldBooksOrdered() {
  // escreva seu código aqui
  const livrosVelhos = books.filter((book) => 2022 - book.releaseYear > 60);
  return livrosVelhos.sort(
    (objeto1, objeto2) => objeto1.releaseYear - objeto2.releaseYear
  );
}
console.log(oldBooksOrdered());
