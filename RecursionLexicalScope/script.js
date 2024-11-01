//TODO: 1. Recursion
//? Recursion is a programming technique where a function calls itself in order to solve a problem. It typically involves two main components:
// Base Case: A condition under which the recursion stops. It prevents infinite loops and provides a stopping point.
// Recursive Case: The part of the function that calls itself to progress towards the base case.
function factorial(n) {
  if (n === 0) {
    // Base case
    return 1;
  }
  return n * factorial(n - 1); // Recursive case
}

console.log(factorial(5)); // Outputs: 120

//?  Lexical Scoping
// Lexical Scoping refers to the visibility of variables in nested functions. In JavaScript, a function’s scope is determined by its location in the source code, meaning that inner functions have access to variables defined in their outer (enclosing) scopes.
function outerFunction() {
  const outerVariable = "I am from outer scope";

  function innerFunction() {
    console.log(outerVariable); // Accesses outerVariable from outerFunction
  }

  innerFunction();
}

outerFunction(); // Outputs: I am from outer scope

//? 3. Closures
// Closures are functions that retain access to their lexical scope, even when the function is executed outside that scope. This allows the inner function to "remember" the environment in which it was created, which is useful for data encapsulation and maintaining state.
function makeCounter() {
  let count = 0; // count is a private variable

  return function () {
    count++; // Inner function modifies count
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // Outputs: 1
console.log(counter()); // Outputs: 2
console.log(counter()); // Outputs: 3

//FIXME: Summary
// Recursion is a method of solving problems where the function calls itself.
// Lexical Scoping is the way JavaScript defines variable visibility based on where they are declared.
// Closures allow functions to maintain access to their outer scope's variables, enabling data privacy and state management.
