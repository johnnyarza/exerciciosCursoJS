// 17) Um funcionário irá receber um aumento de acordo com o seu plano de
// trabalho, de acordo com a tabela abaixo:
// Plano Aumento
// A 10%
// B 15%
// C 20%
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
// novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

function aumentaSalario(salarioInicial = 0, plano = '') {
    this.plano = plano.toUpperCase
    switch (plano) {
        case "A": return salarioInicial * 1.10  
        case "B": return salarioInicial * 1.15  
        case "C": return salarioInicial * 1.20  
        default : return "Argumento(s) inválido(s)"
    }
}

console.log(aumentaSalario(1000.00,"A"))
console.log(aumentaSalario(1000.00,"B"))
console.log(aumentaSalario(1000.00,"C"))
console.log(aumentaSalario(1000.00,"D"))