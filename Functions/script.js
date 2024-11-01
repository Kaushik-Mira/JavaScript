//? Function Declaration
function functionName(parameters) {
  // Function body
  // Code to be executed
}

function add(a, b) {
  return a + b;
}

//? Function Expression
const functionName = function (parameters) {
  // Function body
};

const add = function (a, b) {
  return a + b;
};

//? Arrow Function
const functionName = (parameters) => {
  // Function body
};

const add = (a, b) => a + b;

//? Anonymous Function
setTimeout(function () {
  console.log("Hello, World!");
}, 1000);

//? Calling Functions
const result = add(5, 3);
console.log(result); // Output: 8

//? Function Parameters and Arguments
// Parameters are placeholders specified in the function definition.
// Arguments are the actual values you pass to the function when calling it.
function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(5)); // Output: 5 (5 * 1)
console.log(multiply(5, 2)); // Output: 10 (5 * 2)

//? Return Statement
// Functions can return values using the return statement. If no return is specified, the function returns undefined.
function square(x) {
  return x * x;
}
const result1 = square(4);
console.log(result1); // Output: 16

//FIXME:Summary
// Functions in JavaScript can be defined in multiple ways: declarations, expressions, or arrow functions.
// They can take parameters and return values.
// Functions promote code reuse and organization, making your code cleaner and easier to maintain.

//? IIFE Functions
(function () {
  // Code inside the IIFE
})();
// or using arrow functions
(() => {
  // Code inside the IIFE
})();
// example
(function () {
  var message = "Hello, World!";
  console.log(message); // Output: Hello, World!
})();

//? Purpose and Benefits of IIFE
// Encapsulation: Variables defined within an IIFE cannot be accessed from the outside, preventing potential naming conflicts.
(function () {
  var privateVar = "I am private";
  console.log(privateVar); // Output: I am private
})();

console.log(privateVar); // ReferenceError: privateVar is not defined

// example
const Counter = (function () {
  let count = 0; // Private variable

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    getCount: function () {
      return count;
    },
  };
})();

console.log(Counter.increment()); // Output: 1
console.log(Counter.increment()); // Output: 2
console.log(Counter.getCount()); // Output: 2

//? Functions argument object
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i]; // Access each argument
  }
  return total;
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(5, 10, 15, 20)); // Output: 50

// example
function logArgs() {
  console.log(arguments);
}

logArgs(1, "hello", true); // Output: [1, 'hello', true]

//? Using with Rest Parameters: The arguments object can be somewhat replaced by using rest parameters (introduced in ES6), which provide a more elegant and modern way to handle variable arguments.
function sum(...args) {
  return args.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6

//? Scope and Function Stack
// Global Scope:
// Variables declared outside of any function have global scope and can be accessed from anywhere in the code.
let globalVar = "I am global";

function showGlobal() {
  console.log(globalVar); // Accessible here
}

showGlobal(); // Output: I am global
console.log(globalVar); // Output: I am global

// Function Scope:
// Variables declared within a function are only accessible inside that function. They cannot be accessed from outside.
function myFunction() {
  let localVar = "I am local";
  console.log(localVar); // Accessible here
}

myFunction(); // Output: I am local
console.log(localVar); // ReferenceError: localVar is not defined

// Block Scope:
// Introduced in ES6, variables declared with let and const inside a block (e.g., within {}) are limited to that block's scope.
{
  let blockVar = "I am block scoped";
  console.log(blockVar); // Accessible here
}

console.log(blockVar); // ReferenceError: blockVar is not defined

// Function Scope and Lexical Scope
// Functions in JavaScript form a lexical scope. This means that a function's scope is determined by its position in the source code. Inner functions can access variables declared in their outer functions.
function outerFunction() {
  let outerVar = "I am from outer function";

  function innerFunction() {
    console.log(outerVar); // Accessing outer function variable
  }

  innerFunction(); // Output: I am from outer function
}

outerFunction();

// Function Stack(Call Stack)
// How It Works:
// When a function is invoked, it is pushed onto the call stack.
// When the function execution completes (when it hits a return statement or the end of the function), it is popped off the stack.
function firstFunction() {
  secondFunction();
  console.log("First function finished");
}

function secondFunction() {
  console.log("Second function is running");
}

firstFunction();

// Error Handling and Stack Overflow
// If a function calls itself (recursion) without a base case to stop, it can lead to a stack overflow, resulting in an error because the call stack exceeds its size limit.

function recursiveFunction() {
  recursiveFunction(); // Calls itself indefinitely
}

// Uncommenting the following line will cause a stack overflow
// recursiveFunction();

//? Global Functions
// eval(string)
//  Evaluates a string as JavaScript code.
console.log(eval("2 + 2")); // Output: 4

// isNan(value)
// Determines whether a value is NaN (Not-a-Number).
console.log(isNaN("Hello")); // Output: true

// parseInt(string, radix)
// Parses a string and returns an integer of the specified radix (base)
console.log(parseInt("10")); // Output: 10

// parseFloat(string)
// Parses a string and returns a floating-point number.
console.log(parseFloat("10.5")); // Output: 10.5

//? String Functions
// String.prototype.charAt(index):
//  Returns the character at the specified index.
const str = "Hello";
console.log(str.charAt(1)); // Output: e

// String.prototype.concat(string1, string2, ...):
// Concatenates two or more strings.
console.log("Hello".concat(" ", "World!")); // Output: Hello World!

// String.prototype.includes(searchString):
// Checks if a string contains another string.
console.log("Hello, World!".includes("World")); // Output: true

// String.prototype.split(separator):
// Splits a string into an array of substrings.
const words = "Hello World".split(" ");
console.log(words); // Output: ['Hello', 'World']

//? Array Functions
// Array.prototype.push(element):
// Adds one or more elements to the end of an array and returns the new length.
const arr = [1, 2, 3];
arr.push(4);
console.log(arr); // Output: [1, 2, 3, 4]

// Array.prototype.pop():
// Removes the last element from an array and returns that element.
const lastElement = arr.pop();
console.log(lastElement); // Output: 4

// Array.prototype.forEach(callback):
// Executes a provided function once for each array element
arr.forEach((num) => console.log(num)); // Output: 1, 2, 3

// Array.prototype.map(callback):
// Creates a new array populated with the results of calling a provided function on every element in the calling array.
const doubled = arr.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6]

//? Object Functions
// Object.keys(object):
// Returns an array of a given object's property names
const obj = { a: 1, b: 2 };
console.log(Object.keys(obj)); // Output: ['a', 'b']

// Object.values(object):
// Returns an array of a given object's property values.
console.log(Object.values(obj)); // Output: [1, 2]

// Object.assign(target, ...sources):
// Copies values from one or more source objects to a target object.
const target = { a: 1 };
const source = { b: 2 };
const returnedTarget = Object.assign(target, source);
console.log(returnedTarget); // Output: { a: 1, b: 2 }

//? Math Functions
// Math.abs(value):
// Returns the absolute value of a number.
console.log(Math.abs(-5)); // Output: 5

// Math.max(...values):
// Returns the largest of zero or more numbers.
console.log(Math.max(1, 3, 2)); // Output: 3

// Math.min(...values):
// Returns the smallest of zero or more numbers.
console.log(Math.min(1, 3, 2)); // Output: 1

// Math.random():
// Returns a pseudo-random number between 0 and 1.
console.log(Math.random()); // Output: Random number between 0 and 1
