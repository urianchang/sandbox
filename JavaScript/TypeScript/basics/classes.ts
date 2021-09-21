/*
Classes:

When building large scale apps, the object oriented style of
programming is preferred by many developers. TypeScript offers
a class system that is very similar to the one in these languages,
including inheritance, abstract classes, interface implementations,
setters/getters, and more.
*/

class Menu {
    //: Properties
    //: By default they are public, but can also be private or protected.
    items: Array<string>;   // Array of strings
    pages: number;          // Number of pages

    //: Constructor
    constructor(item_list: Array<string>, total_pages: number) {
        // 'this' is mandatory
        this.items = item_list;
        this.pages = total_pages;
    }

    //: Methods
    list(): void {
        console.log("Our menu for today:");
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    }
}

//: Create new instance of the Menu class
var sundayMenu = new Menu(["pancakes", "waffles", "orange juice"], 1);

//: Call list method
sundayMenu.list();

//: Inheritance
class HappyMeal extends Menu {
    //: Properties are inherited

    //: New constructor has to be defined
    constructor(item_list: Array<string>, total_pages: number) {
        //: Call 'super()' to reference parent
        super(item_list, total_pages);
    }

    //: Methods are also inherited from parent
        //: To override the list() function, redefine it
    list(): void{
        console.log("Our special menu for children:");
        for(var i=0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    }
}

//: Create instance of HappyMeal class
var menu_for_children = new HappyMeal(["candy", "drink", "toy"], 1);

//: Log message for HappyMeal
menu_for_children.list();
