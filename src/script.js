class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  constructor(name, age, grade, passed) {
    super(name, age);
    this.grade = grade;
    this.passed = () => {
      if (this.grade > 80) {
        console.log(`Yes, ${this.name} has passed the grade`);
      } else {
        console.log(`${this.name}'s grade was: ${this.grade}. It should be 80 or more. Try next year`);
      }
    };
  }
}

const axel = new Student("Axel", 30, 85);
const riki = new Student("Riki", 24, 76);

// console.log(axel, riki);
console.log(axel.passed(), riki.passed());
