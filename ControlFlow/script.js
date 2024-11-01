//TODO: 2. Conditional Statements
// These allow the execution of certain blocks of code based on specified conditions.

//? if Statement
if (condition) {
  // code to execute if condition is true
}

//? if...else Statement
if (condition) {
  // code if true
} else {
  // code if false
}

//? else if Statement
if (condition1) {
  // code if condition1 is true
} else if (condition2) {
  // code if condition2 is true
} else {
  // code if both conditions are false
}

//? switch Statement
// Used for multiple conditions.
switch (expression) {
  case value1:
    // code to execute if expression equals value1
    break;
  case value2:
    // code to execute if expression equals value2
    break;
  default:
  // code to execute if none of the cases match
}

//?  Loops
// Loops allow code to be executed repeatedly based on a condition.
//FIXME: for loop
for (initialization; condition; increment) {
  // code to execute repeatedly
}

//FIXME: while loop
while (condition) {
  // code to execute while condition is true
}

//FIXME: do...while loop
do {
  // code to execute
} while (condition);

//? Break and Continue
// break: Exits the loop or switch statement.
// continue: Skips the current iteration and moves to the next one.
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // exits loop when i is 5
  }
}

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue; // skips the rest of the loop when i is 5
  }
  // other code
}

//? 5. Error Handling
// Use try...catch to handle errors gracefully.
try {
  // code that may throw an error
} catch (error) {
  // code to handle the error
} finally {
  // code that runs regardless of an error occurring
}
