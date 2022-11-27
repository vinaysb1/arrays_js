cars = ["volvo","bmw","ford"];
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
// Using for loop acessing array
const num1 = [2,4,6,8,10];
for(let i=0;i<num1.length;i++){
console.log(num1[i]);
}
// Using while loop acessing array
index = 0;
const num2 = [1,5,7,9,11,15];
while (index<num2.length){
    console.log(num2[index]);
    index++;
}
// Using for each() acessing array
i=0;
const num3 = [3,6,9,12,15,18];
num3.forEach(myFunction);
function myFunction(item,index)
{
console.log(item);
}
    
