//TODO: Key Concepts
//? Exceptions: An exception is an error that occurs during the execution of a program. In JavaScript, exceptions can be thrown explicitly using the throw statement or can occur implicitly due to runtime errors.

//? try...catch Statement: This is the primary construct for handling exceptions in JavaScript.

// try Block: Code that may throw an error is placed inside a try block.
// catch Block: If an error occurs in the try block, control is passed to the catch block, where you can handle the error.

try {
  // Code that may throw an error
  let result = riskyFunction();
} catch (error) {
  // Handle the error
  console.error("An error occurred:", error.message);
}

//? finally Block: An optional finally block can be added after try and catch. This block will execute regardless of whether an exception was thrown or caught, making it useful for cleanup actions.

try {
  // Code that may throw an error
} catch (error) {
  // Handle the error
} finally {
  // Code that runs regardless of the outcome
  console.log("Cleanup actions here.");
}

//? throw Statement: You can create and throw your own exceptions using the throw statement, which can be useful for implementing custom error handling logic.

function checkValue(value) {
  if (value < 0) {
    throw new Error("Value must be non-negative");
  }
  return value;
}

//? Error Objects: JavaScript provides built-in error objects, such as Error, TypeError, ReferenceError, and others, which can be used to represent different types of errors.

try {
  // Code that may throw a TypeError
} catch (error) {
  if (error instanceof TypeError) {
    console.error("Type error occurred:", error.message);
  }
}
