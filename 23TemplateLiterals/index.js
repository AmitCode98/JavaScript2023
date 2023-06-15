alert("connected");


//?Template Literals:

//Template literals, also known as template strings, are a feature introduced in ES6 (ECMAScript 2015) that provide an enhanced way of working with strings in JavaScript. Template literals are denoted by backticks (`) instead of single or double quotes. They offer several advantages over traditional string literals.



//Ex.1
//?String Interpolation:

//Template literals allow you to easily interpolate variables and expressions into strings using ${...}.
//Variables or expressions within the ${...} placeholders are evaluated and their values are inserted into the resulting string.

let nam = "Amit"
let age = 24;
// const result = ("Hello my name is " + nam + " and my age is " + age + ".")//Es5
const result = (`Hello my name is ${nam} and my age is ${age}`);//Es6
console.log(result);

//Ex.2
//?Multiline Strings:
//Template literals preserve newlines and indentation, making it convenient to create multiline strings without the need for escape characters or concatenation.
let multiline = `This is multiline string.design.
     It spane multiple lines.
Line breaks are preserved.`

console.log(multiline);

//Ex.3
//?Expression Evaluation:
//Template literals can contain expressions within ${...} placeholders. These expressions are evaluated and their results are included in the string.
//Expressions can include arithmetic operations, function calls, or any valid JavaScript code.
const x = 10;
const y = 5;

const result1 = `The sum of the ${x} and ${y} is ${x + y}`
console.log(result1);