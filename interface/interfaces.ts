interface Humano {
  nome: string,
  idade?: number,
  [prop: string]: any,
  saudar(nome: string): void
}

namespace saudar {
  export function saudar(pessoa: Humano): void {
    console.log("Oi", pessoa.nome)
  }
}

const pessoa: Humano = {
  nome: "Thai",
  idade: 28,
  altura: 1.6,
  saudar(nome: string) {
    console.log("Oii", this.nome)
  }
}

saudar.saudar(pessoa)