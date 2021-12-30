//: Very distinctive feature of TypeScript is the support of static typing.
var burger = 'hamburger', // string
calories = 300, // numeric
tasty = true; // boolean
//: Alternatively, you can omit the type declaration: var burger = 'hamburger';
//: Function expects string and integer.
//: It doesn't return anything so the type of the function itself is void.
function speak(food, energy) {
    console.log("Our " + food + " has " + energy + " calories.");
}
speak(burger, calories);
