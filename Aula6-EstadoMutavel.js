function app(){
    const arr = ["maçã", "banana", "laranja", "abacaxi"]
    console.log("Inicio")
    mostraElementos(arr)
    arr.sort()
    console.log("Depois do sort")
    mostraElementos(arr)
}

function mostraElementos(arr){
    console.log(arr.length)
    while(arr.length>0){
        console.log(arr.shift())
    }
}

app()