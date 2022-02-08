const testandoEscopo = escopo => {
    if (escopo === true) {
        let ifEscopo = 'Não devo ser utilizada fora do meu escopo if';
        ifEscopo = `${ifEscopo}. Ótimo, fui utilizada no escopo!`;
        console.log(ifEscopo);
    } else {
        const elseEscopo = 'Não devo ser utilizada fora do meu escopo else';
        console.log(elseEscopo);
    }
}
testandoEscopo(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const returnArray = array => array.sort((a,b) => a - b)
const returnedArray = returnArray(oddsAndEvens);
console.log(`Os números ${returnedArray} se encontram ordenados de forma crescente!`);