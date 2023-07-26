'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    let miniNumber = Infinity
    let maxNumber = 0
    let totalSum = 0
    
    for(let x = 0; x < arr.length; x++)
    {
        totalSum += arr[x];

        if(arr[x] < miniNumber)
        {
          miniNumber = arr[x]
        }

        if(arr[x] > maxNumber)
        {
          maxNumber = arr[x]
        }
    }

    //console.log(miniNumber)
    //console.log(maxNumber)

  const finalMinSum = totalSum - miniNumber;
  const finalMaxSum = totalSum - maxNumber;

  console.log(finalMaxSum, finalMinSum);

}
function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
