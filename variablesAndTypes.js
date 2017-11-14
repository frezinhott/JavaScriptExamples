/**
* Variables do not have any type information when declared
*/

// Any number declared is a long by default
var num = 42;

// Variable assigned with a string
var a = "A String";

// Variable assigned with a boolean
var b = false;

// Undefined types are variables that are declared by not defined
var c;

// Null type and value
var d = null;

// Print the variables to the console
console.log(num);
console.log(a);

// Print the length of the string
console.log(a.length);

console.log(b);
console.log(c); // <-- Prints "undefined"
console.log(d);

/*
* You can assign a number to a variable that was already assigned to a string!
* This is refered to as loose or weak typing
*/
var temp = "Temp"
console.log("variable temp: " + temp + " is the type of: " + typeof temp);
temp = 100;
console.log("variable temp: " + temp + " is the type of: " + typeof temp);