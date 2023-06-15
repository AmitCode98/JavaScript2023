

//ES6 (ECMAScript 2015) introduced several enhancements to object literals in JavaScript, making them more powerful and expressive. Here are some key features of ES6 object literals:

//1.Shorthand Property Names:ES6 introduced shorthand property names, allowing you to omit the property name when it matches the variable name being assigned.
//Ex.1
const name = 'John';
const age = 25;

const person = {
    name, // shorthand property name
    age,  // shorthand property name
};

console.log(person);

//2.Computed Property Names:
//Computed property names allow you to use an expression as the property name inside square brackets [].
//The expression within the brackets is evaluated, and its result is used as the property name.

//Ex.2
const prop = 'age';

const person1 = {
    name: 'John',
    [prop]: 25, // computed property name
  };

//3.String concatenation