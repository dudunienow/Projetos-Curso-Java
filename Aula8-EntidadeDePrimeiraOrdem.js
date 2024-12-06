/*function soma(a,b){
    return a+b
}

const adicionar = soma
console.log(adicionar(1,1))*/

const adicionar = function (a,b){
    return a+b
}

console.log(adicionar(1,1))

const clicar = function(){
    console.log("clicado")
}

const acao = function(a,b, callback){
    console.log("fzendo algo demorado")
    console.log(callback(a,b))
}

acao(1,1,adicionar)