//: Very distinctive feature of TypeScript is the support of static typing.

var burger: string = 'hamburger',   // string
    calories: number = 300,     // numeric
    tasty: boolean = true;      // boolean

//: Alternatively, you can omit the type declaration: var burger = 'hamburger';

//: Function expects string and integer.
    //: It doesn't return anything so the type of the function itself is void.
function speak(food: string, energy: number): void {
    console.log("Our " + food + " has " + energy + " calories.");
}

speak(burger, calories);
