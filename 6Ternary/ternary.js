//Ternary Operator . (ternary=3)

//The ternary operator in JavaScript is a concise way to write conditional statements. It allows you to assign a value or execute an expression based on a condition. The syntax of the ternary operator is as follows:

//condition ? expression1 : expression2
// Here's how it works:
// The condition is evaluated first.
// If the condition is true, expression1 is executed and becomes the result of the whole expression.
// If the condition is false, expression2 is executed and becomes the result of the whole expression.


//1.
// var num = prompt("Enter a Number")
// num > 0 ? document.write("positive") : document.write("nagative");


//2.
// var number = prompt("Enter a number.");;
// number > 0 ? document.write("Posetive") : number < 0 ? document.write("Nagative") : document.write("Zero");

//3.

var num1 = parseFloat(prompt("Enter first Number."));
var num2 = parseFloat(prompt("Enter second Number."));
var num3 = parseFloat(prompt("Enter third Number."));

num1 > num2 && num1 > num3 ? document.write("Number 1 is big") : num2 > num1 && num2 > num3 ? document.write("Number 2 is big") : num1 === num2 && num1 === num3 ? document.write("num1 and num2 and num3 are same") : document.write("Number 3 is big")