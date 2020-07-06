//Typescript infere o tipo da variável e gera erro caso não seja respeitado esse tipo.
//Isso se a declaração da variável já for atribuído um valor

//string
let nome = 'Thai'
console.log(nome)
// nome = 1

//number
let irmaos = 2
console.log(irmaos)
// irmaos = 'Kamila e Felipe'

//bolean
let possuiHabilidades= true
console.log(possuiHabilidades)
// possuiHabilidades = 1


//Tipo explícito: agora a tipagem é dinâmica
let minhaIdade
minhaIdade = 27
console.log(minhaIdade)
minhaIdade = '27 + 1'
console.log(minhaIdade)