


// var myVar = document.querySelector(".button");
// myVar.addEventListener('click', myFun)

// function myFun() {
//     alert("Thanks for chous us!")
// }



var target = document.querySelector(".heading");

target.addEventListener('mouseover', function () { //using anonymous Function
    target.classList.add("mOverd")
})

target.addEventListener('mouseout', removeStyle) //using Normal Function





// function addStyle() {
//     target.classList.add("mOverd")


// }


function removeStyle() {
    target.classList.remove("mOverd")
    // alert("Css class was added.")

}









