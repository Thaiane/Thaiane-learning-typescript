class Produto {
    constructor(
        public name: string,
        public preco: number,
        public desconto: number = 0) {

        console.log(`Construiu um produto com nome ${name}, preço de ${preco} e desconto de ${desconto}`)
    }

    precoComDesconto(): number {
        return this.preco * ( 1 - this.desconto)
    }
}

let jogo = new Produto("Life is Strange", 145.34, 0.10)
console.log(`Produto jogo`, jogo)
jogo.desconto = 0.20

console.log(`Produto jogo agora`, jogo)

let consoleGame = new Produto("PlayStation", 300.00)
console.log(`Produto consoleGame`, consoleGame)
console.log(jogo.precoComDesconto())
