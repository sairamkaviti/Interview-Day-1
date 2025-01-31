// function scope :
function checking() {
    var x = "fns varibale";
    if (true) {
        console.log(x);
    }
    console.log(x)
}
checking();

// block scope :
function blockScope() {
    if (true) {
        let y = "sai";
        const z = "suppuuu";
        console.log(y);
        console.log(z)

    }
    //  console.log(y); not accessable here beacause block scope;
    //  console.log(z);
}
blockScope();



// dbw null and undefined :

let unVariable;
console.log(unVariable); // o/p:undefined;

let nullVariable = null;
console.log(nullVariable);// o/p:null;

// switch case :

let day = "monday";
switch (day){
    case "sunday":
        console.log("Jesus");
        
        break;
    case "tuesday":
        console.log("Jai Hanuman");
       
        break;
    default: console.log("Hara Hara Shiva");
}

// typeof operator :

let a1 = +"10";
let a2 = 20;
let a3 = true;
let a4 = { name: "sai", age: 28 };
let a5 = [11, 22, 33];
let a6 = unVariable;
let a7 = nullVariable;
console.log(typeof a1);
console.log(typeof a2);
console.log(typeof a3);
console.log(typeof a4);
console.log(typeof a5);
console.log(typeof a6);
console.log(typeof a7);

console.log([]+ {})