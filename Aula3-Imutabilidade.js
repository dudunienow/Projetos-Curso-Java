let input = retornoUm()
app(input)

function app(a){
    let b = a
    b["dois"] = 2
    console.log(a)
    console.log(b)
}

function retornoUm(){
    return {"um": 1}
}