"use strict";
const PI = 3.14;
var Area;
(function (Area) {
    const PI = 3.1417;
    console.log('Na area', PI); // res: Na area 3.1417
})(Area || (Area = {}));
console.log('Fora da area', PI); // res: Na area 3.14
