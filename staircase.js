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
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {    
  for(let x = n; x > 0; x--)
  {
      //console.log("x = " + x)
      let output = "";
      for(let y = 0; y < x - 1; y++)
      {
        output += " "
      }
      //console.log(output)
      
      for(let y = x; y < n + 1; y++)
      {
        output += "#"
      }
      console.log(output)
  }
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}


/*
     #
    ##
   ###
  ####
 #####
######

*/
