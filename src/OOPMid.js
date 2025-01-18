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

// const axel = {
//   name: "Axel",
//   age: 30,
//   approvedCourses: ["JavaScript", "HTML", "CSS"],
//   addCourse(newCourse) {
//     console.log(this);
//     console.log(this.approvedCourses);

//     this.approvedCourses.push(newCourse);
//   },
// };

// Object.defineProperty(axel, "country", {
//   value: "Mexico",
//   enumerable: true,
//   configurable: true,
//   writable: true,
// });

// Object.defineProperty(axel, "OS", {
//   value: "Ubuntu",
//   enumerable: false,
//   configurable: true,
//   writable: true,
// });

// Object.defineProperty(axel, "navigator", {
//   value: "Chrome",
//   enumerable: true,
//   configurable: false,
//   writable: true,
// });

// Object.defineProperty(axel, "editor", {
//   value: "VSCode",
//   enumerable: true,
//   configurable: true,
//   writable: false,
// });

// Object.defineProperty(axel, "language", {
//   value: "English",
//   enumerable: false,
//   configurable: false,
//   writable: false,
// });

// Object.seal(axel);

// // console.log(Object.keys(axel));
// // console.log(Object.getOwnPropertyNames(axel));
// // console.log(Object.entries(axel));
// console.log(Object.getOwnPropertyDescriptors(axel));
// console.log(Object.keys(axel));

// const axel = {
//   name: "Axel",
//   age: 30,
//   height: 1.8,
//   weight: 92,
//   interests: {
//     sport: "Basketball",
//     music: "Rock",
//   },
// };

// const riki = {};
// for (prop in axel) {
//   riki[prop] = axel[prop];
// }

// axel.skinColor = "Brown";
// riki.interests.music = "Pop";

// const laura = Object.create(axel);

// laura.__proto__.interests.music = "Jazz";

// console.log(laura);

// console.log(laura.interests.music);
// console.log(axel.interests.music);
// console.log(riki.interests.music);

// const axel = {
//   name: "Axel",
//   age: 30,
//   height: 1.8,
//   weight: 92,
//   interests: {
//     sport: "Basketball",
//     music: "Rock",
//   },
// };

// const data = JSON.stringify(axel);
// const riki = JSON.parse(data);

// riki.interests.music = "Pop";

// console.log(riki);
// console.log(axel);

// function recursiveFunction(num) {
//   if (num < 5) {
//     console.log(num);
//     return recursiveFunction(num + 1);
//   } else {
//     return "Its over 4";
//   }
// }

// console.log(recursiveFunction(0));

// function anotherRecursiveFunction(num) {
//   if (num < 10) {
//     console.log(num);
//     return anotherRecursiveFunction(num + 1);
//   } else {
//     console.log("Condition is not being meet");
//   }
// }

// anotherRecursiveFunction(8);

// function recursive() {
//   if(/*Validation*/) {
//     // Recursive calls
//   } else {
//     // Non recursive calls (normal)
//   }
// }

// const nums = [0, 1, 2, 3, 23, 5, 6, 7];

// // let num = 0;

// // for (let i = 0; i < nums.length; i++) {
// //   num = nums[i];
// //   console.log({ i, num });
// // }

// function recursiveNums(num) {
//   if (num < nums.length) {
//     console.log({ i: num, nums: nums[num] });
//     return recursiveNums(num + 1);
//   } else {
//     console.log("DONE", num);

//     return;
//   }
// }

// recursiveNums(0);

// const axel = {
//   name: "Axel",
//   age: 30,
//   height: 1.8,
//   weight: 92,
//   interests: {
//     sport: "Basketball",
//     music: "Rock",
//   },
//   sayName() {
//     console.log("My name is " + this.name);
//   },
// };

// function isObject(obj) {
//   return typeof obj === "object";
// }
// function isArray(obj) {
//   return Array.isArray(obj);
// }

// function deepCopy(obj) {
//   let copyObject;

//   const objIsArray = isArray(obj);
//   const objIsObject = isObject(obj);

