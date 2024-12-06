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
        callback (pedido['nome'] + " Para cliente")
    }, pedido['tempo']);


const garcon = (tarefa, callback) => {
    console.log("Levando " + tarefa)
    callback()
}

//CALLBACK HELL
const janta = () =>{
    console.log('iniciando pedidos')
    garcon("pedido 1 para cozinha", () =>
        cozinha(pedido1, (retorno1) =>
            garcon(retorno1, () => 
                garcon("pedido 2 para cozinha", () =>
                    cozinha(pedido2, (retorno2) =>
                        garcon(retorno2, () => 
                            garcon("pedido 3 para cozinha", () =>
                                cozinha(pedido3, (retorno3) =>
                                    garcon(retorno3, () => {
                                        console.log("Encerrando pedidos")
                                    })
                                )
                            )
                        )
                    )
                ) 
            )
        )
    )
}

janta()