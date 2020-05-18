// 23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
// aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
// aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
// "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.

function checkStudent(cod, notas = []) {
    try {
        if (notas.length != 3) {
            throw error = 'Verificar nota(s)'
        }
        if (!Number.isInteger(cod)) {
            throw error = 'Verificar código'
        }
        return `Aluno código: ${cod} está ${aprovado(mediaNotas(notas))} com média ${(mediaNotas(notas).toFixed(2))}`
    } catch (error) {
        return error
    }
}

function mediaNotas(notas = []) {
    let soma = 0
    let div = 0
    for (let i = 0; i < notas.length; i++) {
        if (notas[i] > 10 || notas[i] < 0 || typeof(notas[i]) != 'number') throw error = 'Verificar nota(s)'
        soma += (notas[i] * (i + 1))
        div += (i + 1)
    }
    return soma / div
}

function aprovado(media = 0) {
    if (media >= 5.0 && media <= 10.0) {
        return 'APROVADO'
    } else if (media >= 0 && media < 5.0) {
        return 'REPROVADO'
    } else {
        throw error = 'Verificar média'
    }
}

console.log(checkStudent(1,[1,2,3]))
console.log(checkStudent(1,[1,2,10]))
console.log(checkStudent(1,[1,2,11]))
console.log(checkStudent(1,[1,2,'a']))