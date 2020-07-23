// @logarClasse
@logarSe(true)
class Eletro {
    constructor() {
        console.log("Chamou o construtor")
    }
}

function logarClasse(construtor: Function) {
    console.log(construtor)
}

function logarSe(sera: boolean): any {
    return sera ? logarClasse : console.log("Nada não")
}

