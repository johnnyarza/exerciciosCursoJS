// 20) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
// para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
// Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
// informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
// nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.

function fracionaValor (valor = 0) {
    let cedula = getCedulas()
    let str = ''
    let contador = 0
    for (let i = 0; i < 5; i++) {
        contador = 0
        while ( valor / cedula[i] >= 1 ) {
            contador ++
            valor -= cedula[i]
        }
        if (contador > 0)
            str = str + `${contador} nota(s) de R$ ${cedula[i]}. `       
    }
    return str
}

function getCedulas() {
    return [100,50,10,5,1]
}

console.log(fracionaValor(533))