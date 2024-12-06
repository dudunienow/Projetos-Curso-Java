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

const cozinha = (pedido,callback) =>
    setTimeout(() =>{
        console.log(pedido['nome'] + ' pronto')
        callback (pedido['nome'])
    }, pedido['tempo']);


const garcon = (tarefa) => console.log("Levando " + tarefa)
const janta = () =>{
    console.log('iniciando pedidos')
    cozinha(pedido1, garcon)
    cozinha(pedido2, garcon)
    cozinha(pedido3, garcon)
    console.log('encerrando pedidos')
    console.log('pedir conta')
}

janta()