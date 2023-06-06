
//1.
// var letter=prompt("Enter a letter ");
// letter=letter.toLocaleLowerCase();

// switch(letter){
//     case "a":
//         document.write("Vowel")
//     break;
//     case "e":
//         document.write("Vowel")
//     break;
//     case "i":
//         document.write("Vowel")
//     break;
//     case "o":
//         document.write("Vowel")
//     break;
//     case "u":
//         document.write("Vowel")
//     break;
//     default:
//         document.write("Consent");
// }

//2.
var letter = prompt("Enter a letter: ");
letter = letter.toLocaleLowerCase();

switch (letter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        document.write("Vowel");
        break;
    default:
        document.write("Consonant");
        break;
}


