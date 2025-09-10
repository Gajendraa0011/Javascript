alert("enter your value of a");
let a = prompt("enter a here");
a = Number.parseInt(a);
alert("you entered of type a " + typeof a);

let write = confirm("do you want write it on this page");

if (write) {
  document.write(a);
} else {
  document.write("allow to me write");
}
