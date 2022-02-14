const user = {
  nome: "Maria",
  age: 21,
  nationality: "Brazilian",
};

const jobInfos = {
  profession: "Software engineer",
  squad: "Rocket Landing Logic",
  squadInitials: "RLL",
};

const dados = {...user,...jobInfos};

const { nome, age, nationality, profession, squad, squadInitials } = dados;

console.log(`Hi, my name is ${nome}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession}, and my squad is ${squadInitials}-${squad}`);