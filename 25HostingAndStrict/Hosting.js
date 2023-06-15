
//Hosting and strict mode

alert("Hosting and strict mode");

//Hosting
//?Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration. 

// using test before declaring
//Ex.
console.log(test)// undefined
var test;

//The above program works and the output will be undefined. The above program behaves as
// using test before declaring
//Ex.
var test;
console.log(test); // undefined
//Since the variable test is only declared and has no value, undefined value is assigned to it.


//Variable Hosting
//?In terms of variables and constants, keyword var is hoisted and let and const does not allow hoisting.

// program to display value
//Ex.
// a = 5;
// console.log(a);
// var a; // 5

//?In the above example, variable a is used before declaring it. And the program works and displays the output 5. The program behaves as:
// program to display value
//Ex.
// var a;
// a = 5;
// console.log(a); // 5

//?In JavaScript, initializations are not hoisted. For example,
// program to display value
//Ex.
// console.log(a);//undefined
// var a = 5;

//The above program behaves as:
//?Only the declaration is moved to the memory in the compile phase. Hence, the value of variable a is undefined because a is printed without initializing it
//Ex.
var a;
console.log(a);//undefined
a = 5;


//Also, when the variable is used inside the function, the variable is hoisted only to the top of the function. For example
//Ex.

var a = 4;
function greet() {
    b = `hello`
    console.log(b)
    var b;
}
greet();//hello
// console.log(b);//Uncaught ReferenceError: b is not defined;
//?In the above example, variable b is hoisted to the top of the function greet and becomes a local variable. Hence b is only accessible inside the function. b does not become a global variable.



//*If a variable is used with the let keyword, that variable is not hoisted. For example,
// program to display value
// b = 5;
// console.log(b);
// let b; // error:  (Uncaught ReferenceError: Cannot access 'a' before initialization)
//*While using let, the variable must be declared first.



//! Function Hoisting
//A function can be called before declaring it. For example,
// p();

// function p() {
//     console.log("Function hosting");
// }
//In the above program, the function greet is called before declaring it and the program shows the output. This is due to hoisting.

//! However, when a function is used as an expression, an error occurs because only declarations are hoisted. For example;

// p();
// const p = () => {
//     console.log(`Hosting in function`);//Uncaught ReferenceError: greet is not defined

// }

p();
var p = () => {
    console.log(`Hosting in function`);//Uncaught TypeError: p is not a function

}

