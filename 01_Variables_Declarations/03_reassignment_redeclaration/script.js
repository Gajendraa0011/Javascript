// Reassignment, Redeclaration

// Scoped to functions, not blocks
// Can be redeclared and reassigned
var a = 4;
var a = 8;

// Scoped to blocks ( {} )
// Can be reassigned but not redeclared
let a = 66;
a = 88;
let a = 44; // wrong method