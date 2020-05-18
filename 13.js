/*13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. */

function ehDiaUtil (d = 0) {
    d = Number(d)
    try {
        if (d > 7 || d < 1 || !Number.isInteger(d)) {
            throw error = {message: 'Número inválido'}
        } else {
            if (d == 1 || d == 7) {
                console.log('Não é dia util')
            } else {
                console.log('É dia útil')
            }
        }
    } catch (error) {
        console.log(error.message)
       
    }
}

ehDiaUtil(1)
ehDiaUtil(2)
ehDiaUtil(3)
ehDiaUtil(4)
ehDiaUtil(5)
ehDiaUtil(6)
ehDiaUtil(7)
ehDiaUtil()
ehDiaUtil(-1)
ehDiaUtil(8)