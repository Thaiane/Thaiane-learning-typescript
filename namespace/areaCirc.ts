namespace Geometria {
  export namespace Area {
    const PI = 3.1417;

    console.log('Na area',PI); // res: Na area 3.1417

    export function circunferencia(raio: number): number {
      return PI * Math.pow(raio, 2);
    }
  }
}