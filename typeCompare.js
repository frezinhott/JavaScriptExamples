var a = 10;
var b = "10";

if(a == b){
  console.log(a);
  console.log(b);
  console.log("Values are equal using ==");
}

// This will only be true if the values truely match
if(a === b){
  console.log(a);
  console.log(b);
  console.log("Values are equal using ===");
}

b = 10;
if(a === b){
  console.log(a);
  console.log(b);
  console.log("Updated values are equal using ===");
}