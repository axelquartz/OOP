// function scope() {
//   origin = "Colombia";
//   console.log(origin);
// }

// scope();
// console.log(origin);

// let name = "Axel";

// function greet() {
//   name = "Riki";
//   if (name === "Riki") {
//     console.log(`Hello ${name}`);
//   }
// }

// greet();

// "use strict";

// axel = "Axel";
// console.log(axel);

const myGlobal = 0;

function myFunction() {
  const myNumber = 1;
  console.log(myGlobal);

  function parent() {
    const inner = 2;
    console.log(myNumber);
    console.log(myGlobal);

    function child() {
      console.log(inner);
      console.log(myNumber);
      console.log(myGlobal);
    }
    return child();
  }
  return parent();
}
// Inner function

myFunction();
