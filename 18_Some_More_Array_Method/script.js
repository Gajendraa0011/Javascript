let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(num.length);

delete num[0];
console.log(num);

console.log(num.length);

let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19];
let num_even_more = [111, 112, 113, 114, 115, 116, 117, 118, 119];
let newArray = num.concat(num_more, num_even_more);
console.log(newArray);

//sort method