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
    })

//THEN - CATCH - ENCADEAMENTO
const janta = () =>{
    console.log('iniciando pedidos')
    cozinha(pedido1,).then(     //THEN
        (retorno) => {
            console.log(retorno)
            console.log('COMENDO')
        }
    ).then(                     //ENCADEAMENTO 
        () => cozinha(pedido2)
    ).then(
        () => cozinha(pedido3)
    ).catch(retorno => {    //CATCH
    console.log(retorno)
    console.log("mudar pedido")
    })
}

janta()