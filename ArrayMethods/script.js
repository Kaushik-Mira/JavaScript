//TODO: 1. push()
// Adds one or more elements to the end of an array and returns the new length of the array.
//? Syntax:
array.push(element1, element2, ...e, elementN);
// Example
let ar1 = [1, 2, 3];
ar1.push(4); // [1, 2, 3, 4]

//TODO: 2. pop()
// Removes the last element from an array and returns that element.
//? Syntax:
array.pop();
// Example
let ar2 = [1, 2, 3];
ar2.pop(); // [1, 2], returns 3

//TODO: 3. shift()
// Removes the first element from an array and returns it. This method changes the length of the array.
//? Syntax:
array.shift();
// Example
let arr3 = [1, 2, 3];
arr3.shift(); // [2, 3], returns 1

//TODO: 4. unshift()
// Adds one or more elements to the beginning of an array and returns the new length of the array.
//? Syntax:
array.unshift(element1, element2, ...e, elementN);
// Example
let ar4 = [1, 2, 3];
ar4.unshift(0); // [0, 1, 2, 3]

//TODO: 5. concat()
// Merges two or more arrays. This method does not change the existing arrays, but instead returns a new array.
//? Syntax
let newArray1 = array1.concat(array2, array3, ...a, arrayN);
// Example
let arr1 = [1, 2];
let arr2 = [3, 4];
let result1 = arr1.concat(arr2); // [1, 2, 3, 4]

//TODO: 6. splice()
// Changes the content of an array by removing or replacing existing elements and/or adding new elements in place.
//? Syntax
array.splice(start, deleteCount, item1, item2, ...i, itemN);
// Example
let ar5 = [1, 2, 3, 4];
ar5.splice(1, 2, "a", "b"); // [1, 'a', 'b', 4]

//TODO: 7. slice()
// Returns a shallow copy of a portion of an array into a new array, without modifying the original array.
//? Syntax
let newArray2 = array.slice(begin, end);
// Example
let arr5 = [1, 2, 3, 4];
let result2 = arr5.slice(1, 3); // [2, 3]

//TODO: 8. forEach()
// Executes a provided function once for each array element.
//? Syntax
array.forEach(function (currentValue, index, arr) {
  /* code */
});
// Example
let arr6 = [1, 2, 3];
arr6.forEach(function (element) {
  console.log(element);
});

//TODO: 9. map()
// Creates a new array populated with the results of calling a provided function on every element in the calling array.
//? Syntax
let newArray3 = array.map(function (currentValue, index, arr) {
  /* code */
});
// Example
let arr8 = [1, 2, 3];
let result3 = arr8.map(function (element) {
  return element * 2;
}); // [2, 4, 6]

//TODO: 10. filter()
// Creates a new array with all elements that pass the test implemented by the provided function.
//? Syntax
let newArray = array.filter(function (currentValue, index, arr) {
  /* code */
});
// Example
let arr9 = [1, 2, 3, 4];
let result4 = arr9.filter(function (element) {
  return element > 2;
}); // [3, 4]

//TODO: 11. reduce()
// Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
//? Syntax
let result5 = array.reduce(function (accumulator, currentValue, index, arr) {
  /* code */
}, initialValue);
// Example
let arr11 = [1, 2, 3, 4];
let result6 = arr11.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0); // 10

//TODO: 12. find()
// Returns the value of the first element in the array that satisfies the provided testing function. Otherwise, it returns undefined.
//? Syntax
let element = array.find(function (currentValue, index, arr) {
  /* code */
});
// Example
let arr12 = [1, 2, 3, 4];
let result7 = arr12.find(function (element) {
  return element > 2;
}); // 3

//TODO: 13. findIndex()
// Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1.
//? Syntax
let index1 = array.findIndex(function (currentValue, index, arr) {
  /* code */
});
// Example
let arr13 = [1, 2, 3, 4];
let result8 = arr13.findIndex(function (element) {
  return element > 2;
}); // 2

//TODO: 14. every()
// Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
//? Syntax
let result9 = array.every(function (currentValue, index, arr) {
  /* code */
});
let arr14 = [1, 2, 3];
let result10 = arr14.every(function (element) {
  return element > 0;
}); // true

//TODO: 15. some()
// Tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
//? Syntax
let result0 = array.some(function (currentValue, index, arr) {
  /* code */
});
// Example
let arr16 = [1, 2, 3];
let result01 = arr16.some(function (element) {
  return element > 2;
}); // true

