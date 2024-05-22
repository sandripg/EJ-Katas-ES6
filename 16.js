/* Crea una función llamada rollDice() que reciba como parametro el numero de caras 
que queramos que tenga el dado que deberá simular el codigo dentro de la función. 
Como hemos dicho, que la función use el parametro para simular una tirada de dado 
y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te 
preocupes! Busca información sobre la función de javascript Math.random() */

rollDice = (numFacesDice) => {
  return Math.round(Math.random() * (numFacesDice - 1) + 1);
};

const numCaras = 16;
const resultDice = rollDice(numCaras);

console.log(
  `He simulado una tirada de dados de ${numCaras} caras y he obtenido el ${resultDice}`
);
