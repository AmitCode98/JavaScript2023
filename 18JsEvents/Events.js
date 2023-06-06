
// java script events 

//In JavaScript, an event can be e.g. a button click or a mouse hover over. It is important to respond to the events e.g. by showing a modal when a button is clicked.
//Today you will learn the two ways to handle events in JavaScript in a nutshell. In addition, I will discuss what is the small difference between the two and which one should you use.
//In JavaScript, you can handle events in one of two possible ways:

//Event handlers
//Event listeners


//Event Handlers
//To use an event handler, use one of the EventHandler properties of an object. Here is an example of using one called onclick.


//1.
// var target = document.querySelector(".btn")
// target.onclick = mes;

// function mes() {
//     alert("Button was Clicked Now")
// }

//2.
// var target = document.querySelector(".btn")
// target.onclick = () => {
//     alert("arrow Function alert")
// }








//Event listeners
//Sysntex: element.addEventListener("event", functionName);  
//:Note: Do not use any prefix such as "on" with the parameter value or event name. For example, Use "click" instead of using "onclick".

//Ex.1
var nTarget = document.querySelector(".btn")
nTarget.addEventListener("click", message)//here not use first parentheses() to call a function 

function message() {
    alert("Button was Clicked Now......")
}

//Ex.2 Using Anonymous function
// var nTarget = document.querySelector(".btn")
// nTarget.addEventListener("click", function () {
//     alert("Now its working ")
// })

//1.click: Triggers when an element is clicked.
//element.addEventListener('click', function() {
  // Code to be executed when the element is clicked
//});
//2.dblclick: Triggers when an element is double-clicked.
//element.addEventListener('dblclick', function() {
  // Code to be executed when the element is double-clicked
//});