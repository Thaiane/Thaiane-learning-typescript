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