// 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
// deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
// deles estão fora do intervalo, escrevendo estas informações.

function countNumbersInRange(arrayOfNumbers = [], range = [initial, final]) {
  let [countIn, countOut] = [0, 0];
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] >= range[0] && arrayOfNumbers[i] <= range[1]) {
      countIn++;
    } else {
      countOut++;
    }
  }
  console.log(`Dentro: ${countIn} Fora: ${countOut}`);
}

countNumbersInRange([10, 15, 20], [12, 21]);
countNumbersInRange([34, 50, 90, 66, 1, 2, 5, 10], [5, 50]);
