//TODO: 1. Global Context
// In the global execution context (outside of any function), this refers to the global object. In a web browser, this is the window object.

console.log(this); // In a browser, it logs the Window object

//TODO: 2. Function Context
// Inside a regular function, this refers to the global object when not in strict mode.

function showThis() {
  console.log(this);
}
showThis(); // Logs the global object (window in browsers)

//? Example 2
//In strict mode, this will be undefined.
("use strict");
function showThis() {
  console.log(this);
}
showThis(); // Logs undefined

//TODO: 3. Method Context
// When a function is called as a method of an object, this refers to the object that the method is called on.
const obj = {
  name: "Alice",
  greet: function () {
    console.log(this.name);
  },
};
obj.greet(); // Logs 'Alice'

//TODO: 4. Constructor Function Context
// In a constructor function (when using the new keyword), this refers to the newly created instance of the object.
function Person(name) {
  this.name = name;
}
const alice = new Person("Alice");
console.log(alice.name); // Logs 'Alice'

//TODO: 5. Arrow Functions
// Arrow functions do not have their own this. Instead, they lexically bind this, meaning they inherit this from the surrounding context.
const obj1 = {
  name: "Alice",
  greet: () => {
    console.log(this.name);
  },
};
obj1.greet(); // Logs undefined (or the global name)

//TODO: 6. Event Handlers
// In event handlers, this refers to the element that fired the event.

document.getElementById("myButton").addEventListener("click", function () {
  console.log(this); // Logs the button element
});


//TODO: 7. Binding this
// You can explicitly set the value of this using call(), apply(), or bind().
function greet() {
    console.log(this.name);
}
const obj2 = { name: 'Alice' };
greet.call(obj2); // Logs 'Alice'


