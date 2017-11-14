// Declare and define an object
var myObj = {};

// print the empty object
console.log(myObj);

// add a property variable "prop" and define it with "Hello"
myObj.prop = "Hello";

// add a property variable "prop2" and define it with "123"
myObj.prop2 = "123";

// print the object with the properties
console.log(myObj);

// Access the number property
console.log("The number property is " + myObj.prop2)

// Declare and define an object
var myObj2 = {
  "prop": "Second Object",
  "prop2": 134,
  "prop3": function(){
    console.log("Function in object")
  },
  "objProp": {
    "innerProp": "Inner property"
  }
};

// print the object with the properties
console.log(myObj2);

// Access using the square bracket notation.
// Use when the property name is a JS key word, a number or dynamic
console.log("Accessing using square bracket notation " + myObj2["prop"]);

// Access nested object property using dot notation
console.log(myObj2.objProp.innerProp);

// Access nested object property using bracket notation
console.log(myObj2["objProp"]["innerProp"]);

// Print out the myObj2 object
console.log(myObj2);

// Removing the prop2 property
delete myObj2.prop2;

// Print out the myObj2 object
console.log(myObj2);

// Remove the objProp (must remove all the objProp properties first)
delete myObj2.objProp.innerProp;
delete myObj2.objProp

// Print out the myObj2 object
console.log(myObj2);

// Call the object method stored in prop3
myObj2.prop3();