//   if (objIsArray) {
//     copyObject = [];
//   } else if (objIsObject) {
//     copyObject = {};
//   } else {
//     return obj;
//   }

//   for (key in obj) {
//     const value = obj[key];
//     copyObject[key] = deepCopy(value);
//     if (objIsArray) {
//       copyObject.push(value);
//     } else if (objIsObject) {
//       copyObject[key] = value;
//     }
//   }

//   return copyObject;
// }

// const copy = deepCopy(axel);
// console.log(copy);

// let num = 0;

// const nums = [1, 2, 3, 8, 9, 10, 14, 15, 16];

// // function numRecursion(num) {
// //   if (num < 6) {
// //     console.log(num);
// //     return numRecursion(num + 1);
// //   } else {
// //     console.log("DONE");
// //     return num;
// //   }
// // }

// // numRecursion(num);

// function printNumsIndex(num) {
//   console.log(num);
//   for (num; num < nums.length; num++) {
//     console.log(`Index: ${num}, Number: ${nums[num]}`);
//   }
// }

// function recursiveIndex(num) {
//   if (num < nums.length) {
//     console.log(`Index: ${num}, Number:${nums[num]}`);

//     return recursiveIndex(num + 1);
//   }
// }

// recursiveIndex(num);

// const axel = {
//   name: "Axel",
//   age: 30,
//   height: 1.8,
//   weight: 92,
//   interests: {
//     sport: "Basketball",
//     music: "Rock",
//   },
//   sayName() {
//     console.log("My name is " + this.name);
//   },
// };

// function recursiveArr(numsArr) {
//   if (numsArr.length != 0) {
//     const firstNum = numsArr[0];
//     console.log(`FirstNum: ${firstNum}, nums: ${nums}`);
//     numsArr.shift();
//     return recursiveArr(numsArr);
//   }
// }

// // recursiveArr(nums);

// const riki = deepCopy(axel);

// riki.name = "Riki";
// riki.interests.music = "Bossa Nova";

// console.log(riki);
// console.log(axel);

// function requiredParam(param) {
//   throw new Error(param + " Missing param");
// }

// function createStudent({ name = requiredParam("name"), age, email = requiredParam("email"), twitter, instagram, approvedCourses = [], learningPaths = [] } = {}) {
//   return {
//     name: name,
//     age: age,
//     email: email,
//     socialMedia: { twitter: twitter, instagram: instagram },
//     approvedCourses: approvedCourses,
//     learningPaths: learningPaths,
//   };
// }

// const breda = createStudent({
//   email: "dfsfd@fds",
//   name: "Breda",
//   age: 20,
//   twitter: "xaeltoro",
//   instagram: "axsup",
//   approvedCourses: ["JavaScript", "Node", "React"],
// });

// console.log(breda);

function isObjetc(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function deepCopy(subject) {
  let copySubject;

  const subjectIsObject = isObjetc(subject);
  const subjectIsArray = isArray(subject);

  if (subjectIsObject) {
    copySubject = {};
  } else if (subjectIsArray) {
    copySubject = [];
  } else {
    return subject;
  }

  for (key in subject) {
    const keyIsObject = isObjetc(subject[key]);
    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
}

const studentBase = {
  name: undefined,
  age: undefined,
  email: undefined,
  socialMedia: {
    twitter: undefined,
    instagram: undefined,
  },
  approvedCourses: undefined,
  learningPaths: undefined,
};

const riki = deepCopy(studentBase);

Object.defineProperty(riki, "name", {
  value: "Riki",
  enumerable: true,
  writable: true,
  configurable: true,
});

Object.defineProperty(riki.socialMedia, "twitter", {
  value: "Riki",
  enumerable: true,
  writable: true,
  configurable: true,
});

// console.log(riki);

// OLD

function requiredParam(param) {
  throw new Error(`${param} is missing`);
}

function createStudent({ name = requiredParam(name), age = requiredParam(age), x, facebook, learningPaths = [] } = {}) {
  return {
    name,
    age,
    socialMedia: {
      x,
      facebook,
    },
    learningPaths,
  };
}

const erik = createStudent({ name: "Eriksson" });

console.log(erik);
