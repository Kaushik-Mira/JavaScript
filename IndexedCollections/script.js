//TODO: 1. Arrays
// Definition: Arrays are ordered lists of values that can hold elements of different types (numbers, strings, objects, etc.).
// Indexing: Each element in an array is accessed using a zero-based index. For example, in the array let arr = [10, 20, 30];, arr[0] would return 10.
// Dynamic Size: Arrays can grow or shrink in size. You can add or remove elements using methods like .push(), .pop(), .shift(), and .unshift().
//? Methods: Arrays come with a variety of built-in methods for manipulation, such as .map(), .filter(), .reduce(), .forEach(), etc.

let fruits = ["apple", "banana", "cherry"];
fruits.push("date"); // Adds 'date' to the end
console.log(fruits[1]); // Outputs: banana

//TODO: 2. Typed Arrays
// Definition: Typed arrays provide a way to work with binary data in a more efficient manner. They are arrays of a specific type (e.g., Int8Array, Uint16Array, Float32Array, etc.).
// Use Cases: Typed arrays are especially useful when dealing with binary data, such as in WebGL, audio processing, or when reading data from files.
// Fixed Size: Unlike regular arrays, the size of a typed array is fixed once it is created.

let intArray = new Int16Array(5); // Creates an array of 5 16-bit integers
intArray[0] = 10;
intArray[1] = 20;
console.log(intArray); // Outputs: Int16Array(5) [10, 20, 0, 0, 0]
