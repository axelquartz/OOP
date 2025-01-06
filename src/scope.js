// function scope() {
//   origin = "Colombia";
//   console.log(origin);
// }

// scope();
// console.log(origin);

let name = "Axel";

function greet() {
  name = "Riki";
  if (name === "Riki") {
    console.log(`Hello ${name}`);
  }
}

greet();
