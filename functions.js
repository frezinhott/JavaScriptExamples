function sayHello(firstName, lastName){
  return "Hello " + firstName + " " + lastName;
}

var returnValue = sayHello("Trevor", "Chase");

console.log(returnValue);

// Anonymous function expression
var test = function(){
  console.log("Function called");
}

// Passing functions into functions
var executor = function(fn){
  fn();
}

// call the function by using the ()
executor(test);

