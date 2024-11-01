//TODO: 1. Primitive Types
//? These are basic data types that represent a single value:
// Number: Represents numeric values, both integers and floating-point numbers (e.g., 42, 3.14).
// String: Represents a sequence of characters (e.g., "Hello, World!").
// Boolean: Represents a logical value, either true or false.
// Undefined: A variable that has been declared but has not yet been assigned a value is of type undefined.
// Null: Represents the intentional absence of any object value.
// Symbol: Introduced in ES6, it represents a unique identifier.
// BigInt: A numeric type that can represent integers larger than 2^53 - 1.

//TODO: 2. Objects
//? Objects are collections of key-value pairs, where keys are strings (or Symbols) and values can be of any type (including other objects). Objects can be created using object literals or the new Object()
const person = {
  name: "Alice",
  age: 30,
  isStudent: false,
};

//TODO: 3. Arrays
//? Arrays are ordered collections of values (elements) and can hold any type of data. They are zero-indexed, meaning the first element is at index 0.
const fruits = ["apple", "banana", "cherry"];

//TODO: 4. Sets
//? A Set is a collection of unique values. It can store any type of value, and duplicate values are automatically removed.
const uniqueNumbers = new Set([1, 2, 3, 2, 1]); // {1, 2, 3}

//TODO: 5. Maps
//? A Map is a collection of key-value pairs where keys can be of any type, and the order of entries is maintained. Unlike objects, Maps allow any value to be used as a key.
const map = new Map();
map.set("name", "Bob");
map.set("age", 25);

//TODO: 7. WeakMap
//? A WeakMap is similar to a Map but allows for garbage collection of its keys, which must be objects. This means that if there are no other references to the key object, the entry in the WeakMap can be garbage collected.
const weakMap = new WeakMap();
const obj = {};
weakMap.set(obj, "data");

//FIXME: Summary
// Primitive Types are basic and immutable.
// Objects and Arrays are the foundational structures for complex data.
// Sets and Maps offer more specialized functionalities for unique values and key-value pairs.
// WeakSets and WeakMaps provide memory-efficient options for managing collections of objects.
