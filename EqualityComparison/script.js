//TODO: 1. Loose Equality (==)
// Type Coercion: When you use ==, JavaScript performs type coercion. This means it converts the values being compared to a common type before making the comparison.

console.log(5 == "5"); // true, because '5' is coerced to a number
console.log(0 == false); // true, because false is coerced to 0
console.log(null == undefined); // true, they are considered equal

//TODO: 2. Strict Equality (===)
// No Type Coercion: The === operator checks for both value and type equality. If the types differ, it returns false without trying to convert them.

console.log(5 === "5"); // false, different types (number vs string)
console.log(0 === false); // false, different types (number vs boolean)
console.log(null === undefined); // false, different types (object vs undefined)

//TODO: 3. Special Cases
// NaN: In both cases, NaN (Not a Number) is not equal to itself:

console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

// Object Comparison: When comparing objects (including arrays and functions), both == and === compare references:
const obj1 = { a: 1 };
const obj2 = { a: 1 };
console.log(obj1 == obj2); // false, different references
console.log(obj1 === obj2); // false, different references

//TODO: 1. Strict Equality (===)
// Strict equality checks both the value and the type of the operands. If the values are of different types, it returns false without attempting any type conversion.

//? Examples:

// 1 === 1 returns true
// 1 === '1' returns false (number vs. string)
// null === undefined returns false (different types)
// true === 1 returns false (boolean vs. number)
//TODO: 2. Loose Equality (==)
// Loose equality checks for equality of values, allowing for type coercion. JavaScript will attempt to convert the operands to the same type before making the comparison.

//? Examples:

// 1 == '1' returns true (string is converted to number)
// null == undefined returns true (considered equal)
// 0 == false returns true (false is converted to 0)
// '' == 0 returns true (empty string is converted to 0)
//? Coercion Rules
// When using loose equality, JavaScript follows specific coercion rules, including:

// Number and String: A string is converted to a number if one of the operands is a number.
// Boolean and Number: A boolean is converted to a number (true becomes 1, false becomes 0).
// Null and Undefined: These two are considered equal, but not equal to any other value.
//TODO: Additional Comparisons
// Object Equality: When comparing objects, both === and == check for reference equality, meaning two objects are considered equal only if they reference the same instance.
// NaN: NaN is unique in that NaN === NaN returns false. To check for NaN, you should use isNaN() or Number.isNaN().
// Best Practices
// Prefer using strict equality (===) to avoid unexpected results due to type coercion.
// Use loose equality (==) with caution and only when you are sure that type coercion is intended.
