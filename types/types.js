"use strict";
//Typescript infere o tipo da variável e gera erro caso não seja respeitado esse tipo.
//Isso se a declaração da variável já for atribuído um valor
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
//Tipo explícito: agora a tipagem é dinâmica
var minhaIdade;
minhaIdade = 27;
console.log(minhaIdade);
minhaIdade = '27 + 1';
console.log(minhaIdade);
