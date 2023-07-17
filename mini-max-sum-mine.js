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
    let miniSum = 0
    let maxSum = 0
    
    for(let x = 0; x < arr.length; x++)
    {
        let sum = 0
        for(let y = 0; y < arr.length; y++)
        {
            if(x != y)
            {
                sum += arr[y]
            }
        }
        
        //console.log(sum)
        
        if(x == 0)
        {
            miniSum = sum;
        }
        
        if(sum > maxSum)
        {
            maxSum = sum
        }
        
        if(sum < miniSum)
        {
            miniSum = sum;
        }
    }
    
    console.log(miniSum, maxSum)

}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
