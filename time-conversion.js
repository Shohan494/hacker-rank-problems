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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let ampm = (s[8] + s[9])
    let HourTime = (s[0] + s[1])
    let restOfThetime = s[2] + s[3] + s[4] + s[5] + s[6] + s[7]
    //console.log(HourTime)
    
    if(ampm == "AM" && HourTime == 12)
    {
        HourTime = "00"
        
    }
    else if(ampm == "PM" && HourTime != 12)
    {
        HourTime = 12 + Number(HourTime)
    }
    // else
    // {
    //     HourTime = HourTime
    // }
    
    return HourTime + restOfThetime

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
