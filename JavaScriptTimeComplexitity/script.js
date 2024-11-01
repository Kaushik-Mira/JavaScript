//TODO: Common Time Complexity Classes:
// O(1) (Constant Time): The algorithm takes the same amount of time regardless of the input size.
// O(log n) (Logarithmic Time): The algorithm's time grows logarithmically as the input size increases.
// O(n) (Linear Time): The algorithm's time grows directly in proportion to the input size.
// O(n log n): The algorithm is a combination of linear and logarithmic time.
// O(n²) (Quadratic Time): The algorithm's time grows quadratically as the input size increases.
// Linearithmic Time - 𝑂(𝑛 log 𝑛) This is often seen in efficient sorting algorithms like Merge Sort or Quick Sort.
// Cubic Time - 𝑂(𝑛3): The time complexity grows cubically with the input size. Example: Some matrix multiplication algorithms.
// Exponential Time - 𝑂(2𝑛): The time doubles with each additional input element. This is often seen in brute-force solutions to combinatorial problems. Example: Solving the traveling salesman problem with brute force.
// Factorial Time - 𝑂(𝑛!): The time complexity grows factorially, which is extremely inefficient. Example: Solving the traveling salesman problem optimally using brute force.

//? 1. O(1) Example
// The operation takes a constant amount of time, independent of the input size.
function getFirstElement(arr) {
  return arr[0]; // This operation is O(1)
}

// This function always returns the first element, so the time complexity is O(1).

//? 2. O(n) Example
// If the algorithm has to iterate through the entire array or input, its time complexity will be O(n).
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // Looping through the array
  }
  return sum;
}
// Here, we iterate through every element in the array, so the time complexity is O(n), where n is the number of elements in the array.

//? 3. O(n²) Example
// When you have nested loops, the time complexity typically becomes O(n²) because for each element, you loop over the entire input again.
function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]); // Nested loop
    }
  }
}

// Since there are two nested loops, each iterating over the array, the time complexity is O(n²).

//? 4. O(log n) Example
// Binary search is a common algorithm that has O(log n) time complexity.
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Target found
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Target not found
}
// This algorithm reduces the search space by half each time, so the time complexity is O(log n).

//TODO: Quick Tricks to Estimate Time Complexity
//? Constant loops (for, while):
// Single loop over an array → O(n).
// Nested loops over the same array → O(n²).
// Nested loops with the outer loop reducing the range significantly (e.g., divide by 2) → O(log n).
//? Recursive functions:
// Recursion that halves the input size (e.g., binary search) → O(log n).
// Recursion that branches and splits (like merge sort) → O(n log n).
//? Accessing elements in arrays or objects:
// Accessing by index or key is typically O(1).
// Iterating over the array/object keys → O(n).
