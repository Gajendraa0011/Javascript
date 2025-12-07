// Default, rest, and spread parameter

// Default
function add(v1 = 0, v2 = 0) {
  console.log(v1 + v2);
}

add();

//rest

//part1 
function abc(...val) {
  console.log(val);
}
abc(1, 2, 3, 4, 5, 6);

//part2
function xyz(a,b,c, ...val) {
  console.log(a,b,c,val);
}

xyz(1, 2, 3, 4, 5, 6);
