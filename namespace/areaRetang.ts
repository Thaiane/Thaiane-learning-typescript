namespace Geometria {
  export namespace Area {
    const PI = 3.1417;

    console.log('Na area',PI); // res: Na area 3.1417

    export function retangulo(ladoA: number, ladoB: number): number {
      return ladoA * ladoB;
    }
  }
}