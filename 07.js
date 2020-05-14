//07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
//elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
//parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
//-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
//que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
//“Delta é negativo”.

function delta(a, b, c) {
        let d = (b ** 2)  - 4 * a * c
        if (d < 0) 
            throw 'Delta é negativo'
        else 
            return d
}

function  bhaskara(a, b, c) {
    try {
        let d = delta(a, b, c)
        let x1 = (-b + (d ** (1/2))) / 2 
        let x2 = (-b - (d ** (1/2))) / 2  
        return [x1, x2]      
    } catch (e) {
        return e
    }
}

console.log(bhaskara(1,1,1))

