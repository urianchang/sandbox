//: To reference another TS file...
/// <reference path="timesTwo.ts" />
var use = new Utility.useful();
console.log(use.timesTwo(9));

//: To compile...
//: tsc util.ts timesTwo.ts --out util.js
