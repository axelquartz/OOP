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

// class Student {
//   constructor({ name, age, grade, className, facebook, instagram, x }) {
//     this.name = name;
//     this.age = age;
//     this._grade = grade;
//     this._className = className;
//     this.socialMedia = {
//       facebook,
//       instagram,
//       x,
//     };
//   }
//   get grade() {
//     return this._grade;
//   }
//   set grade(newGrade) {
//     if (newGrade > 100) {
//       this._grade = newGrade + "over 100";
//     } else {
//       this._grade = newGrade + "under 100";
//     }
//   }
//   get className() {
//     return this._className;
//   }
//   set className(newClassName) {
//     this._className = newClassName + " OFFICIAL";
//   }
// }

// const axel = new Student({
//   className: "B",
//   name: "Axel",
//   grade: 80,
//   age: 30,
//   instagram: "axsup",
// });

// axel.socialMedia.facebook = "axlo";
// axel.grade = 102;
// axel.className = "A";

// console.log(axel);

// class Level1 extends Student {
//   constructor(props, level) {
//     super(props);
//     this.level = level;
//   }
//   doubleAge() {
//     return (this.age *= 2);
//   }
// }

// const riki = new Level1({
//   className: "A",
//   name: "Riki",
//   grade: 80,
//   age: 30,
//   instagram: "axsup",
// });

// console.log(riki.doubleAge());

// const natalia = {
//   name: "Natalia",
//   age: 30,
//   approbedCourses: ["JavaScript", "Node", "React"],
//   approveCouse(newCourse) {
//     this.approbedCourses.push(newCourse);
//   },
// };

// natalia.approveCouse("PHP 2");
// console.log(natalia);

// function Student({ name, age, approbedCourses }) {
//   {
//     this.name = name;
//     this.age = age;
//     this.approbedCourses = approbedCourses;
//   }
//   //   this.approveCouse = function (newCourse) {
//   //     this.approbedCourses.push(newCourse);
//   //   };
// }

// Student.prototype.approveCouse = function (newCourse) {
//   this.approbedCourses.push(newCourse);
// };

// const natalia = new Student({ name: "Natalia", approbedCourses: ["JavaScript", "Node", "React"], age: 40 });

// natalia.approveCouse("PHP 4");
// natalia.approveCouse("PHP 5");

// console.log(natalia);

class LearningPaths {
  constructor(name, courses = []) {
    this.name = name;
    this.courses = courses;
  }
}

const escuelaJavascript = new LearningPaths("Escuela Javascript", ["JavaScript", "Node", "React"]);

class Student {
  constructor({ name, age, approbedCourses = ["JavaScript", "Node", "React"], socialMedia, learningPaths, mail }) {
    this.name = name;
    this.age = age;
    this.approbedCourses = approbedCourses;
    this.socialMedia = {
      facebook: socialMedia.facebook,
      instagram: socialMedia.instagram,
      x: socialMedia.x,
    };
    this.learningPaths = learningPaths;
    this.mail = mail;
  }
  // Metodos
  approveCouse(newCourse) {
    this.approbedCourses.push(newCourse);
    console.log(`${newCourse} has been approved`);
  }
}

const riki = new Student({
  name: "Riki",
  age: 24,
  approbedCourses: ["JavaScript", "Node", "React"],
  socialMedia: {
    facebook: "axsup",
    instagram: "axsup",
    x: "axsup",
  },
  learningPaths: escuelaJavascript,
});

riki.approveCouse("JAVA");

console.log(riki);
