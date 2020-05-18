// 19) O cardápio de uma lanchonete é o seguinte:
// Código Descrição do Produto Preço
// 100 Cachorro Quente R$ 3,00
// 200 Hambúrguer Simples R$ 4,00
// 300 Cheeseburguer R$ 5,50
// 400 Bauru R$ 7,50
// 500 Refrigerante R$ 3,50
// 600 Suco R$ 2,80
// Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
// a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
// comando switch. Crie um caso default para produto não existente.

const listaProdutos = []

listaProdutos.push({
    cod: 100,
    nome: 'Cachorro quente',
    precoUnitario:3.00
},
{
    cod: 200,
    nome: 'Hambúrguer Simples',
    precoUnitario:4.00   
},
{
    cod: 300,
    nome: 'CheeseBurguer',
    precoUnitario:5.50   
},
{
    cod: 400,
    nome: 'Bauru',
    precoUnitario:7.50 
},
{
    cod: 500,
    nome: 'Refrigerante',
    precoUnitario: 3.50  
},
{
    cod: 600,
    nome: 'Suco',
    precoUnitario:2.80   
})

function subTotal(cod = 0,qtt = 0) {
    switch (cod){
        case 100 : return listaProdutos[0].precoUnitario * qtt
        case 200 : return listaProdutos[1].precoUnitario * qtt
        case 300 : return listaProdutos[2].precoUnitario * qtt
        case 400 : return listaProdutos[3].precoUnitario * qtt
        case 500 : return listaProdutos[4].precoUnitario * qtt
        case 600 : return listaProdutos[5].precoUnitario * qtt
        default : "Argumento(s) inválido(s)"
    }
}

console.log(subTotal(100,2))
console.log(subTotal(200,2))
console.log(subTotal(300,2))
console.log(subTotal(400,2))
console.log(subTotal(500,2))
console.log(subTotal(600,2))