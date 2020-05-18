// 21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
// considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
// de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
// idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130

function pagamentoConvevio(idade = 0) {
    try {
        if (!(Number.isInteger(idade))) {
            throw error = {message: 'Idade deve ser um número inteiro!'}
        }
        return 100 + getAdditional(idade)
    } catch (error) {
        return error.message
    }

}

function getAdditional (idade){
    idade = Number(idade)
    if (idade < 10) {
        return 80.0
    } else if (10 <= idade && idade <= 30) {
        return 50.0
    } else if (30 < idade && idade <= 60) {
        return 95.0
    } else {
        return 130.0
    }
}

console.log(pagamentoConvevio(5))
console.log(pagamentoConvevio(15))
console.log(pagamentoConvevio(35))
console.log(pagamentoConvevio(65))