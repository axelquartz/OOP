// class Person {
//   constructor(name, age, country) {
//     this.name = name;
//     this.age = age;
//     this.country = country;
//   }
// }

// class Student extends Person {
//   constructor(name, age, grade, passed, country) {
//     super(name, age);
//     this.grade = grade;
//     this.passed = () => {
//       if (this.grade > 80) {
//         console.log(`Yes, ${this.name} has passed the grade`);
//       } else {
//         console.log(`${this.name}'s grade was: ${this.grade}. It should be 80 or more. Try next year`);
//       }
//     };
//   }
// }

// const axel = new Student("Axel", 30, 85);
// const riki = new Student("Riki", 24, 76);

// console.log(axel, riki);
// console.log(axel.passed(), riki.passed());

// function Person(name, age, country) {
//   this.name = name;
//   this.age = age;
//   this.country = country;
// }

// Person.prototype.passed = function () {
//   if (this.grade > 80) {
//     console.log(`Yes, ${this.name} has passed the grade`);
//   } else {
//     console.log(`${this.name}'s grade was: ${this.grade}. It should be 80 or more. Try next year`);
//   }
// };

// const axel = new Person("Axel", 30, "MX");

// axel.grade = 85;

// const riki = new Person({
//   name: "Riki",
//   age: 24,
//   country: "MX",
// });

// console.log(axel);
// console.log(axel.passed());
// console.log(riki);

// class Student {
//   constructor(name, age, grade) {
//     this.name = name;
//     this.age = age;
//     this.grade = grade;
//   }
//   passed() {
//     if (this.grade > 80) {
//       console.log(`Yes, ${this.name} has passed the grade`);
//     } else {
//       console.log(`${this.name}'s grade was: ${this.grade}. It should be 80 or more. Try next year`);
//     }
//   }
// }

// const axel = new Student("Axel", 30, 87);
// axel.name = axel.name.concat("Quartz");

// console.log(axel);

class Student {
  constructor({ name, age, grade, className, facebook, instagram, x }) {
    this.name = name;
    this.age = age;
    this.grade = grade;
    this.className = className;
    this.socialMedia = {
      facebook,
      instagram,
      x,
    };
  }
}

const axel = new Student({
  x: "axelquartz",
  className: "B",
  name: "Axel",
  grade: 80,
  age: 30,
});

axel.socialMedia.facebook = "axlo";

console.log(axel);

class Level1 extends Student {
  constructor({ name, age, grade, className, facebook, instagram, x, level }) {
    super({ name, age, grade, className, facebook, instagram, x });
    this.level = level;
  }
}

axel.level = 4;

console.log(axel);

const riki = new Level1({});
