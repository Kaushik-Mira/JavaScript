//TODO: Implicit Type Conversion (Type Coercion): This happens automatically when JavaScript expects a certain type of value but receives another. JavaScript attempts to convert the value to the expected type without explicit instructions from the developer.

let result = '5' - 2;  // The string '5' is implicitly converted to a number, result is 3
let concat = '5' + 2;  // The number 2 is implicitly converted to a string, result is '52'
let truthy = !!'hello'; // The string 'hello' is converted to the boolean `true`


//TODO: Explicit Type Conversion: This occurs when a developer intentionally converts a value from one type to another using built-in functions.

//?  String to Number
let num1 = Number('123');  // Converts string '123' to the number 123
let num2 = parseInt('123'); // Also converts string '123' to number, but only the integer part
let num = parseFloat('123.45'); // Converts string to a floating-point number


//? Number to String
let str1 = String(123);  // Converts the number 123 to the string '123'
let str = (123).toString();  // Another way to convert a number to string


//? Boolean Conversion
let bool1 = Boolean(1);  // Converts 1 to true
let bool2 = Boolean(0);  // Converts 0 to false

//FIXME: Type Coercion Rules
//? JavaScript uses a few rules when coercing values implicitly:

// String + anything: If either operand is a string, JavaScript will concatenate the two as strings.
// Subtraction (-), multiplication (*) or division (/): If the operands are not of the same type, JavaScript attempts to convert them to numbers.

//FIXME: Truthy and Falsy Values
//? When converting to boolean, some values are considered falsy, and others are truthy.

// Falsy values: false, 0, "" (empty string), null, undefined, NaN.
// Truthy values: Everything else (non-empty strings, non-zero numbers, objects, etc.).


//TODO: Summary of Explicit Conversion Methods:
// Number(): Converts values to numbers.
// String(): Converts values to strings.
// Boolean(): Converts values to booleans.
// parseInt()/parseFloat(): Convert strings to integers or floats.
