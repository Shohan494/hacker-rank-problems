function sockMerchant(n, ar) {
  // Step 1: Create an empty object to store the count of each sock color
  const sockCount = {};

  // Step 2: Initialize the variable 'pairs' to store the total number of pairs
  let pairs = 0;

  // Step 3: Count the occurrences of each sock color in the 'ar' array
  for (let i = 0; i < n; i++) {
    const color = ar[i];

    // If 'color' is already a property in 'sockCount', increment its count by 1
    // Otherwise, set its count to 1 (this is to avoid undefined values)
    if (sockCount[color]) {
      sockCount[color] += 1;
    } else {
      sockCount[color] = 1;
    }
  }

  // Step 4: Calculate the number of pairs for each sock color and add to 'pairs'
  for (const color in sockCount) {
    const colorPairs = Math.floor(sockCount[color] / 2);
    pairs += colorPairs;
  }

  // Step 5: Return the total number of pairs
  return pairs;
}

// Example usage
const n = 9;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const pairCount = sockMerchant(n, ar);
console.log(pairCount);