//TODO: 16. includes()
// Determines whether an array contains a certain value, returning true or false as appropriate.
//? Syntax
let result_ = array.includes(valueToFind, start);
let arr_ = [1, 2, 3];
arr_.includes(2); // true

//TODO: 17. indexOf()
// Returns the first index at which a given element can be found in the array, or -1 if it is not present.
//? Syntax
let index = array.indexOf(searchElement, fromIndex);
let _arr = [1, 2, 3];
let _result = _arr.indexOf(2); // 1

//TODO: 18. join()
// Joins all elements of an array into a string, separated by a specified separator string.
//? Syntax
let str = array.join(separator);
let arr$ = [1, 2, 3];
let result = arr$.join("-"); // "1-2-3"

//TODO: 19. reverse()
// Reverses the elements of an array in place. The first array element becomes the last, and the last becomes the first.
//? Syntax
array.reverse();
let arr$1 = [1, 2, 3];
arr$1.reverse(); // [3, 2, 1]

//TODO: 20. sort()
// Sorts the elements of an array in place and returns the sorted array. By default, it sorts alphabetically.
//? Syntax
array.sort([compareFunction]);
let arr1$ = [3, 1, 2];
arr1$.sort(); // [1, 2, 3]

//TODO: 21. fill()
// Fills all the elements of an array from a start index to an end index with a static value.
//? Syntax
array.fill(value, start, end);
let arr = [1, 2, 3];
arr.fill(0, 1, 3); // [1, 0,

//TODO: padStart()
// This method pads the current string with another string (or character) at the beginning until the resulting string reaches the specified length.
//? Syntax
string.padStart(targetLength, padString);
// targetLength: The length of the resulting string after padding. If the specified length is smaller than the current string's length, no padding is applied.
// padString (optional): The string to pad the current string with. If omitted, it defaults to a space (' ').
// Example 1 Padding with spaces:
let st = "5";
let result09 = st.padStart(3);
console.log(result09); // "  5"

// Example 2 Padding with a specific character:
let string = "5";
let resulting = string.padStart(3, "0");
console.log(resulting); // "005"

// Example 3 Padding with a string:
let string1 = "123";
let resulting1 = string1.padStart(6, "ab");
console.log(resulting1); // "ab123"

//TODO: padEnd()
// This method pads the current string with another string (or character) at the end until the resulting string reaches the specified length.
//? Syntax
string.padEnd(targetLength, padString);
// targetLength: The length of the resulting string after padding. If the specified length is smaller than the current string's length, no padding is applied.
// padString (optional): The string to pad the current string with. If omitted, it defaults to a space (' ').

// Example 1 Padding with spaces:
let string2 = "5";
let resulting2 = string2.padEnd(3);
console.log(resulting2); // "5  "

// Example 2 Padding with a specific character:
let string3 = "5";
let resulting3 = string3.padEnd(3, "0");
console.log(resulting3); // "500"

// Example 3 Padding with a string:
let string4 = "123";
let resulting4 = string4.padEnd(6, "ab");
console.log(resulting4); // "123aba"

//TODO: split()
// The split() method in JavaScript is used to split a string into an array of substrings, based on a specified separator. The original string remains unchanged.
//? Syntax
string.split(separator, limit);
// separator (optional): Specifies the character, regular expression, or substring that determines where to split the string. If this is omitted or set to an empty string (''), the string is split between each character.
// limit (optional): Specifies the maximum number of substrings to include in the array. Any extra substrings are ignored.

// Example 1 Basic example (splitting by a space):
let s = "Hello World";
let r = s.split(" ");
console.log(r); // ["Hello", "World"]
// Example 2 Splitting by a comma:
let s1 = "apple,banana,orange";
let r1 = s1.split(",");
console.log(r1); // ["apple", "banana", "orange"]
// Example 3 Splitting with a limit:
let s2 = "one, two, three, four";
let r2 = s2.split(", ", 2);
console.log(r2); // ["one", "two"]
// Example 4 Splitting by each character (using an empty string):
let s3 = "Hello";
let r3 = s3.split("");
console.log(r3); // ["H", "e", "l", "l", "o"]
// Example 5 Using a regular expression as a separator:
let s5 = "one1two2three";
let r5 = s5.split(/\d/); // Splits at any digit
console.log(r5); // ["one", "two", "three"]
