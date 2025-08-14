console.log("Hello World");

var a = 34;
var a = "Jsk" // var can be updated or re-declaired 
var b = "Harry";
var c = null
var d = undefined

const author = "GovindDevJi"
// const ko na toh updated kar skte or na hi re-declaired kar skte hai


let e = "Mathura"; // let block scoped hota hai
// let e = "vrindavan";  will throw error because let can be updated but can not re-declaired
e = "bankeyBihari"; // i will nt throw error because here we are updated the variable
console.log(b);

{
    var b = "Javascript";
    console.log(b);
    // var globally scoped hota hai
}

console.log(b);
