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

module Utility {

    export class useful {
        timesTwo(n: number) {
            return n * 2;
        }
    }

}
