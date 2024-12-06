let input = retornoUm()
app(input)

function app(a){
    let b = [...a] //[...a] Operador spread
    b.push(2)
    console.log(a[1])
    console.log(b[1])
}

function retornoUm(){
    return [1]
}