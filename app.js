cars = ["volvo", "bmw", "ford"];
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
// Using for loop acessing array
const num1 = [2, 4, 6, 8, 10];
for (let i = 0; i < num1.length; i++) {
    console.log(num1[i]);
}
// Using while loop acessing array
index = 0;
const num2 = [1, 5, 7, 9, 11, 15];
while (index < num2.length) {
    console.log(num2[index]);
    index++;
}
// Using for each() acessing array
i = 0;
const num3 = [3, 6, 9, 12, 15, 18];
num3.forEach(myFunction);
function myFunction(item, index) {
    console.log(item);
}
// every() method
i = 0;
const num4 = [4, 8, 12, 16, 20, 24];
const below15 = num4 => num4 < 15;
if (num4.every(below15)) {
    console.log('all are less than 15');
}
else {
    console.log('At least one element less than 15');
};

// map() method
const num5 = [5, 10, 15, 20, 25, 30]
function add(item) {
    return item + 5;
}
console.log(num5.map(add));
// map() method using arrow
const num6 = [2, 4, 6, 8, 10];
multliply = num6 => num6 * 5;
console.log(num6.map(multliply));
// Filter() Method
const num7 = [5, 8, 10, 12, 13, 11, 14];
checkEven = num7 => num7 % 2 === 0;
EvenNo = num7.filter(checkEven);
console.log(EvenNo);
// reduce() Method
const num8 = [1,8,5,6,7,4];
totSum = (acc,cur) => acc+cur;
sum = num8.reduce(totSum);
console.log(num8);
console.log(sum);