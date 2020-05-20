//24) Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.

function printHelloWorld(times = 0) {
  let i = 1;
  while (i <= times) {
    console.log(i + ': Hellor World');
    i++;
  }
}

printHelloWorld(11);
