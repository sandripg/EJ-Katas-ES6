// Crea una función llamada findArrayIndex que reciba como parametros un array de textos y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

// Haz varios ejemplos y compruebalos.

// Sugerencia de función:
// function findArrayIndex(array, text) {}

// Ej array:
const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan"
];

// let textName = "Rey";
// let textName2 = "Anakin";
// let textName3 = "Nadie";

function findArrayIndex(array, text) {
  let count = 0;
  for (const position of array) {
    if (position === text) {
      return count;
    }
    count++;
  }
}

findArrayIndex = (array, text) => {
  return array.indexOf(text);
};

console.log(findArrayIndex(mainCharacters, "Rey"));
console.log(findArrayIndex(mainCharacters, "Anakin"));
console.log(findArrayIndex(mainCharacters, "Nadie"));
