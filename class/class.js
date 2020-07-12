"use strict";
class Produto {
    constructor(name, preco, desconto = 0) {
        this.name = name;
        this.preco = preco;
        this.desconto = desconto;
        console.log(`Construiu um produto com nome ${name}, preço de ${preco} e desconto de ${desconto}`);
    }
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
    }
}
let jogo = new Produto("Life is Strange", 145.34, 0.10);
console.log(`Produto jogo`, jogo);
jogo.desconto = 0.20;
console.log(`Produto jogo agora`, jogo);
let consoleGame = new Produto("PlayStation", 300.00);
console.log(`Produto consoleGame`, consoleGame);
console.log(jogo.precoComDesconto());
