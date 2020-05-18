// 22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
// parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
// anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
// compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.

function calcAnuidade(valor, mesVencimento, mesPagamento) {
    try {
        if ((mesVencimento > 12 || mesVencimento < 1) || (mesPagamento > 12 || mesPagamento < 1) || (!Number.isInteger(mesPagamento) || !Number.isInteger(mesVencimento))) {
            throw error = 'Mês inválido'
        }
        if (mesVencimento === mesPagamento) {
            return valor
        } else {
            return calcMontante(valor, mesPagamento - mesVencimento,0.05)   
        }
    } catch (error) {
        return error
    }
}

function calcMontante(valorInicial, meses, taxa) {
    return valorInicial * ((1 + taxa) ** meses)
}

console.log(calcAnuidade(1000,1,1))
console.log(calcAnuidade(1000,1,2))
console.log(calcAnuidade(1000,1,3))
console.log(calcAnuidade(1000,1,30))
console.log(calcAnuidade(1000,1,'a'))