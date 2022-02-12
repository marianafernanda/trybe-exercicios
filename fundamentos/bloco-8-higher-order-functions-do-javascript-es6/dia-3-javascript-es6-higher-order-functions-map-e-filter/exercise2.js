const books = require('../dia-3-javascript-es6-higher-order-functions-map-e-filter/data');

const expectedResult = [
  {
    age: 31,
    author: "Isaac Asimov",
  },
  {
    age: 38,
    author: "H. P. Lovecraft",
  },
  {
    age: 39,
    author: "Stephen King",
  },
  {
    age: 43,
    author: "George R. R. Martin",
  },
  {
    age: 45,
    author: "Frank Herbert",
  },
  {
    age: 62,
    author: "J. R. R. Tolkien",
  },
];

function nameAndAge() {
  // escreva seu código aqui
  const autor = books.map((book) => ({age: `${book.releaseYear - book.author.birthYear}`, author: `${book.author.name}` }));
  return autor.sort((objeto1, objeto2) => objeto1.age - objeto2.age);
}
console.log(nameAndAge());