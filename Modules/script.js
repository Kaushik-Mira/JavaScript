//TODO: 2. Types of Modules
//? ES Modules (ESM): The modern module system introduced in ECMAScript 6 (ES6). It uses import and export syntax.
//? CommonJS: Primarily used in Node.js. It uses require for importing and module.exports for exporting.

// Named Export
// myModule.js
export const myVariable = 42;
export function myFunction() {
  console.log("Hello from myFunction");
}

// Default Export
// myModule.js
const myDefaultFunction = () => {
  console.log("This is the default export");
};
export default myDefaultFunction;

// Importing Named Exports:
// anotherFile.js
import { myVariable, myFunction } from "./myModule.js";

// Importing Default Exports:
// anotherFile.js
import myDefaultFunction from "./myModule.js";
