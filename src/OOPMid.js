// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.type = "Human";
//   }
//   static sayName() {
//     console.log("My name is " + this.name);
//   }
// }

// const axel = new Person("Ax", 30);

// // console.log(axel.sayName());
// Person.sayName();
// axel.sayName();

const axel = {
  name: "Axel",
  age: 30,
  approvedCourses: ["JavaScript", "HTML", "CSS"],
  addCourse(newCourse) {
    console.log(this);
    console.log(this.approvedCourses);

    this.approvedCourses.push(newCourse);
  },
};

Object.defineProperty(axel, "country", {
  value: "Mexico",
  enumerable: true,
  configurable: true,
  writable: true,
});

Object.defineProperty(axel, "OS", {
  value: "Ubuntu",
  enumerable: false,
  configurable: true,
  writable: true,
});

Object.defineProperty(axel, "navigator", {
  value: "Chrome",
  enumerable: true,
  configurable: false,
  writable: true,
});

Object.defineProperty(axel, "editor", {
  value: "VSCode",
  enumerable: true,
  configurable: true,
  writable: false,
});

Object.defineProperty(axel, "language", {
  value: "English",
  enumerable: false,
  configurable: false,
  writable: false,
});

Object.seal(axel);

// console.log(Object.keys(axel));
// console.log(Object.getOwnPropertyNames(axel));
// console.log(Object.entries(axel));
console.log(Object.getOwnPropertyDescriptors(axel));
console.log(Object.keys(axel));
