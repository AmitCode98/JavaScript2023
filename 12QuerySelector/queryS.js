//Query Selector


//In JavaScript, the querySelector method is used to select and retrieve the first element within the document that matches a specified CSS selector. It is part of the Document Object Model (DOM) API and is commonly used to manipulate and interact with HTML elements on a web page.

document.querySelector("#Heading").innerHTML = "This is new Heading. target by id selector";// id selector 
document.querySelector(".text").innerHTML = "This is update text. target by class selector"//class selector
document.querySelector("span").innerHTML = " This is new text . target by tag selector"// tag selector

//Ex.1
// Select the first element with the class "my-class"
var element = document.querySelector(".my-class");

// Manipulate the selected element
element.style.color = "red";
element.textContent = "Hello, World!";

//Ex.2
// document.querySelector(".list-item h1").innerHTML = "Target complete";

// Find the <h1> element using querySelector
var headingElement = document.querySelector(".list-item h1");

// Update the text content of the <h1> element
headingElement.textContent = "Target complete";

//Update the text content of the element using querySelector
headingElement.textContent="Taeget Complete";
