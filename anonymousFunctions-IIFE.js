/* Global scoping in JavaScript is bad because variables can be over written.
   To prevent global scoping, use functions.  To avoid creating a global 
   function name, use anonymous functions.
   
   IIFE - Imediately Invoked Function Expression */

(function(){
  var a = 10;
  var b =20;
  console.log(a + b);
})();  // <-- the () will imediately call the function in line