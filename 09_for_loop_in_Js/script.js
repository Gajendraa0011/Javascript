// for (let i = 0; i <= 5; i++) {
//   console.log(i + 1);
// }

// programm to add first n natural number
// let sum = 0;
// let n = prompt("enter value of n");
// for (let i = 0; i < n; i++) {
//   sum += (i + 1);
// }

// console.log("the sum of " + n + " natural number is " + sum);

//for in loop agar key value pair ho to kam le skte hai
let obj = {
    shivika: 92,
    radhika: 98,
    kanika: 93,
    rashika: 95,
    shiradvika: 94,
}


for (let a in obj){
    // console.log(a);

    console.log("the marks of " + a + " are " + obj[a]);
}