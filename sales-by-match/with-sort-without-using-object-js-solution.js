function sockMerchant(n, ar) {
  ar.sort((a, b) => a - b); // Sort the array in ascending order
  let pairs = 0;
  let i = 0;

  while (i < n - 1) {
    if (ar[i] === ar[i + 1]) {
      pairs++;
      i += 2; // Move to the next non-paired element
    } else {
      i++; // Move to the next element
    }
  }

  return pairs;
}

// Example usage
const n = 9;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const pairCount = sockMerchant(n, ar);
console.log(pairCount);
