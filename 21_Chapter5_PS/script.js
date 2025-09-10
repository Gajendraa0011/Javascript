//PS1
// let arr = [1,2,3,4,5]
// let a = prompt("enter your number")
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr)

//PS2
// let arr = [1, 2, 3, 4, 5];
// let a;
// do {
//   a = prompt("enter your number");
//   a = Number.parseInt(a);
//   arr.push(a);
// } while (a != 0);

// console.log(arr);

// PS3
// let arr = [1, 2, 3, 4, 50,60,70,80];

// let a2 = arr.filter((value) => {
//   return value % 10 == 0;
// });

// console.log(a2);


// PS4
// let arr = [1, 2, 3, 4, 50,60,70,80];

// let a2 = arr.map((value) => {
//   return value * value;
// });

// console.log(a2);


// PS5
let arr = [1, 2, 3,4,5,6];

let a2 = arr.reduce((a1,a2) => {
  return a1 * a2;
});

console.log(a2);
