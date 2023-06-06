
//1.MarkesGread Check
// var marks = prompt("Enter Your Marks : ");

// if (marks > 100 || marks < 0) {
//     document.write("Enter a Valid Marks :");

// } else if (marks <= 100 && marks >= 90) {
//     document.write("A+")

// } else if (marks <=89 && marks >= 80) {
//     document.write("B")

// } else if (marks <=79 && marks >= 70) {
//     document.write("c")

// }else if (marks <=69 && marks >= 60) {
//     document.write("D")

// }else{
//     document.write("Fail");
// }

//2.Biger Number Check
// var num1 = prompt("Enter The Number 1: ");
// var num2 = prompt("Enter The Number 2: ");
// var num3 = prompt("Enter The Number 3: ");

// if (num1 > num2 && num1 > num3) {
//     document.write("Number 1 is Big. ")
// } else if (num2 > num1 && num2 > num3) {
//     document.write("Number 2 is Big. ")
// } else if (num1 == num2 && num1 == num3) {
//     document.write("Number 1, Number 2, and Number 3 are the same.")
// } else {
//     document.write("Number 3 is big");
// }

// var num1 = prompt("Enter The Number 1: ");
// var num2 = prompt("Enter The Number 2: ");
// var num3 = prompt("Enter The Number 3: ");

// if (num1 > num2 && num1 > num3) {
//     document.write("Number 1 is Big. ");
// } else if (num2 > num1 && num2 > num3) {
//     document.write("Number 2 is Big. ");
// } else if (num1 == num2 && num1 == num3) {
//     document.write("Number 1, Number 2, and Number 3 are the same.");
// } else {
//     document.write("Number 3 is big.");
// }

//4.Vowel and consonent check
var letter = prompt("Enter a Letter. ");
letter = letter.toLocaleLowerCase();

if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
    document.write("Vowel")
} else {
    document.write("Consonent")
}
