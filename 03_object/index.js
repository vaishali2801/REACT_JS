
//An object in JavaScript is a collection of key–value pairs.
//It allows us to store multiple related pieces of data together in a structured way.

//object literals

const collageData = {
    name:"krishna",
    id:7,
    number:2787788989
}

console.log(typeof collageData);

//access object property
//dot
console.log(collageData.number);
//bracket
console.log(collageData["name"]);

//object constructor
const foodData = new Object();

foodData.name = "banana";
foodData.price = 50;
foodData.quality = "fresh"

console.log(foodData);

//modifying property
foodData.price = 60;

console.log(foodData);

//adding property
foodData.qty = 3;
console.log(foodData);

//destructing
const {name ,qty } = foodData;

// now defining object using function constructor

function details(id, name, age, course) {
    (this.id = id), (this.name = name), (this.age = age), (this.course = course);

}
const student= new details(
    9377,
    "bhoomi",
    19,
    "backend development"
);
console.log(student);

// Creating new object instances using the constructor function
const student2 = new details(8558, "krishna", 19, "frontend development");
console.log(student2.course);

// adding properties to object we use prototype
details.prototype.email = "vaishali94@gmail.com";

// Accessing object property
console.log(student2.name);

//remove property
delete student.age;

console.log(student);

//hasOwnProperty -true or false 

const available = student.hasOwnProperty("name");
const available2 = student.hasOwnProperty("age");

console.log(available);
console.log(available2);

//for in loop
for(let k in foodData){
    console.log("access property:",foodData[k]);
}

//spread operator or merge object
const stationary = {
    name:"pencil",
    price:5,
    qty:6
}
const book = {
    author:"Charles Duhigg",
    number:73348433
}

const merge = {...stationary , ...book};
console.log(merge);
console.log("length ", Object.keys(merge).length);
