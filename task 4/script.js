// 1. New Global Functions in ES6
console.log(Number.isNaN(NaN));   // true
console.log(Number.isNaN("NaN")); // false
console.log(Number.isFinite(100)); // true
console.log(Number.isFinite(Infinity)); // false
console.log(globalThis); // Browser میں `window`, Node.js میں `global`

// 2. Array Destructuring
const fruits = ["Apple", "Banana", "Mango"];
const [first, second, third] = fruits;
console.log(first, second, third); // Apple Banana Mango

// Skipping elements
const numbers = [10, 20, 30, 40];
const [num1, , num3] = numbers;
console.log(num1, num3); // 10 30

// Default values
const colors = ["Red"];
const [color1, color2 = "Blue"] = colors;
console.log(color1, color2); // Red Blue

// 3. Object Destructuring
const person = { name: "Fatima", age: 22 };
const { name, age } = person;
console.log(name, age); // Fatima 22

// Renaming variables
const user = { fullName: "Fatima Khalid", profession: "Frontend Developer" };
const { fullName: userName, profession } = user;
console.log(userName, profession); // Fatima Khalid Frontend Developer

// Default values
const student = { name: "Ali" };
const { name: studentName, grade = "A" } = student;
console.log(studentName, grade); // Ali A

// Nested Object Destructuring
const userInfo = {
  name: "Sana",
  address: {
    city: "Karachi",
    country: "Pakistan"
  }
};
const { name: userName2, address: { city, country } } = userInfo;
console.log(userName2, city, country); // Sana Karachi Pakistan

// 4. Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // { a: 1, b: 2, c: 3, d: 4 }

// Copying an array
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // [1, 2, 3]

// Function with Spread Operator
const sum = (a, b, c) => a + b + c;
const nums = [10, 20, 30];
console.log(sum(...nums)); // 60
