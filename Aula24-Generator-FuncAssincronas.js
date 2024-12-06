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
            if (!tenhoIngredientes){
                reject("sem ingredientes")
            }                
            console.log(pedido['nome'] + ' pronto')
            resolve(pedido['nome'] + " para cliente")
    }, pedido['tempo']);
    }
)
function* garcon(){
    yield cozinha(pedido1)
    yield cozinha(pedido2)
    yield cozinha(pedido3)
}

const janta = async () =>{
    let meuGarcon = garcon()
    console.log("iniciando pedidos")
    let pedido = meuGarcon.next()
    while(!pedido.done){
        console.log(await pedido.value)
        pedido = meuGarcon.next()
    }
    console.log("pedir conta")
}
janta()