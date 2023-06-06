
function message() {
    alert("Button is Clicked. Its Working");
}

function save() {
    var notifiction = document.querySelector("#msg");
    notifiction.innerHTML = "Thanks for save this page";
}
function del() {
    var notifiction = document.querySelector("#msg");
    notifiction.innerHTML = "Opps deletes this page";
}

function boy(){
    var img=document.querySelector("#img");
    img.src='images/boy.jpg'
}
function girl(){
    var img=document.querySelector("#img");
    img.src='images/girl.jpg'
}