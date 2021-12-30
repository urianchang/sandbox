/*
Modules:

Modules are executed within their own scope, not in the global scope.
This means that variables, functions, classes, etc. delcared in a
module are not visible outside the module unless they are explicitly
exported using one of the export forms. Conversely, to consume a
variable, function, class, interface, etc. exported from a a different
module, it has to be imported.

Modules are declarative; the relationships between modules are specified
in terms of imports and exports at the file level.
*/
var Utility;
(function (Utility) {
    var useful = (function () {
        function useful() {
        }
        useful.prototype.timesTwo = function (n) {
            return n * 2;
        };
        return useful;
    }());
    Utility.useful = useful;
})(Utility || (Utility = {}));
//: To reference another TS file...
/// <reference path="timesTwo.ts" />
var use = new Utility.useful();
console.log(use.timesTwo(9));
//: To compile...
//: tsc util.ts timesTwo.ts --out util.js
