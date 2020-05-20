//26) Fazer um programa para encontrar todos os pares entre 1 e 100.

function findEven(max) {
  for (let i = 1; i <= max; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

findEven(100);
