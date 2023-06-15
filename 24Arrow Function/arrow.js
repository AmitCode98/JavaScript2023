alert("arrow Function");



//Arrow function in Es6

//Arrow Functions:

//Arrow functions provide a shorter syntax for defining functions.
//They are anonymous functions that capture the this value lexically from their surrounding context.
//Arrow functions have a concise syntax and implicit return when using a single expression




//Ex.1
// Traditional function
// function msg() {
//     console.log("This is working")

// }

const msg = () => {
    console.log("This is arrow function");
}

let target = document.querySelector("#btn")
target.addEventListener('click', msg)
// target.style.backgroundColor = "red"

//Ex.2
// Traditional function
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;

