function* generator(){
    console.log("iniciado o generator")
    yield 1
    console.log("segunda iteração")
    yield 2
    console.log("terceira iteração")
    yield 3
    console.log("final")
}
let gen = generator()
console.log(gen)
gen.next()
gen.next()
gen.next()
let result = gen.next()
console.log(result)