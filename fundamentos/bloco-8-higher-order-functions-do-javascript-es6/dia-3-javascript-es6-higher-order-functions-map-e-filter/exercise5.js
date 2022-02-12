const books = require("../dia-3-javascript-es6-higher-order-functions-map-e-filter/data");

const expectedResult = [
    'Frank Herbert',
    'George R. R. Martin',
    'Isaac Asimov',
    'J. R. R. Tolkien',
  ];
  
  function fantasyOrScienceFictionAuthors() {
    // escreva seu código aqui
    const generos = ['Ficção Científica', 'Fantasia'];
    const autores = books.filter((book) => generos.includes(book.genre));
    const autoresOrdem = autores.map((book) => book.author.name).sort();
    return autoresOrdem;
  }
  console.log(fantasyOrScienceFictionAuthors());