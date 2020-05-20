//28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

function countOddAndEven(...arrayOfNumbers) {
  let countOdd = 0;
  let countEven = 0;
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] % 2 === 0) {
      countEven++;
    } else {
      countOdd++;
    }
  }
  console.log(
    `Existem ${countEven} número(s) pare(s) e  ${countOdd} número(s) ímpare(s)`
  );
}

countOddAndEven(...[1, 2, 3]);
