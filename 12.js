//12) Faça um algoritmo que calcule o fatorial de um número.

function fatorial(x = 1) {
    let fat = 1
    if (x == 0 || x == 1) {
        return 1
    }
    while (x > 1) {
        fat = x * fat
        x = x - 1
    }
    return fat
}

console.log(fatorial(3))
