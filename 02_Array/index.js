// An array in JavaScript is a data structure used to store multiple values in a single variable. 
// It can hold various data types and allows for dynamic resizing. Elements are accessed by their index, starting from 0.
// creating an array using array literals
let number = [10,20,30,40,50,60];
console.log(number);
console.log(typeof number);

// creating using array constructor
let alp = new Array("a" ,"b" , "c" , "d" , "e");

let country1 = ["India" , "South korea" , "UK" , "US" , "Nepal" , "South africa" , "Dubai" , "russia" , "Germany"]

console.log(country1[country1.length - 1 ]);
console.log(country1);
console.log(country1[4]);
console.log(country1[2]);

country1[5] = "china";
console.log(country1);
//push
country1.push("ABCD");// add in last
console.log(country1);
//unshift
country1.unshift("America"); // add in start
console.log(country1);
//pop
country1.pop(); // remove last element
console.log(country1);
//shift 
country1.shift(); // remove start 
console.log(country1);
//splice
country1.splice( 5 , 0 ,"Australia" , "canada");
console.log(country1)

country1.splice(3,2);
console.log(country1);

let country = ["India" , "UK" , "US" , "Nepal" , "Israel"];

for(let i = 0;i < country.length ; i++){
    console.log(country[i]);
}
//for of
for(let i of country){
    console.log(i);
}

let number2 = [1,3,3,5,5,6,78,9]

number2.forEach((num)=>{
    const result = num*2;
    console.log(result);
})
// Conversion of an Array to String
console.log("converting an Array to String" + number2.toString());

// splice method
let array = [1, 2, 3, 4, 5, 6, 7, 8];
// array.splice(4,0,10,11)
console.log(array);

array.splice(3, 2, 12, 13);
console.log(array);

// This join() method creates and returns a new string by concatenating all elements of an array. It uses a specified separator between each element in the resulting string.
//convert array to string 
const fruits = [
    "cherry", "apple", "banana", "orange", "strawberry", " mango"
]
console.log(fruits.join(" "));

const numArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9, 10],
];
// The flat() method is used to flatten the array i.e. it merges all the given array and reduces all the nesting present in it.

console.log("flattened number Array =>", numArray.flat());

let number3 = [1, 3, [7, 8, [3, 2, 4, [9, [10]]]]];
console.log(number3.flat());
console.log(number3.flat(2));
console.log(number3.flat(Infinity));
// The slice() method returns a new array containing a portion of the original array, based on the start and end index provided as arguments

const fruits1 = [
    "apple",
    "banana",
    "cherry",
    "mango",
    "guava",
    "watermelon",
    "pineapple",
];
console.log(fruits1.slice(2, 5));
// The some() method checks whether at least one of the elements of the array satisfies the condition checked by the argument function.

let ageValues = [5, 10, 12, 15, 18, 20];
let result = ageValues.some((age) => {
    return age > 18;
})
console.log("result", result);

let ageValues2 = [5, 10, 12, 15, 18];
let result2 = ageValues2.some((age) => {
    return age > 18;
})
console.log("result", result2);

// The reverse() method is used to reverse the order of elements in an array. It modifies the array in place and returns a reference to the same array with the reversed order.
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log("reverse array : " + num.reverse());

// The values() method returns a new Array Iterator object that contains the values for each index in the array.

const numIterators = num.values();

for (let value of numIterators) {
    console.log("value", value);
}
//indexof() -This method is used to find the index of a particular element in an array.
const movie = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "Goodfellas",
    "Schindler's List"
]

console.log(movie.indexOf("the god")); // if not match give -1
console.log(movie.indexOf("Goodfellas")); // if match give index position 

// includes - This method is used to check whether the array contains the specified element or not.

let car = [
    "Toyota",
    "Honda",
    "Ford",
    "BMW",
    "Mercedes-Benz",
    "Tesla",
]

console.log("available in array ", car.includes("Toyota")); // true
console.log("not available in array ", car.includes("tata")); // false

// sort() - This method sorts the elements of an array in alphabetical order in ascending order.
let alpha = ["a", "b", "v", "w", 'u', 'c'];

console.log("alphabet sort ", alpha.sort());

// now what if we want to sort number data types values

console.log("number sort " + num.sort())// default sort is ascending order
console.log("descending order ", num.sort((a, b) => b - a));

// find & findIndex - This method finds out the first value which passes the
//  user-specified conditions and findIndex() method finds out the first index value which passes the user-specified conditions.
num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let result3 = num.find((values) => values > 7);
console.log("find method ", result3);
let result4 = num.find((values) => values > 9);
console.log("find method2 ", result4);

// slice() selects the specified number of elements without affecting the original array elements whereas
console.log("slice method ", car.slice(3, 5));

//  splice() removes the selected elements from the original array itself.
// splice() can add or remove element in array
car.splice(2, 0, "maruti");
console.log("splice method ", car);

// every()- method will check every element in array if every element satisfies the condition then try otherwise false
// all condition are true then print true if one condition is false then print false
num = [2, 3, 4, 78, 9, 6, 45, 64, 5, 5, 5];

console.log(
    "checking every elements that num greater than 5 is available :",
    num.every((values) => values > 5)
);
// will return true if every element satisfies the condition
console.log(
    "check number every number  is greater than 1 or not ?",
    num.every((values) => values > 1)
);
////map 
// This method iterates over an array, transforms the array according to user-specified conditions and returns a new array. Using this shorter syntax, one could easily make code more readable and understandable.
//The map() method is used to create a new array by applying a function to each element of an existing array.
let num2 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
//as given condition work 
let numResult = num2.map((number) => number * 3);
console.log("result ", numResult);
// print all number same as 
let result5 = num2.map((num) => {
    return num;
})
console.log("result5 ", result5);

//map() = original array → transform → new array

let color = ["red", "white", "black", "blue", "green", "orange"];
//print color name 
let colorResult = color.map((str) => {
    return str;
})
console.log("color name ", colorResult);

////filter
//The filter() method is used to create a new array that contains only the elements which pass a certain condition
//filter() checks each item in an array and keeps only those that match your condition.

//HOF-A Higher-Order Function (HOF) is a function that takes another function as an argument or returns a function as its result.
//map(), filter(), and forEach() are all higher-order functions because they take another function (callback) as a parameter.
const number7 = [2,4,6,8,10,12,14,16,18,20];
console.log("value ",number7);

const number1 = number.filter((num)=>num%3 === 0);
console.log("number1 ",number1);

////reduce
//reduce mathod
//The reduce() method executes a callback function on each element of an array, resulting in a single output value.
//array.reduce(callbackFunction, initialValue)
let number8 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let sum = 0;
for (let i = 0; i < number8.length; i++) {
    sum += number8[i];
}
console.log("sum", sum);

let sumAll = number8.reduce((acc, curr) => {
    acc += curr;
    return acc;
}, 0)
console.log("sum ", sumAll);