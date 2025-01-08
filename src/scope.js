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

// const myGlobal = 0;

// function myFunction() {
//   const myNumber = 1;
//   console.log(myGlobal);

//   function parent() {
//     const inner = 2;
//     console.log(myNumber);
//     console.log(myGlobal);

//     function child() {
//       console.log(inner);
//       console.log(myNumber);
//       console.log(myGlobal);
//     }
//     return child();
//   }
//   return parent();
// }
// // Inner function

// myFunction();

// function sayHello() {
//   const name = "Axel";
//   function sayName() {
//     console.log(name);
//   }
//   // function sayAge() {
//   //   console.log(30);
//   // }
//   // return sayAge;
//   return sayName;
// }

// const hello = sayHello();
// hello();

// function moneyBox(coins) {
//   let saveCoins = 0;
//   saveCoins += coins;
//   console.log(`MoneyBox: $${saveCoins}`);
//   return saveCoins;
// }

// moneyBox(10);
// moneyBox(20);
// moneyBox(30);

// function moneyBox() {
//   let saveCoins = 0;
//   function countCoins(coins) {
//     saveCoins += coins;
//     console.log(`MoneyBox: $${saveCoins}`);
//     return saveCoins;
//   }
//   return countCoins;
// }

// const myMoneyBox = moneyBox();
// myMoneyBox(10);
// myMoneyBox(20);
// myMoneyBox(30);

// var axel;
// var riki;

// axel = "Axelo Reyes";
// riki = "Rikitonga";

// console.log(axel);
// console.log(riki);

// axel = "Axelo";

// console.log(axel);

// var axel;
nameOfDog = "Rocco";
console.log(nameOfDog);
let nameOfDog = "Rex";
console.log(nameOfDog);
