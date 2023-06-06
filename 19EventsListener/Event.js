
var len = document.querySelectorAll(".btn").length;
console.log(len);

for (var i = 0; i < len; i++) {

    var button = document.querySelectorAll(".btn")[i]
    // console.log([i])
    button.addEventListener("click", function () {
        // console.log([i])
        var text = this.innerHTML;
        document.querySelector("#bName").innerHTML = text + " is clicked"
    })

}
