export {}
let message = "Welcome back"
console.log(message)

let x = 10;
const y = 20;

let sum;
const title = "Codevolution"

let isBeginner : boolean = true;
let total : number = 0;
let name : string = "tanveer"

let sentance : string = `my name is ${name} and 
i am beginner in TypeScript`;

console.log(sentance)

let n : null = null;
let u : undefined  = undefined;

// let isNew: boolean = null;
// let myName: string = undefined;

let list : number[] = [1,2,3,4];
let list2 : Array<number> = [1,2,3,4];

let person1 : [string,number] = ["tanveer",18];

enum Colour {red=5,green,blue};
let c : Colour = Colour.green;
console.log(c)
let randomalue : any = 10;
randomalue = true;
randomalue = "tanveer";


let a;
a = 10; // noterror
a = true; // noterror

let b = 20;
// b = "hello" error
b = 30 //not error

// multitype vs anytype

let multitype : number | string;
multitype = 20
multitype = "tanveer"

let anytype : any;
anytype = 20
anytype = "tanveer"


function add(num1 : number,num2? : number ) : number//-->means return number 
{
    if(num2){
    return num1 + num2;
    }else{
        return num1
    }
}

console.log(
// add(1,3)
add(1)


)
interface Person{
    fName : string,
    lName ?: string,
}
function fullName(person : Person){
    console.log(`${person.fName} ${person.lName}`)
}
const p = {
    fName : "tanveer",
    lName : "khilji"
}
console.log(
    fullName(p)
)


 class  Employee {
    Name : string
    constructor(name : string){
        this.Name = name
    }
    greet (){
        console.log(`my name is ${this.Name}`)
    }
}

let p1 = new Employee("tanveer");
console.log(p1.Name)
p1.greet()

class Mananger extends Employee{
    constructor(managerName : string){
        super(managerName) 
    }
    delegateWork(){
        console.log("Manager daligating tasks")
    }
}
let m1 = new Mananger("veer")
m1.delegateWork()
m1.greet()
console.log(m1.Name)