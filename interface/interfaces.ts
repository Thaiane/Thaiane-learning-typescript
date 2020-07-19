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

// Herança de interfaces
interface A {
  a(): void
}

interface B {
  b(): void
}

interface ABC extends A, B {
  c(): void
}

class RealA implements A {
  a(): void {}
}

class RealAB implements A, B {
  a(): void {}
  b(): void {}
}

class RealABC implements ABC {
  a(): void {}
  b(): void {}
  c(): void {}
}

abstract class AbsABD implements A, B {
  a(): void {}
  b(): void {}
  abstract d(): void
}
