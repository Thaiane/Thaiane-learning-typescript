// Sem Generics
function echoSemGenerics(objeto: any) {
    return objeto;
}

console.log(echoSemGenerics('Thai').length);
console.log(echoSemGenerics(28).length) // resulta em undefined e perdemos a validação do tipo por ser any
console.log(echoSemGenerics({ nome: 'Thai', idade: 28}))

// Com Generics

function echoComGenerics<T>(objeto: T): T {
    return objeto;
}

console.log(echoComGenerics<string>('Thai').length); //Podemos deiaxr explicito o tipo T na hora do uso
console.log(echoComGenerics(28)) // erro é validado pelo typescript antes da execução
console.log(echoComGenerics({ nome: 'Thai', idade: 28})) // TS infere o tipo de T conforme o tipo do objeto passado para ele

const avaliaçoes: Array<number> = [4, 4, 5]

// avaliaçoes.push('3') // erro porque nao é number
avaliaçoes.push(4)

console.log(avaliaçoes)

// Array
function imprimir<T>(args: T[]) {
    args.forEach(elemento => console.log(elemento))
}

imprimir([1, 2, 3])
imprimir<number>([1, 2, 3])
imprimir<string>(['Ana', 'Bia', 'Carlos'])
imprimir<{ nome: string, idade: number }>([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Cicrano', idade: 23 },
    { nome: 'Beltrano', idade: 24 }
])

// Tipo objeto
type Aluno = { nome: string, idade: number }
imprimir<Aluno>([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Cicrano', idade: 23 },
    { nome: 'Beltrano', idade: 24 }
])

// Tipo Genérico
type Echo = <T>(data: T) => T
const chamarEcho: Echo = echoComGenerics
console.log(chamarEcho<string>('Alguma coisa'))

// Class com Generics
abstract class OperacaoBinaria<T, R> {
    constructor(public operando1: T,
                public operando2: T) {}

    abstract executar(): R
}

// console.log(new OperacaoBinaria('Bom ', 'dia').executar())

