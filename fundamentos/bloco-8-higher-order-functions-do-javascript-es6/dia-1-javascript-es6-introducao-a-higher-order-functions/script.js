const acorda = () => 'Acordando!!';
const cafe = () => 'Bora tomar café';
const dormir = () => 'Partiu dormir!!';

const doingThings = (funcao) => {
    const resultado = funcao();
    console.log(resultado)
};

doingThings(acorda);
doingThings(cafe);
doingThings(dormir);