function app(){
    const arr = ["maçã", "banana", "laranja", "abacaxi"]
    console.log("Inicio")
    mostraElementos(arr)
    arr.sort()
    console.log("Depois do sort")
    mostraElementos(arr)
}

function mostraElementos(arr){
    const newArray = [...arr]
    console.log(newArray.length)
    while(newArray.length>0){
        console.log(newArray.shift())
    }
}

app()