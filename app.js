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
const num8 = [1, 8, 5, 6, 7, 4];
totSum = (acc, cur) => acc + cur;
sum1 = num8.reduce(totSum);
console.log(num8);
console.log(sum1);
//for loop for array of objects
const emp = [
    { id: 1, name: "vinay", age: 32 },
    { id: 2, name: "sanjay", age: 33 },
    { id: 3, name: "Naveen", age: 28 },
    { id: 4, name: "guru", age: 22 },
];
for (let i = 0; i < emp.length; i++) {
    console.log(emp[i].name);
}
//for/of loop for array of objects
const emp1 = [
    { id: 1, name: "vinay", age: 32, dep: "me" },
    { id: 2, name: "sanjay", age: 33, dep: "me" },
    { id: 3, name: "Naveen", age: 28, dep: "cs" },
    { id: 4, name: "guru", age: 22, dep: "cv" }
];
for (let profile of emp1) {
    console.log(profile.age);
    console.log(profile.name);
}
//forEach() loop
const emp2 = [
    { id: 1, name: "vin", age: 30, dep: "me" },
    { id: 2, name: "san", age: 31, dep: "me" },
    { id: 3, name: "Naveen", age: 28, dep: "cs" },
    { id: 4, name: "guru", age: 22, dep: "cv" }
];
emp2.forEach(function (profile, i, emp2) {
    console.log(`index:${i},Name:${profile.name}`);
});
//forEach() loop exmple-2
const emp3 = [
    { id: 1, name: "aarush", age: 3, year: 2019 },
    { id: 2, name: "vinush", age: 2, year: 2020 },
    { id: 3, name: "usha", age: 4, year: 2018 },
    { id: 4, name: "vidya", age: 5, year: 2017 },
];
emp3.forEach((profile, index, emp3) => this.myFunction(profile, index, emp3));
myFunction = (profile, index, emp3) => {
    console.log(emp3);
}
//while() loop
const emp4 = [
    { id: 1, name: "aarush", age: 3, year: 2019 },
    { id: 2, name: "vinush", age: 2, year: 2020 },
    { id: 3, name: "usha", age: 4, year: 2018 },
    { id: 4, name: "vidya", age: 5, year: 2017 },
];
var i = 0;
while (i < emp4.length) {
    console.log(emp4[i].name);
    i++;
}
// do while() loop
const emp5 = [
    { id: 1, name: "vinay", age: 32, dep: "me" },
    { id: 2, name: "sanjay", age: 33, dep: "me" },
    { id: 3, name: "Naveen", age: 28, dep: "cs" },
    { id: 4, name: "guru", age: 22, dep: "cv" }
];
var i = 0;
do {
    console.log(emp5[i].age)
    i++;
}
while (i < emp5.length);
//map() method
var myArray = [
    { id: 1, firstName: "venu", lastName: 'gopal', age: 12 },
    { id: 2, firstName: 'Jane', lastName: 'Brown', age: 14 },
    { id: 3, firstName: 'Martin', lastName: 'loother', age: 13 },
    { id: 4, firstName: 'subhas', lastName: 'bose', age: 17 },
    { id: 5, firstName: 'syam', lastName: 'sundar', age: 11 }
];

var newArray = myArray.map(function (profile, index, myArr) {
    var newProfile = {
        'id': index + 1,
        'fullName': profile.firstName + ' ' + profile.lastName,
        'age': profile.age
    }

    return newProfile
})

newArray.forEach(function (profile, index, myArr) {
    console.log(profile.fullName)
});

for (let i = 0; i < 10; i++) {
    console.log("Hello world");
}

for (let i = 1; i < 11; i++) {
    console.log(i);
}
// print even no's range 0-20 using for loop
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}
let sum = 0;
for (let i = 1; i < 11; i++) {
    sum = sum + i;
    console.log(sum);
}

const array = [3, 6, 1, 5, 9, 4, 7, 10, 11];
const even = [];
const odd = [];
for (let i = 0; i < array.length; i++) {
    if (i % 2 == 0) {
        even.push(array[i])
    }
    else {
        odd.push(array[i])
    }

}
console.log(even);
console.log(odd);

// To print min,max numbers using for loop
const num15 = [67, 56, 21, 3, 45, 89, 2, 90];
let min = num15[0];
for (let i = 0; i < num15.length; i++) {
    if (num15[i] < min) {
        min = num15[i]
    }
}
console.log(min);
let max = num15[0];
for (let i = 0; i < num15.length; i++) {
    if (num15[i] > max) {
        max = num15[i]
    }
}
console.log(max);


// print 0 and 1 with in the array
let num16 = [0, 1, 0, 1, 1, 1, 0, 0];
var zero = 0;
var ones = 1;
for (i = 0; i < num16.length; i++) {
    if (num16[i] == 0) {
        zero++;
    }
    else {
        ones++;
    }
}
console.log(zero);
console.log(ones);

//count the total number of item repeated in a array
const num17 = [0, 1, 1, 1, 0, 1, 2, 3, 1, 2, 1, 0, 1, 0, 3, 3];
let count0 = 0;
let count1 = 1;
let count2 = 2;
let count3 = 3;
for (i = 0; i < num17.length; i++) {
    if (num17[i] == 0) {
        count0++;
    }
    else if (num17[i] == 1) {
        count1++;
    }
    else if (num17[i] == 2) {
        count2++;
    }
    else count3++;
}
console.log(count0, count1, count2, count3);

const worker = [
    { name: "harish", age: 33, sal: "1000" },
    { name:"vicky", age:23, sal:"2000"},
    { name:"joe", age:34, sal:"1000"}
];
for (let profile of worker){
    console.log(profile.sal);
}
// print pivot index of an array
const arr2 = [6, 2,1, 2, 6];
function pivotIndex(arr) {
    leftSum = 0;
    total = arr.reduce((a, b) => a + b);
    rightSum = total
    for (let i = 0; i < arr.length; i++) {
        rightSum = rightSum - arr[i]
        if (leftSum === rightSum) { return i }
        leftSum = leftSum + arr[i];
    }
    return -1;
}
console.log(pivotIndex(arr2));


