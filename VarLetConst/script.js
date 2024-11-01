//TODO: 1. var
// Scope: Function-scoped. Variables declared with var are limited to the function they are defined in, or globally if defined outside a function.
// Hoisting: var declarations are hoisted to the top of their scope, meaning they can be accessed before they are defined (but will be undefined until the declaration is encountered).
// Reassignability: Can be reassigned and updated.
var x = 5;
x = 10; // No problem
//? Example with hoisting
console.log(a); // undefined (because of hoisting)
var a = 10;

//TODO: 2. let
// Scope: Block-scoped. Variables declared with let are limited to the block (e.g., {}) they are defined in.
// Hoisting: let is hoisted, but not initialized. You cannot access a let variable before its declaration (this is known as the Temporal Dead Zone).
// Reassignability: Can be reassigned, like var.
let y = 5;
y = 10; // Works fine
//? Example with block scope
if (true) {
  let b = 20;
}
console.log(b); // Error: b is not defined

//TODO: 3. const
// Scope: Block-scoped, like let.
// Hoisting: Like let, const is hoisted but not initialized. It is subject to the Temporal Dead Zone.
// Reassignability: const is for constants; once a variable is assigned a value with const, it cannot be reassigned. However, if the const holds an object or array, you can still modify its properties or elements.
const z = 5;
z = 10; // Error: Assignment to constant variable
//? Example with object mutation
const obj = { name: "Alice" };
obj.name = "Bob"; // This is allowed, as we're not reassigning the object itself

//FIXME: Key Differences:
//? Scope:
// var: Function-scoped.
// let and const: Block-scoped.
//? Hoisting://
// var: Hoisted and initialized with undefined.
// let and const: Hoisted but not initialized (Temporal Dead Zone).
//? Reassignability:
// var and let: Can be reassigned.
// const: Cannot be reassigned, but objects/arrays can have their properties/elements modified.
