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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let countPos = 0
    let countNeg = 0
    let countZero = 0
    
    let resultArr = []
    
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] > 0)
        {
            countPos += 1;
        }
        else if(arr[i] < 0)
        {
            countNeg += 1
        }
        else{
            countZero += 1;
        }
    }
    
    // console.log(countPos)
    // console.log(countNeg) 
    // console.log(countZero) 
    
    
    console.log( (countPos/arr.length ).toFixed(6) )
    console.log( (countNeg/arr.length ).toFixed(6) )
    console.log( (countZero/arr.length ).toFixed(6) )
    
//    resultArr.push( (countPos/6).toFixed(6) )
//    resultArr.push( (countNeg/6).toFixed(6) )
//    resultArr.push( (countZero/6).toFixed(6) )
   
//    return resultArr;
    

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
