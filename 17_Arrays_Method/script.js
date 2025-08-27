let num = [33, 44, 55, 66, 77];
// console.log(num);
// console.log(typeof num);

let b = num.toString();
console.log(b);
console.log(typeof b);

let c = num.join("_");
console.log(c, typeof c);

// let r = num.pop();//last number ko hata diya isne
// console.log(num, r);


// let r = num.push(4005);//new digit add kr dega 
// console.log(num, r);


// let r = num.shift();//first element ko remove kar dega 
// console.log(r, num);

let r = num.unshift(2002);//first element ko add kar dega 
console.log(r, num);
