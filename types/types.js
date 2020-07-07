"use strict";
/*Typescript infere o tipo da variável e gera erro caso não seja respeitado esse tipo.
Isso se a declaração da variável já for atribuído um valor.
Entretanto, i ideal é ter a tipagem explícita, ou seja, declarada no código após a variável `: tipo` */
//string
var nome = 'Thai';
console.log(nome);
// nome = 1
//number
var irmaos = 2;
console.log(irmaos);
// irmaos = 'Kamila e Felipe'
//bolean
var possuiHabilidades = true;
console.log(possuiHabilidades);
// possuiHabilidades = 1
//Declaração sem atribuição
var minhaIdade;
minhaIdade = 27;
console.log(minhaIdade);
//array
var hobbies = ['violão', 4];
console.log(hobbies);
//Tuplas: define quantidade e tipo fixo (estrutura typescript)
var endereco = ['Av. Valparaiso', 1010];
console.log(endereco);
//enum (estrutura do typescript)
var Cor;
(function (Cor) {
    Cor[Cor["Azul"] = 0] = "Azul";
    Cor[Cor["Amarelo"] = 1] = "Amarelo";
    Cor[Cor["Verde"] = 2] = "Verde";
})(Cor || (Cor = {}));
console.log(Cor.Amarelo);
//any: permite qualquer valor, tipagem fraca e dinâmica. Usado bastante na graduação de JS para TS
var carro = 'fusca';
console.log(carro);
carro = { modelo: 'fusca', ano: 92 };
console.log(carro);
//Funções
function meunome() {
    return 'Thai';
}
console.log(meunome());
function calc(num1, num2) {
    return num1 * num2;
}
console.log(calc(2, 4));
//Tipar como função
var calculo;
calculo = calc;
console.log(typeof calculo);
// Objetos
var usuario = {
    nome: 'Thai',
    idade: 27
};
console.log(usuario);
// Desafio
function pontoRegistrado(hora) {
    return (hora <= 8) ? 'ponto normal' : 'forado horário';
}
var funcionario = {
    supervisores: ['Daiane', 'Laiane', 'Raiane'],
    ponto: pontoRegistrado
};
console.log(funcionario);
console.log(funcionario.ponto(8));
