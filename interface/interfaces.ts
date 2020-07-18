interface Humano {
  nome: string
}

namespace saudar {
  export function saudar(pessoa: Humano): void {
    console.log("Oi", pessoa.nome)
  }
}

const pessoa = {
  nome: "Thai",
  idade: 28
}

saudar.saudar(pessoa)