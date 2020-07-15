"use strict";
/// <reference path='areaRetang.ts'/>
/// <reference path='areaCirc.ts'/>
const PI = 3.14;
// namespace Geometria {
//   export namespace Area {
//     const PI = 3.1417;
//     console.log('Na area',PI); // res: Na area 3.1417
//     export function circunferencia(raio: number): number {
//       return PI * Math.pow(raio, 2);
//     }
//     export function retangulo(ladoA: number, ladoB: number): number {
//       return ladoA * ladoB;
//     }
//   }
// }
console.log('Fora da area', PI); // res: Na area 3.14
console.log(Geometria.Area.circunferencia(3));
console.log(Geometria.Area.retangulo(4, 6));
