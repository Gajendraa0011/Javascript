let arr = [22, 44, 66];
arr.map((value, index, array) => {
  console.log(value, index, array);
});

// Array filter method
let arr2 = [33, 45, 76, 1, 2, 3, 4, 5];
let a2 = arr2.filter((value) => {
  return value < 10;
});

console.log(a2);

//Array reudce method

let arr3 = [1, 2, 3, 4, 5, 6];
let a3 = arr3.reduce((x, y) => {
  return x + y;
});

console.log(a3);
