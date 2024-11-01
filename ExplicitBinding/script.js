//TODO: 1. call()
// The call() method invokes a function with a specified this value and arguments provided individually.

function greet() {
  console.log(`Hello, my name is ${this.name}`);
}

const person = { name: "Alice" };

// Explicitly bind `this` to `person`
greet.call(person); // Output: Hello, my name is Alice

//TODO: 2. apply()
// The apply() method is similar to call(), but it takes an array of arguments instead of individual arguments.
function introduce(greeting) {
  console.log(`${greeting}, my name is ${this.name}`);
}

const person1 = { name: "Bob" };

// Explicitly bind `this` to `person` and pass arguments as an array
introduce.apply(person1, ["Hi"]); // Output: Hi, my name is Bob

//TODO: 3. bind()
// The bind() method returns a new function that, when called, has its this keyword set to the provided value. It can also take a list of arguments to be prepended to the arguments provided to the new function.
function sayHello() {
  console.log(`Hello, ${this.name}`);
}

const person2 = { name: "Charlie" };

// Create a new function with `this` bound to `person`
const sayHelloToCharlie = sayHello.bind(person2);
sayHelloToCharlie(); // Output: Hello, Charlie

//FIXME: Key Points
//? call() and apply() execute the function immediately with the specified this value.
//? bind() creates a new function that can be invoked later with the specified this value.
//? These methods are essential for controlling function context, especially in scenarios involving callbacks or event handlers.
