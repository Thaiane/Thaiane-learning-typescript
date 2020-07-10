"use strict";
// Exercicio 1
const dobro = (valor) => valor * 2;
console.log(dobro(10));
// Exercicio 2
const dizerOla = (nome = "Pessoa") => console.log("Ola, " + nome);
dizerOla();
dizerOla("Anna");
// Exercicio 3
const nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));
// Exercicio 4
const array = [55, 20, ...nums];
console.log(array);
// Exercicio 5
const notas = [8.5, 6.3, 9.4];
const [nota1, nota2, nota3] = notas;
console.log(nota1, nota2, nota3);
console.log(...notas);
// Exercicio 6
const cientista = { primeiroNome: "Will", experiencia: 12 };
const { primeiroNome, experiencia } = cientista;
console.log(primeiroNome, experiencia);
// Exercicio 7: promise usando playground
fetch('https://swapi.dev/api/people/1')
    .then(res => console.log(res))
    .catch(rej => console.log(`Errrooouuuu ${rej}`));
//TODO: O Exercicio 7 está com erro de CORS. Rever novamente mais tarde.
