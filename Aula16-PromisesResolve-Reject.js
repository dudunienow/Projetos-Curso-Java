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

//RESOLVE E REJECT (promise)
const cozinha = (pedido,) =>
    new Promise((resolve, reject) => {
        console.log("executando promise")
        let tenhoIngredientes = true
        setTimeout(() =>{
            console.log(pedido['nome'] + ' pronto')
            if (tenhoIngredientes) resolve(pedido['nome'] + " para cliente")
            reject("sem ingredientes")
    }, pedido['tempo']);
    })

const garcon = (tarefa) => console.log("Levando " + tarefa)
const janta = () =>{
    console.log('iniciando pedidos')
    cozinha(pedido1, garcon)

    console.log('encerrando pedidos')
    console.log('pedir conta')
}

janta()