//1.String predefind method in java script.


var  address="Keshargarh";
console.log(address.length);

var school="s.Ok"
var length=school.length;
console.log("Number of character "+length);

// var name=prompt("Enter your name");
// console.log(name);


//2.The charAt() method is used to retrieve a character at a specific index within a string in JavaScript. It takes an index as a parameter and returns the character at that position.
var check="Amit Gorai"
console.log(check.charAt(0));
console.log(check.charAt(1));
console.log(check.charAt(2));
console.log(check.charAt(3));
console.log(check.charAt(4));
console.log(check.charAt(5));
console.log(check.charAt(6));
console.log(check.charAt(7));
console.log(check.charAt(8));
console.log(check.charAt(9));


//3.The toUpperCase() method in JavaScript is used to convert a string to uppercase. It returns a new string with all the characters converted to uppercase.
var text="india"
text=text.toUpperCase();
console.log(text);

var book='poor dad rich dad'
console.log(book.toUpperCase());

// console.log(text.toLocaleUpperCase);

//4.To convert a string to lowercase in JavaScript, you can use the toLowerCase() method. It converts all the characters in a string to lowercase and returns a new string.

var str='SUmiT';
console.log(str.toLowerCase());

//5.The concat() method in JavaScript is used to concatenate (combine) two or more strings and return a new string that contains the concatenated result.

var fname="Amit"
var lname=" Gorai"
console.log(fname.concat(lname));

var str1="First"
var str2=" Second"
var all=str1.concat(str2);
console.log(all);


//6.The slice() method in JavaScript is used to extract a portion (substring) of a string and return it as a new string. It takes two parameters: the starting index (inclusive) and the ending index (exclusive) of the portion to be extracted.
var car="Swift";
// var bus="Tata";
var result=car.slice(0,2);
console.log(result);

let strE = "Hello, World!";
let slicedStr = strE.slice(-6, -1);
console.log(slicedStr);



// Task..

 var Ufname="Shiva";
 var Ulname=" God";

 var fullName=(Ufname+ Ulname );
 console.log(fullName);
 console.log(fullName.length);
 console.log(fullName.toUpperCase());
 console.log(fullName.charAt(2))