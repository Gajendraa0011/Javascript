// Arrays methods

//1.push method - last me value add kar deta hai
// let arr = [1, 2, 3, 4, 5];
// arr.push(66);
// console.log(arr);

//2.pop method - last me value hata deta hai
// let arr = [1, 2, 3, 4, 5];
// arr.pop();
// console.log(arr);

//3. shift method - starting se value hata deta hai
// let arr = [10, 20, 30, 40, 50, 60];
// arr.shift();
// console.log(arr);

//3. unshift method - starting se value add deta hai
// let arr = [10, 20, 30, 40, 50, 60];
// arr.unshift(90);
// console.log(arr);

//4.splice
// let arr = [1, 2, 3, 4, 5, 6];
// arr.splice(2, 1);
// console.log(arr);

//5. slice
// let arr = [1, 2, 3, 4, 5, 6];
// let newarr = arr.slice(0, 4);
// console.log(newarr);

//6. reverse - ye value ko reverse kar deta ha
// let arr = [1, 2, 3, 4, 5];
// arr.reverse();

//7. sort - accending and decending order
// let arr = [122, 444, 55, 44, 676, 33, 55, 789];
// let newarr = arr.sort(function (a, b) {
//   return b - a;
// });
// console.log(newarr);

//8. foreach
// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function (val) {
//   console.log(val);
// });

//9. map => map jab use karna h jab apko new array banana h purane array se aur important ye h return krna compolsury hai

// let arr = [1, 2, 3, 4, 5];
// let newarr = arr.map(function (val) {
//   return 12;
// });

// let arr = [13, 23, 33, 54, 5];
// let newarr = arr.map(function (val) {
//   if (val > 10) return val;
// });

// 10.filter purane array se new array banate h jisme return true aur false karenge
// let arr = [13, 23, 33, 54, 5];
// let newarr = arr.filter(function (val) {
//   if (val > 10) return true;
// });

// 11. reduce values ko ek bana dena
// let arr = [1, 2, 3, 4, 5, 6];
// let ans = arr.reduce(function (accumulator, val) {
//   return accumulator + val;
// }, 0);

//12. destructring 
// let arr = [1,2,3,4,5]
// let [a,b,,d] = arr;

