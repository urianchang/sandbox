/*
Generics:

Generics are templates that allow the same function to
accept arguments of various different types. Creating
reusable components using generics is better than using
the 'any' data type, as generics preserve the types of the
variables that go in and out of them.
*/

//: <T> after function name symbolizes a generic function
//: When function is called, 'T' will be replaced with provided type
function genericFunc<T>(argument: T): T[] {
    var arrayOfT: T[] = [];     // Create empty array of type T
    arrayOfT.push(argument);
    return arrayOfT;
}

var arrayFromString = genericFunc<string>("beep");
console.log(arrayFromString[0]);    // "beep"
console.log(typeof arrayFromString[0])  // string

var arrayFromNumber = genericFunc(42);
console.log(arrayFromNumber[0]);    // 42
console.log(typeof arrayFromNumber[0]); // number
