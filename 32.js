//32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

function med(arrayOfInteger = []) {
  let sum = 0;
  for (let i = 0; i < arrayOfInteger.length; i++) {
    sum += arrayOfInteger[i];
  }
  console.log(`Média = ${sum / arrayOfInteger.length}`);
}

med([1, 2, 3]);
