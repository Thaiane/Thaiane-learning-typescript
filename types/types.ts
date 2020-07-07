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
