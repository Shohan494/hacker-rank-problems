function miniMaxSum(arr) {
  let minSum = Infinity;
  let maxSum = 0;
  let totalSum = 0;
  
  // Find the total sum and simultaneously update minSum and maxSum
  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
    minSum = Math.min(minSum, arr[i]);
    maxSum = Math.max(maxSum, arr[i]);

    console.log(minSum, maxSum);
  }
  
  // Calculate the final minimum and maximum sums
  const finalMinSum = totalSum - maxSum;
  const finalMaxSum = totalSum - minSum;
  
  // Print the minimum and maximum sums
  //console.log(finalMinSum, finalMaxSum);
}

// Test the function with sample input
const arr = [1, 2, 3, 4, 5];
miniMaxSum(arr);
