const pessoaContratada = (nome) => {
    const email = nome.toLowerCase().split(' ').join('_');
    return {name: nome, email: `${email}@trybe.com`};
};

const newEmployees = (funcao) => {
    const employees = {
      id1: funcao('Pedro Guerra'),
      id2: funcao('Luiza Drumond'),
      id3: funcao('Carla Paiva'),
    }
    return employees;
};

console.log(newEmployees(pessoaContratada));