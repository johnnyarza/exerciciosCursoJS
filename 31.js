// 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console.

function countNegative(arrayOfIntegers = []) {
  let count = 0;
  for (let i = 0; i < arrayOfIntegers.length; i++) {
    if (arrayOfIntegers[i] < 0) {
      count++;
    }
  }
  console.log('Negativos: ' + count);
}

countNegative([-1, 0, 2, -2]);
