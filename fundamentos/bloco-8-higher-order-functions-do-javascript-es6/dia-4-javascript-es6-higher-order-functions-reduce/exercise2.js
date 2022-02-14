const books = require('../dia-4-javascript-es6-higher-order-functions-reduce/data');

const expectedResult = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";
console.log(expectedResult);

function reduceNames() {
  // escreva seu código aqui
  const autores = books.reduce((acc, book, index, array) => index === array.length -1 ? `${acc} ${book.author.name}.` : `${acc} ${book.author.name},`, '');
  return autores.trim();
}
console.log(reduceNames());