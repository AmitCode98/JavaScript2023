
//JavaScript error handling is an essential aspect of writing robust and error-tolerant code. By implementing proper error handling techniques, you can gracefully handle runtime errors and prevent your application from crashing. 

//try{} statement: Here, the code which needs possible error testing is kept within the try block. In case any error occur, it passes to the catch{} block for taking suitable actions and handle the error. Otherwise, it executes the code written within.

//catch{} statement: This block handles the error of the code by executing the set of statements written within the block. This block contains either the user-defined exception handler or the built-in handler. This block executes only when any error-prone code needs to be handled in the try block. Otherwise, the catch block is skipped.


//Systex:
//try{  
//expression; } //code to be written.  
//catch(error){  
//expression; } // code for handling the error.  

//This Code give thg first output and then the code was stop.
// alert("1st alert was working");
// alert(X);//Error in this line
// alert("2st alert was working");



try {
    var a = ["34", "32", "5", "31", "24", "44", "67"]; //a is an array  
    document.write(a);    // displays elements of a  
    document.write(b); //b is undefined but still trying to fetch its value. Thus catch block will be invoked 


} catch (error) {
    alert("inside catch block");
    console.log(error);
    // alert("inside catch block: " + error);
    // console.log(error.name);
    // console.log(error.message);
    // console.error(error)
}