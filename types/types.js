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
