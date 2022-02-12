const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

function flatten() {
  // escreva seu código aqui
  const umArray = arrays.reduce((acc, curr) => acc.concat(curr));
  return umArray;
}
console.log(flatten());
