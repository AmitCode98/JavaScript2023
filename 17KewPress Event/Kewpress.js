document.addEventListener("keypress", kewStor)

// var count = 0;

function kewStor(event) {
    // count++;

    var text = event.key;

    document.getElementById("Target").innerHTML = " You have pressed " + text;
}


var count = 0

document.addEventListener("keypress", function () {
    count++;
    var target = document.getElementById("count")
    // console.log(target)
    target.innerHTML = "Type letter number " + count;

})

// var kews = document.addEventListener("keypress", function (event) {

//     var text = event.key;
//     console.log(text);
//     document.getElementById("Target").innerHTML = " You have pressed " + text;


// })
