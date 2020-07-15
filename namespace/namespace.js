"use strict";
const PI = 3.14;
var Geometria;
(function (Geometria) {
    let Area;
    (function (Area) {
        const PI = 3.1417;
        console.log('Na area', PI); // res: Na area 3.1417
        function circunferencia(raio) {
            return PI * Math.pow(raio, 2);
        }
        Area.circunferencia = circunferencia;
        function retangulo(ladoA, ladoB) {
            return ladoA * ladoB;
        }
        Area.retangulo = retangulo;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
console.log('Fora da area', PI); // res: Na area 3.14
console.log(Geometria.Area.circunferencia(5));
console.log(Geometria.Area.retangulo(2, 5));
