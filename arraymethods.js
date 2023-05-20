const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = fruits;
fruits.pop();
document.getElementById("demo2").innerHTML = fruits;

// Array: length
const listA = [1,2,3,4]
console.log(listA.length)

// Array.concat()
const array1 = [4,6,8];
const array2 = [5,7,9];
const array3 = array1.concat((array2));
console.log(array3);

// coppywithin()
const array5 = ['a', 'b', 'c', 'd', 'e'];

// Copy to index 0 the element at index 3
console.log(array5.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]

// Array.filter()
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

//  Array.find()
const array6 = [5, 12, 8, 130, 44];

const found = array6.find(element => element > 10);

console.log(found);
// Expected output: 12

//array.findIndexof()
const array7 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array7.findIndex(isLargeNumber));
// Expected output: 3 

// Array.findLast()
const array8 = [5, 12, 50, 130, 44];

const found = array8.findLast((element) => element > 45);

console.log(found);
// Expected output: 130

//Array.forEach()
const array8 = ['a', 'b', 'c'];
array8.forEach(element => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

//Array.indexOf() 
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf('bison', 2));
// Expected output: 4

console.log(beasts.indexOf('giraffe'));
// Expected output: -1

// Array.join()
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join());
// Expected output: "Fire,Air,Water"
console.log(elements.join(''));
// Expected output: "FireAirWater"
console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"

// Array.map()
const array10 = [1, 4, 9, 16];
// Pass a function to map
const map1 = array10.map(x => x * 2);
console.log(map1);
// Expected output: Array [2, 8, 18, 32]

// Array.pop()
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// Expected output: "tomato"
console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
plants.pop();
console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]