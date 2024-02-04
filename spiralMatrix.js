// Case 1: Unearthing the Philosopher's Stone

function calculate_diagonal_sum(grid_size) {
  // Check if the grid size is odd
  if (grid_size % 2 === 0) {
    return "Grid size should be odd.";
  }

  let result = 1;
  let currentNumber = 1;
  let step = 2;

  // Iterate through each matrix layer in the spiral, 3*3 just need 1 iterate
  for (let matrix = 0; matrix < (grid_size - 1) / 2; matrix++) {
    // Iterate through each corner in the current matrix
    for (let corner = 0; corner < 4; corner++) {
      currentNumber += step;
      result += currentNumber;
    }
    // Increase the step size for the next matrix layer
    step += 2;
  }

  return result;
}

// Test Cases
console.log(calculate_diagonal_sum(3)); // Output: 25
console.log(calculate_diagonal_sum(5)); // Output: 101
console.log(calculate_diagonal_sum(7)); // Output: 262
