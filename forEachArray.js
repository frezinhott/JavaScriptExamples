var myArray = [10, 20, 30, 40];

function myfunction(item, index){
  console.log(index + " Element: " + item);
}

myArray.forEach(myfunction);