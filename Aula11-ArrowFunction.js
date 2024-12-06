/*const adicionar2 = a => a + 2
console.log(adicionar2(1))*/

const retornaA = () => "a" //expressão
const retorna1mais1 = () => {   //declaração
    let a = 1
    let b = 1
    return a + b
}

const umMaisUm = () => retorna1mais1
const voidFunction = () => console.log("dentro da void")
const voidArrow = () => voidFunction()

console.log(retornaA())
console.log(retorna1mais1())
console.log(umMaisUm())
console.log(voidArrow())
