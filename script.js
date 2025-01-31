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
