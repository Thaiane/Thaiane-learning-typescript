"use strict";
var saudar;
(function (saudar_1) {
    function saudar(pessoa) {
        console.log("Oi", pessoa.nome);
    }
    saudar_1.saudar = saudar;
})(saudar || (saudar = {}));
const pessoa = {
    nome: "Thai",
    idade: 28,
    altura: 1.6,
    saudar(nome) {
        console.log("Oii", this.nome);
    }
};
saudar.saudar(pessoa);
