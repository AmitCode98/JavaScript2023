alert("Connected");



//ES6 (ECMAScript 2015) introduced several new features and enhancements to the JavaScript language. Here are some key concepts and features introduced in ES6:

//Let and Const: ES6 introduced block-scoped variables with the let and const keywords. let allows you to declare variables with block scope, while const is used for declaring constants that cannot be reassigned.

//Es5
var x = 10;

if (true) {
    var x = 11;


}
console.log(x)//Output:


//Es6: let allows you to declare variables with block scope.
//Variables declared with let are block-scoped, meaning they are accessible within the block in which they are declared (block refers to a pair of curly braces {}).
//let variables are not hoisted to the top of their scope.
//They can be reassigned within their scope, but not redeclared in the same scope.

let y = 10;
y = 45;// Value Reassigen with thair scope.

if (true) {
    let y = 14;
    console.log(y);


}
console.log(y)//Output:10;




//Es6: while const is used for declaring constants that cannot be reassigned.Variables declared with const are block-scoped, similar to let.
//const variables are also not hoisted to the top of their scope.They must be assigned a value at the time of declaration, and once assigned, their value cannot be reassigned. 
//They are constants.const variables maintain their value and reference integrity. For objects and arrays, their properties or elements can still be modified.

const z = 10;
//z = 15;//their value cannot be reassigned. (console give a Typeerror)

if (true) {
    const z = 22;
    console.log(z);

}
console.log(z)

// const c = 80;
// if (true) {
//     c = 11;
//     console.log(c)
// }
// console.log(c)