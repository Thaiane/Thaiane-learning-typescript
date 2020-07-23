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

// Desafio
const usuarioLogado = {
    nome: 'Thai Braga',
    email: 'thai@gmail.com',
    admin: true
}

@perfilAdmin
class MudancaAdministrativa {
    critico() {
        console.log('Algo crítico foi alterado!')
    }
}

new MudancaAdministrativa().critico()

type Construtor = { new(...args: any[]): {} }

function perfilAdmin<T extends Construtor>(construtor: T) {
    return class extends construtor {
        constructor(...args: any[]) {
            super(...args)
            if(!usuarioLogado || !usuarioLogado.admin) {
                throw new Error('Não pode')
            }
        }
    }
}
