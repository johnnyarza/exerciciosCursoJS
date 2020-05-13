/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

function jurosSimples(capitaInicial, taxa, tempo) {
    console.log(`R$ ${(capitaInicial + (capitaInicial * taxa * tempo)).toFixed(2).toString().replace('.',',')}`)
}


function jurosoComposto(capitaInicial, taxa, tempo) {
    console.log(`R$ ${(capitaInicial * ((1 + taxa) ** tempo)).toFixed(2).toString().replace('.',',')}`)
}
jurosSimples(1200,0.02,10)
jurosoComposto(1400,0.07,2)