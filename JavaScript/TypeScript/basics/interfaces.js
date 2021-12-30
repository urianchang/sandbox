/*
Interfaces are used to type-check whether an object fits a certain
structure. By defining an interface we can name a specific combination
of variables, making sure that they will always go together.
*/
//: We tell our function to expect an object that fulfills the Food interface
function speak(food) {
    console.log("Our " + food.name + " has " + food.calories + " calories.");
}
//: Define object that has all properties of Food interface
var ice_cream = {
    name: "ice cream",
    calories: 200
};
speak(ice_cream);
