/*function calcular( a, b, operacao){
    return operacao( a, b)
}

function adicionar( a, b){
    return a + b
}

function subtrair( a, b){
    return a - b
}

console.log(calcular(2,2, adicionar))
console.log(calcular(2,2, subtrair))*/

function maiorQueN(n){
    return function(m){
        return m > n
    }
}

const maiorQue10 = maiorQueN(10)
console.log(maiorQue10(11))