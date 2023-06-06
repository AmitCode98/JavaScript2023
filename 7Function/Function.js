
//Create a Function
function Add(num1, num2) {

    var result = (num1 + num2)
    document.write(result + "</br>");
}


//Calling this Function

Add(10, 11);
Add(10, 12);
Add(10, 13);



//IIFEs (Immediately Invoked Function Expressions) in JavaScript are self-executing anonymous functions. They are defined and immediately invoked at the same time.


//Systex
// (function() {
//     // Function body
//   })();

//1.
// (function addition(number1, number2) {
//     var output = (number1 + number2)
//     document.write(output + "</br>");
// })(10, 50);

//2.
// (function message(text1) {
//     document.write(text1);
// })("Amit")

//3.
// (function message(text1,text2) {
//     document.write(text1,text2);
// })("Smit", "Amit")

//4.
// (function display() {
//     document.write("Amit");
// })();


//Function Exprection
//A function expression in JavaScript is an alternative way to define a function using an expression syntax. It allows you to assign a function to a variable or pass it as an argument to other functions. Here's an example of a function expression:
var display = function message(msg) {
    document.write(msg)
}
// message("My name is amit")
display("Amit")