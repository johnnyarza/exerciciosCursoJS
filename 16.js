// 16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
// como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
// numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
// 3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.


function calculadora (a=0,operacao='',b=0) {
    switch (operacao) {
        case "+": return sum(a, b); 
        case "-": return sub(a, b); 
        case "/": return div(a, b); 
        case "*": return mul(a, b); 
        default: return 'Argumento(s) inválido(s)'
    }
}

var sum = (a , b) => a + b
var sub = (a , b) => a - b
var div = (a, b) => a / b
var mul = (a , b) => a * b

console.log(calculadora(2,"+",2))
console.log(calculadora(2,"*",2))
console.log(calculadora(2,"/",2))
console.log(calculadora(2,"-",2))
console.log(calculadora(2,"x",2))