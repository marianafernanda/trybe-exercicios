const a = 4;
const b = 6;
console.log('Soma: ' + (a + b));
console.log('Subtração: ' + (a - b));
console.log('Multiplicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));

const maior = 7;
const menor = 5;
if (maior > menor) {
    console.log('Maior é maior que menor')
}
else {
    console.log('Menor é maior que maior')
}

const numero1 = 10;
const numero2 = 9;
const numero3 = 8;
if (numero1 > numero2 && numero1 > numero3) {
    console.log('O maior número é: ' + numero1 + ' ' + '(numero1)')
}
else if (numero2 > numero1 && numero2 > numero3) {
    console.log('O maior número é: ' + numero2 + '' + '(numero2)')
}
else {
    console.log('O maior número é: ' + numero3 + '' + '(numero3)')
}

const comparacao = 1;
if (comparacao > 0) {
    console.log('Positive')
}
else if (comparacao < 0) {
    console.log('Negative')
}
else {
    console.log('Zero')
}

