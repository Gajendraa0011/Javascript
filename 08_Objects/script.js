//1. key value structure

let obj = {
  name: "Gajendra",
  age: 34,
  city: "sikar",
};

// console me obj.name or obj['name'] by we can check

//2. Nesting and deep access

const user = {
  name: "Gajendra",
  address: {
    city: "sikar",
    location: {
      lat: 22,
      lng: 23,
    },
  },
};

//user.address.location.lng

//3. object destructuring
let { lat, lng } = user.address.location;

//4.Looping: for-in, object.keys, object.entries

//for-in
let obja = {
  name: "Gajendra",
  age: 23,
  email: "test@test.com",
};

for(let key in obja){
  console.log(key,obja[key])
}

//object.keys object ki key ka array banana ho to use karte hai 

console.log(Object.keys(obja))


// object.entries (array of arrays) 
console.log(Object.entries(obja))


//5.copying objects - spread, object.assign, deep clone

let objx = {
  name: "Gajendra",
  age: 23,
  email: "test@test.com",
};

//spread
let objy = {...objx};

//object.assign
let objz = Object.assign({price : 2},objx)


//deep clone

