//01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
//multiplicação e divisão desses valores.

function showCacls (a, b) {
    this.a = a
    this.b = b

    console.log(`Soma: ${a + b}`)
    console.log(`Subtração: ${a - b}`)
    console.log(`Multiplicação: ${a * b}`)
    if (b != 0)
        console.log(`Divisão: ${a / b}`)
    else 
        console.log('Não pode dividir por zero')
}

showCacls(1,3)