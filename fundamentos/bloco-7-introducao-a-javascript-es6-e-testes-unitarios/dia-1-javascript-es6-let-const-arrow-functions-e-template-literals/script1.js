const fatorial = numero => numero > 1 ? numero * fatorial(numero - 1) : 1;
//console.log(fatorial(4));

const maiorPalavra = frase => {
    let palavrasFrase = frase.split(' ');
    let maiorTamanho = 0;
    let resultado = '';
    for (const palavra of palavrasFrase) {
        if (palavra.length > maiorTamanho) {
            maiorTamanho = palavra.length;
            resultado = palavra;
        }
    }
    return resultado;
}
console.log(maiorPalavra('Mariana é incrivelmente inteligente'));

