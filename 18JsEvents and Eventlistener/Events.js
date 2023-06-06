
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

//2.Let’s see what happens if you try to add two onclick event handlers to the same object:
// var target = document.querySelector(".btn")
// target.onclick = () => {
//     console.log("First event handeler")
// }

// var target = document.querySelector(".btn")
// target.onclick = () => {
//     console.log("Second event handelar")
// }
//As an object can only have one event handler for each event type, the first onclick handler gets overridden by the second. This results in an output:Second event handler







//Event listeners
//Sysntex: element.addEventListener("event", functionName);
//:Note: Do not use any prefix such as "on" with the parameter value or event name. For example, Use "click" instead of using "onclick".

//Let’s repeat this experiment by using two "click" event listeners:

var target = document.querySelector(".btn")
target.addEventListener("click", function () {
    console.log("First event listener")

})
target.addEventListener("click", function () {

    console.log("Second event listener")

})

//It is okay to have multiple event listeners of the same event per object. Thus, both of the listeners are triggered once a button is clicked:First event listener
                         //Second event listener

//You can only have one event handler for a specific event type, but you can add multiple event listeners for it.



//Ex.1
// var nTarget = document.querySelector(".btn")
// nTarget.addEventListener("click", message)//here not use first parentheses() to call a function

// function message() {
//     alert("Button was Clicked Now......")
// }

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

//3.mouseenter: Triggers when the mouse pointer enters an element.
//element.addEventListener('mouseenter', function() {
  // Code to be executed when the mouse pointer enters the element
//});

//4.mouseleave: Triggers when the mouse pointer leaves an element.
//element.addEventListener('mouseleave', function() {
  // Code to be executed when the mouse pointer leaves the element
//});

//5.mouseover: Triggers when the mouse pointer moves over an element.
//element.addEventListener('mouseover', function() {
  // Code to be executed when the mouse pointer moves over the element
//});

//6.mouseout: Triggers when the mouse pointer moves out of an element.
//document.addEventListener('keydown', function(event) {
  // Code to be executed when a key is pressed down
//});

//7.keydown: Triggers when a key is pressed down.
//document.addEventListener('keydown', function(event) {
  // Code to be executed when a key is pressed down
//});

//8.keyup: Triggers when a key is released.
//document.addEventListener('keyup', function(event) {
  // Code to be executed when a key is released
//});

//9.keypress: Triggers when a key is pressed and released.
//document.addEventListener('keypress', function(event) {
    // Code to be executed when a key is pressed and released
  //});

//10.focus: Triggers when an element receives focus.
//element.addEventListener('focus', function() {
  // Code to be executed when the element receives focus
//});

//11.blur: Triggers when an element loses focus.
//element.addEventListener('blur', function() {
  // Code to be executed when the element loses focus
//});

//12.submit: Triggers when a form is submitted.
//form.addEventListener('submit', function(event) {
  // Code to be executed when the form is submitted
  //event.preventDefault(); // Prevent the form from submitting
//});

//13.reset: Triggers when a form is reset.
//form.addEventListener('reset', function() {
  // Code to be executed when the form is reset
//});

//14.change: Triggers when the value of an element changes.
//element.addEventListener('change', function() {
  // Code to be executed when the value of the element changes
//});

//15.input: Triggers when the user interacts with an input element.
//input.addEventListener('input', function() {
  // Code to be executed when the user interacts with the input element
//});

//16.select: Triggers when text is selected in an input element.
//input.addEventListener('select', function() {
  // Code to be executed when text is selected
//});


