class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    dance(){
        console.log(this.name + " is dancing");
    }
}

var bran = new Person("Bran");
bran.dance();

class AwesomePerson extends Person {
    //: Don't have to redeclare constructor
    dance() {
        console.log("So awesome!");
        super.dance();
    }
}

var robb = new AwesomePerson("Rob");
robb.dance();
