"use strict";
// Sem Generics
function echoSemGenerics(objeto) {
    return objeto;
}
console.log(echoSemGenerics('Thai').length);
console.log(echoSemGenerics(28).length); // resulta em undefined e perdemos a validação do tipo por ser any
console.log(echoSemGenerics({ nome: 'Thai', idade: 28 }));
// Com Generics
function echoComGenerics(objeto) {
    return objeto;
}
console.log(echoComGenerics('Thai').length); //Podemos deiaxr explicito o tipo T na hora do uso
console.log(echoComGenerics(28)); // erro é validado pelo typescript antes da execução
console.log(echoComGenerics({ nome: 'Thai', idade: 28 })); // TS infere o tipo de T conforme o tipo do objeto passado para ele
const avaliaçoes = [4, 4, 5];
// avaliaçoes.push('3') // erro porque nao é number
avaliaçoes.push(4);
console.log(avaliaçoes);
// Array
function imprimir(args) {
    args.forEach(elemento => console.log(elemento));
}
imprimir([1, 2, 3]);
imprimir([1, 2, 3]);
imprimir(['Ana', 'Bia', 'Carlos']);
imprimir([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Cicrano', idade: 23 },
    { nome: 'Beltrano', idade: 24 }
]);
imprimir([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Cicrano', idade: 23 },
    { nome: 'Beltrano', idade: 24 }
]);
const chamarEcho = echoComGenerics;
console.log(chamarEcho('Alguma coisa'));
// Class com Generics
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
// console.log(new OperacaoBinaria('Bom ', 'dia').executar())
