const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
    return names.find((nome) => nome.length === 5);
}

console.log(findNameWithFiveLetters());