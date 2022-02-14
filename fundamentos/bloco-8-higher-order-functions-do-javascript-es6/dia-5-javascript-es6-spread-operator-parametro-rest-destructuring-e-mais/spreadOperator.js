// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Abacaxi', 'Maçã', 'Banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Granola', 'Amendoim', 'Leite condensado'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit,...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));