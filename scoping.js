// The most popular way to create a scop is inside of functions

var name = "Chase";

function allocateDepartment(){
  if(name==="Chase"){
    var department = "Engineering";
  }
  
  console.log("department variable inside the function: " + department);
}

allocateDepartment();

// THIS WILL CAUSE A RUNTIME ERROR!!!
console.log("department variable outside the function: " + department);