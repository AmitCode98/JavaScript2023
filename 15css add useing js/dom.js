
//In JavaScript, the classList property is a read-only property of an element that returns a live DOMTokenList collection of the class attributes of the element. It provides methods to add, remove, toggle, and check for the presence of CSS classes on the element.

//Here are some commonly used methods of the classList object:

//add(className): Adds the specified class to the element.
//remove(className): Removes the specified class from the element.
//toggle(className): Toggles the presence of the specified class. If the class is present, it removes it, and if it's 
//not present, it adds it.
//contains(className): Checks if the element has the specified class. Returns true if the class is present, and false 
//otherwise.

//Type:1.
// function addStyle() {
//     var aStyle = document.querySelector(".add");
//     aStyle.style.color = "red"


// }

// function removeStyle() {
//     var rStyle = document.querySelector(".add");
//     rStyle.style.removeStyle;
// }



//Type:2
function addStyle() {
    var aStyle = document.querySelector(".add");
    aStyle.classList.add("design")
}


function removeStyle() {
    var rStyle = document.querySelector(".add");
    rStyle.classList.remove("design");
}
function toggleStyle() {
    var rStyle = document.querySelector(".add");
    rStyle.classList.toggle("design");
}


