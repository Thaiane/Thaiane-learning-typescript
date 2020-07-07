/*Typescript infere o tipo da variável e gera erro caso não seja respeitado esse tipo.
Isso se a declaração da variável já for atribuído um valor.
Entretanto, i ideal é ter a tipagem explícita, ou seja, declarada no código após a variável `: tipo` */


//string
let nome: string = 'Thai'
console.log(nome)
// nome = 1

//number
let irmaos: number = 2
console.log(irmaos)
// irmaos = 'Kamila e Felipe'

//bolean
let possuiHabilidades: boolean = true
console.log(possuiHabilidades)
// possuiHabilidades = 1

//Declaração sem atribuição
let minhaIdade: number
minhaIdade = 27
console.log(minhaIdade)

//array
let hobbies: any[] = ['violão', 4]
console.log(hobbies)

//Tuplas: define quantidade e tipo fixo (estrutura typescript)
let endereco: [string, number] = ['Av. Valparaiso', 1010]
console.log(endereco)

//enum (estrutura do typescript)
enum Cor {
    Azul,
    Amarelo,
    Verde
}

console.log(Cor.Amarelo)

//any: permite qualquer valor, tipagem fraca e dinâmica. Usado bastante na graduação de JS para TS
let carro: any = 'fusca'
console.log(carro)
carro = { modelo: 'fusca', ano: 92 }
console.log(carro)

//Funções

function meunome(): string {
    return 'Thai'
}
console.log(meunome())

function calc(num1: number, num2: number): number {
    return num1 * num2
}
console.log(calc(2,4))

//Tipar como função
let calculo: (numero: number, numero2: number) => number
calculo = calc
console.log(typeof calculo)

// Objetos
let usuario: {nome: string, idade: number} = {
    nome: 'Thai',
    idade: 27
}
console.log(usuario)

// Desafio
function pontoRegistrado(hora:number): string {
    return  (hora <= 8) ? 'ponto normal' : 'forado horário'
}

type Funcionario = {
    supervisores: string[],
    ponto: (hora: number) => string
}

let func: Funcionario = {
    supervisores: ['Daiane', 'Laiane', 'Raiane'],
    ponto: pontoRegistrado
}

console.log(func)
console.log(func.ponto(8))

// Union types

let nota: number | string = 10

//Never
function falha(msg: string): never {
    throw new Error(msg)
}

const produto = {
    nome: null,
    validarProduto() {
        if (!this.nome) {
            falha('Precisa ter nome')
        }
    }
}

// console.log(produto.validarProduto())

// Exemplo de transformação de código JS para TS
type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}

let conta: ContaBancaria = {
    saldo: 3456,
    depositar(valor:number): void {
        this.saldo += valor
    }
}

let correntista: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: conta,
    contatos: ['34567890', '98765432']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)

