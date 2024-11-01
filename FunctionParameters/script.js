//?  Defining Function Parameters
function greet(name) {
  console.log("Hello, " + name + "!");
}

//? passing arguments
greet("Alice");

//?  Default Parameters
function greet(name = "Guest") {
  console.log("Hello, " + name + "!");
}

greet(); // Output: Hello, Guest!

//? Rest parameters
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10

//? Destructing parameters
// for object
function displayUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

displayUser({ name: "Bob", age: 30 }); // Output: Name: Bob, Age: 30

// for array
function printColors([first, second]) {
  console.log(`First: ${first}, Second: ${second}`);
}

printColors(["Red", "Blue"]); // Output: First: Red, Second: Blue

//? Variadic Functions
function showArgs() {
  for (let arg of arguments) {
    console.log(arg);
  }
}

showArgs(1, "hello", true); // Output: 1, hello, true
