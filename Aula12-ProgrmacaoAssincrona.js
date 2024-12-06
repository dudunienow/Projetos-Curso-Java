let pedido1 = {
    'nome': 'pedido1',
    'tempo' : 3000
}

let pedido2 = {
    'nome': 'pedido2',
    'tempo' : 1000
}

let pedido3 = {
    'nome': 'pedido3',
    'tempo' : 2000
}

function cozinha(pedido){
    setTimeout(() =>{
        console.log(pedido['nome'] + 'pronto')
    }, pedido['tempo']);
}

console.log('pedidos iniciados')

cozinha(pedido1)
cozinha(pedido2)
cozinha(pedido3)

console.log('pedidos encerrados')