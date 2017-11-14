var person = {
  "firstName": "Trevor",
  "lastName": "Chase",
  "address": {
    "street": "185 Gladesville Rd",
    "city": "Morgantown",
    "state": "WV"
  },
  
  "isFromState": function(state){
    return (this.address.state===state){
  },
    
  "getFullName": function(){
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.getFullName());
console.log(person.isFromState("WV"));