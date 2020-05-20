// 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

function getMaxAndMin(arrayOfIntegers = [0]) {
  let max = arrayOfIntegers[0];
  let min = arrayOfIntegers[0];
  for (let i = 1; i < arrayOfIntegers.length; i++) {
    if (max < arrayOfIntegers[i]) {
      max = arrayOfIntegers[i];
    }
    if (min > arrayOfIntegers[i]) {
      min = arrayOfIntegers[i];
    }
  }
  console.log(`Maior: ${max} Menor: ${min}`);
}

getMaxAndMin([10, 9, 2]);
