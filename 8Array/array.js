

// Array in javaScript

//In JavaScript, an array is a data structure that allows you to store multiple values in a single variable. Arrays can hold any type of value, including numbers, strings, objects, and even other arrays. They are one of the fundamental data structures in JavaScript and are commonly used for organizing and manipulating collections of data.



//1.
// var fruits = ["apple", "banana", "orange"];
// document.write(fruits[0] + "<br/>");
// document.write(fruits.length);

//2.
//Some commonly used array methods include push(), pop(), length, forEach(), indexOf(), and splice().

// fruits.push("Lichu");
// document.write(fruits);

//3.
//In this example, the pop() method is called on the fruits array, and the last element, "orange", is removed and stored in the lastFruit variable. The pop() method returns the removed element,
// fruits.pop()
// document.write(fruits);

// var fruits = ["apple", "banana", "orange"];
// var lastFruit = fruits.pop();

// console.log(lastFruit); // Output: "orange"
// console.log(fruits); // Output: ["apple", "banana"]

//4.
// var name1 = ["Amit", "Sachin", "Sayan"];
// var name2 = ["Ranit", "Subho", "Kunal"];

// var allNames = name1.concat(name2);
// document.write(allNames);

//5.
// console.log(name1);
// var find = name1.indexOf("Sayan");
// console.log(find);


//5.Loop in Array

// var num = [10, 20, 30, 40, 50]

// for (i = 0; i <= 4; i++) {
//     console.log(num[i]);
// }


// var num = new Array()
// for (i = 0; i < 5; i++) {
//     num[i] = parseFloat(prompt("Enter a Number"));
// }
// console.log(num)


//6.


function highScore(reciveScore) {
    // console.log(reciveScore);
    // console.log(reciveScore[0]);
    let max = reciveScore[0]
    for (let x = 1; x < reciveScore.length; x++) {
        if (max < reciveScore[x]) {
            max = reciveScore[x]
        }

    }
    return max;

  
}
var score = [11, 23, 5, 76, 32, 81, 35,89]
var HighestNumber = highScore(score);
console.log(HighestNumber);



