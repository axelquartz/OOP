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

// console.log(Object.keys(axel));
// console.log(Object.getOwnPropertyNames(axel));
// console.log(Object.entries(axel));
console.log(Object.getOwnPropertyDescriptors(axel));

Object.defineProperty(axel, "NASAtest", {
  value: "Aliens",
  enumerable: true,
  configurable: true,
  writable: true,
});
