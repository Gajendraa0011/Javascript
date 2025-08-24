let num = [33, 44, 55, 66, 77, "Not Present", null, false];
console.log(num);
num[8] = 98;

console.log(num[0]);
console.log(num[1]);
console.log(num[2]);
console.log(num[3]);
console.log(num[4]);
console.log(num[5]);
console.log(num[6]);
console.log(num[7]);
console.log(num[8]);

console.log("the length of num is ", num.length);

num[2] = 433;
console.log(num);