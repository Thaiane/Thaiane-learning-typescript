"use strict";
var Geometria;
(function (Geometria) {
    let Area;
    (function (Area) {
        const PI = 3.1417;
        console.log('Na area', PI); // res: Na area 3.1417
        function retangulo(ladoA, ladoB) {
            return ladoA * ladoB;
        }
        Area.retangulo = retangulo;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
