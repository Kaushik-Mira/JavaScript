//TODO: 1. JavaScript Classes
// Classes in JavaScript provide a way to create objects and handle inheritance. They are a syntactic sugar over JavaScript's existing prototype-based inheritance and allow for a more familiar object-oriented programming approach. Here’s how classes work:
//? Define a Class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

const dog = new Animal("Dog");
dog.speak(); // Output: Dog makes a noise.

//? Inheritance
class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog1 = new Dog("Rex");
dog1.speak(); // Output: Rex barks.

//TODO: 2. Iterators
// An iterator is an object that enables traversing a collection (like an array or a string) one element at a time. JavaScript uses the iterator protocol, which consists of two methods:

//? next(): Returns an object with value and done properties.
//? Symbol.iterator: A method that returns the default iterator for the object.
const array = [1, 2, 3];
const iterator = array[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

//TODO: 3. Generators
// Generators are a special type of function that can be paused and resumed. They are defined using the function* syntax and can yield multiple values over time. Each time a generator function is called, it returns a generator object.
//? Creating a Generator

function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }


//? Using Generators with Iterators: Generators automatically implement the iterator protocol. You can use them in a for...of loop:
for (const value of numberGenerator()) {
    console.log(value);
}
// Output:
// 1
// 2
// 3


//FIXME: Summary
//? Classes help create structured and reusable code.
//? Iterators allow for custom traversal of collections.
//? Generators provide a way to define iterators more concisely and can yield multiple values, pausing execution between each.
