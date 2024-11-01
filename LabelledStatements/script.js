outerLoop: for (let i = 0; i < 3; i++) {
  innerLoop: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outerLoop; // Breaks out of the outer loop
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}

//? Explanation
// Labels: outerLoop and innerLoop are the labels for the respective for loops.
// Break Statement: When the condition i === 1 && j === 1 is met, the break outerLoop; statement will exit the outer loop, even though it is within the inner loop.

//? Use Cases
//FIXME: Labelled statements are particularly useful in the following scenarios:

// Breaking out of multiple nested loops: As shown in the example, you can break out of an outer loop from within an inner loop.
// Controlling flow in complex control structures: In situations where you have multiple levels of nested loops or conditionals, labels can help manage execution flow.
