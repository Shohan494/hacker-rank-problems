'use strict';

const fs = require('fs');

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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    let lToright = 0
    let rToleft = 0
    
    for(let i = 0; i < arr.length; i++)
    {
        for(let j = 0; j < arr.length; j++)
        {
            // logic is left to right matrix position i, j is the same
            if(i == j)
            {
                lToright += arr[i][j]
            }

            // logic is right to left matrix position i + j is always (matrix.length - 1)
            if (i + j + 1 == arr.length)
            {

                rToleft += arr[i][j]
            }
        }
    }
    
    let result = lToright - rToleft
    if (result < 0) {
        return -result;
    }
    
    return result;

}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
