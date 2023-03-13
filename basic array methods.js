const fruits=["apple","mango","orange","banana"];
let fruita= fruits.fill("kiwi",2,4);
console.log(fruita);

const nam=["vin","san","ban","man"];
const nam3= nam.copyWithin(2,0);
console.log(nam3);


var numbers = [1,2,3,6,7,8];
var numbers2 = numbers.splice(2,1,3,4,5);
console.log(numbers2);


 
const names={
    firstName:"peter",
    middleaName:"mark",
    lastName:"ben",
  };
   
  //document.getElementById("object").innerHTML= names.firstName + "  "  +names.middleaName + "  "+ names.lastName;
   
  //object properties
  //"key: value" pairs are called properties
   
  let person = {
    name: 'John',
    age: 20
  };
   
  console.log(person);
   
  //Accessing Object Properties
  //Using dot Notation
  //objectName.key
   
  const person2 = {
    name: 'mark',
    age: 20,
  };
   
  // accessing property
  console.log(person2.name);
   
  //document.getElementById("object").innerHTML=person2.age
   
  //Using bracket Notation
  //objectName["propertyName"]
   
  const person3 = {
    name: 'peter',
    age: 20,
  };
   
  console.log(person3["name"]);