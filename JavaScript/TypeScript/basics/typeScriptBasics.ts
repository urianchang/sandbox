//: TypeScript Basics

//: 3 basic types in TypeScript
var isDone : boolean = false;
var lines : number = 42;
var name2 : string = "Anders";

//: Use "Any" if it's impossible to know
var notSure : any = 4;

//: For collections, there are typed arrays and generic arrays
var list : number[] = [1, 2, 3];    // typed
var list : Array<number> = [1, 2, 3]; // generic

//: For enumerations:
enum Color {Red, Green, Blue};
var c: Color = Color.Green;

//: Use "void" in special case of a function returning nothing
function bigHorribleAlert(): void {
    alert("I'm a little annoying box!");
}

//: Functions are first-class citizens, support the lambda "fat arrow" syntax and use type inference
    //: Following are equivalent: same signature inferred by compiler and same JS will be emitted
var f1 = function(i: number): number { return i * i; }
    //: Return type inferred
var f2 = function(i: number) { return i * i; }
    //: Arrow syntax
var f3 = (i: number): number => { return i * i; }
    //: Arrow syntax with return type inferred
var f4 = (i: number) => { return i * i; }
    //: Arrow syntax with return type inferred, braceless = no return keyword needed
var f5 = (i: number) => i * i;

//: Interfaces are structural, anything that has properties is compliant with the interface
interface Person {
    name: string;
    //: Optional properties are marked with a "?"
    age?: number;
    //: Functions
    move(): void;
}

//: Object that implements the "Person" interface can be treated as a Person with name and move properties
var p: Person = { name: "Bobby", move: () => {} };
//: Objects that have the optional property:
var validPerson: Person = { name: "Bobby", age: 42, move: () => {} };
//: This is not a Person because age isn't a number
// var invalidPerson: Person = { name: "Bobby", age: true };

//: Interfaces can also describe a function type
interface SearchFunc {
    (source: string, subString: string): boolean;
}

//: Only the parameters' types are important, names are not.
var mySearch: SearchFunc;
mySearch = function(src: string, sub: string) {
    return src.search(sub) != -1;
}

//: Classes - members are public by default
class Point {
    //: Properties
    x: number;

    //: Constructor - the public/private keywords in this context will generate the boiler plate
    //  code for the property and initialization in the constructor.
    constructor(x: number, public y: number = 0) {
        this.x = x;
    }

    //: Functions
    dist() { return Math.sqrt(this.x * this.x + this.y * this.y); }

    //: Static members
    static origin = new Point(0, 0);
}

var p1 = new Point(10, 20);
var p2 = new Point(25); // y will be 0

//: Inheritance
class Point3D extends Point {
    constructor(x: number, y: number, public z: number = 0) {
        super(x, y); // Explicit call to the super class constructor is mandatory
    }

    //: Overwrite the dist() function
    dist() {
        var d = super.dist();
        return Math.sqrt(d * d + this.z * this.z);
    }
}

//: Modules, "." can be used as a separator for sub modules
module Geometry {
    export class Square {
        constructor(public sideLength: number = 0) {}
        area() { return Math.pow(this.sideLength, 2); }
    }
}

var s1 = new Geometry.Square(5);

//: Local alias for referencing a module
import G = Geometry;

var s2 = new G.Square(10);

//: Generics
    //: Classes
class Tuple<T1, T2> {
    constructor(public item1: T1, public item2: T2) {}
}
    //: Interfaces
interface Pair<T> {
    item1: T;
    item2: T;
}
    //: Functions
var pairToTuple = function<T>(p: Pair<T>) {
    return new Tuple(p.item1, p.item2);
};

var tuple = pairToTuple({ item1: "hello", item2: "world" });

//: Including references to a definition file: <reference path="jquery.d.ts" />

//: Template Strings
var name1 = 'Tyrone';
var greeting = `Hi ${name1}, how are you?`
    //: Multiline strings with template strings
var multiline = `This is an example
of a multiline string`;
