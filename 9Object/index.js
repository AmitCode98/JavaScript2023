//Object in javaScript


// In JavaScript, an object is a data type that represents a collection of key-value pairs. It allows you to store and organize data in a structured manner.

// var person = {
//     name: "John",
//     age: 30,
//     city: "New York",
//     language: ["Bengali", "Hindi", "English"]
// };

// document.write(person.language)// Output:"Bengali", "Hindi", "English"
// console.log(person.name); // Output: "John"
// console.log(person["age"]); // Output: 30



// Constructor in java Script

//In JavaScript, a constructor is a special function that is used to create and initialize objects of a specific class or type. It is typically defined as a regular function with the same name as the class it constructs. Constructors are invoked using the 'new' keyword followed by the constructor function.

function Persone(name, age, city, language) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.language = language;

    //adding function inside constructor

    this.display = function () {
        console.log(this.name);
        console.log(this.age);
        console.log(this.city);
        console.log(this.language);

    }


}

var person1 = new Persone("Amit", 24, "Kolkata", ["Bengali", "Hindi", "English"])
var person2 = new Persone("Sumit", 22, "Purulia", ["Bengali", "Hindi"])

// console.log(person2.language);

person1.display();