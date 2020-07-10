"use strict";
/*Typescript infere o tipo da variável e gera erro caso não seja respeitado esse tipo.
Isso se a declaração da variável já for atribuído um valor.
Entretanto, i ideal é ter a tipagem explícita, ou seja, declarada no código após a variável `: tipo` */
//string
let nome = 'Thai';
console.log(nome);
// nome = 1
//number
let irmaos = 2;
console.log(irmaos);
// irmaos = 'Kamila e Felipe'
//bolean
let possuiHabilidades = true;
console.log(possuiHabilidades);
// possuiHabilidades = 1
//Declaração sem atribuição
let minhaIdade;
minhaIdade = 27;
console.log(minhaIdade);
//array
let hobbies = ['violão', 4];
console.log(hobbies);
//Tuplas: define quantidade e tipo fixo (estrutura typescript)
let endereco = ['Av. Valparaiso', 1010];
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
let carro = 'fusca';
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
let calculo;
calculo = calc;
console.log(typeof calculo);
// Objetos
let usuario = {
    nome: 'Thai',
    idade: 27
};
console.log(usuario);
// Desafio
function pontoRegistrado(hora) {
    return (hora <= 8) ? 'ponto normal' : 'forado horário';
}
let func = {
    supervisores: ['Daiane', 'Laiane', 'Raiane'],
    ponto: pontoRegistrado
};
console.log(func);
console.log(func.ponto(8));
// Union types
let nota = 10;
//Never
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: null,
    validarProduto() {
        if (!this.nome) {
            falha('Precisa ter nome');
        }
    }
};
let conta = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: conta,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
