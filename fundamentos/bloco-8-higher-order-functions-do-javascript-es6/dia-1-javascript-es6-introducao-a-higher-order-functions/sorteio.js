const verificaNumero = (number, random) => number === random;

const sorteio = (number, funcao) => {
  const min = Math.ceil(1);
  const max = Math.floor(5);
  const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

  return funcao(number, numeroAleatorio) ? 'Parabéns você ganhou' : 'Tente novamente';
};

console.log(sorteio(3, verificaNumero));
