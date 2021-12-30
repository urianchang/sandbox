/*
Classes:

When building large scale apps, the object oriented style of
programming is preferred by many developers. TypeScript offers
a class system that is very similar to the one in these languages,
including inheritance, abstract classes, interface implementations,
setters/getters, and more.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Menu = (function () {
    //: Constructor
    function Menu(item_list, total_pages) {
        // 'this' is mandatory
        this.items = item_list;
        this.pages = total_pages;
    }
    //: Methods
    Menu.prototype.list = function () {
        console.log("Our menu for today:");
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    };
    return Menu;
}());
//: Create new instance of the Menu class
var sundayMenu = new Menu(["pancakes", "waffles", "orange juice"], 1);
//: Call list method
sundayMenu.list();
//: Inheritance
var HappyMeal = (function (_super) {
    __extends(HappyMeal, _super);
    //: Properties are inherited
    //: New constructor has to be defined
    function HappyMeal(item_list, total_pages) {
        //: Call 'super()' to reference parent
        return _super.call(this, item_list, total_pages) || this;
    }
    //: Methods are also inherited from parent
    //: To override the list() function, redefine it
    HappyMeal.prototype.list = function () {
        console.log("Our special menu for children:");
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    };
    return HappyMeal;
}(Menu));
//: Create instance of HappyMeal class
var menu_for_children = new HappyMeal(["candy", "drink", "toy"], 1);
//: Log message for HappyMeal
menu_for_children.list();
