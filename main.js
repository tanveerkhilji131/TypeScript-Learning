let message = "Welcome back";
console.log(message);
let x = 10;
const y = 20;
let sum;
const title = "Codevolution";
let isBeginner = true;
let total = 0;
let name = "tanveer";
let sentance = `my name is ${name} and 
i am beginner in TypeScript`;
console.log(sentance);
let n = null;
let u = undefined;
// let isNew: boolean = null;
// let myName: string = undefined;
let list = [1, 2, 3, 4];
let list2 = [1, 2, 3, 4];
let person1 = ["tanveer", 18];
var Colour;
(function (Colour) {
    Colour[Colour["red"] = 5] = "red";
    Colour[Colour["green"] = 6] = "green";
    Colour[Colour["blue"] = 7] = "blue";
})(Colour || (Colour = {}));
;
let c = Colour.green;
console.log(c);
let randomalue = 10;
randomalue = true;
randomalue = "tanveer";
let a;
a = 10; // noterror
a = true; // noterror
let b = 20;
// b = "hello" error
b = 30; //not error
// multitype vs anytype
let multitype;
multitype = 20;
multitype = "tanveer";
let anytype;
anytype = 20;
anytype = "tanveer";
function add(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
console.log(
// add(1,3)
add(1));
function fullName(person) {
    console.log(`${person.fName} ${person.lName}`);
}
const p = {
    fName: "tanveer",
    lName: "khilji"
};
console.log(fullName(p));
class Employee {
    Name;
    constructor(name) {
        this.Name = name;
    }
    greet() {
        console.log(`my name is ${this.Name}`);
    }
}
let p1 = new Employee("tanveer");
console.log(p1.Name);
p1.greet();
class Mananger extends Employee {
    constructor(managerName) {
        super(managerName);
    }
    delegateWork() {
        console.log("Manager daligating tasks");
    }
}
let m1 = new Mananger("veer");
m1.delegateWork();
m1.greet();
console.log(m1.Name);
export {};
