/*
Orpyx Coding Exercise by Bidyashish Kumar

Runtime:  NodeJs

Time Complexity Big O:  O(1)
Explanation: Since the number of operation is linear its time complexity is linear.

Space Complexity:   O(1)
*/

// Change Input Number 
const INPUT_NUM = 125;

// Function to calculate Most significant number
const maxCloseToTriple = (num) => {
  if (num < 1 || typeof num !== 'number')
    return 'Input positive integer of base 10';

    const numString = num.toString();
    const leastDigit = numString.slice(-1);
    const newNumString = numString.slice(0, -1);
      
    // Move the least significant digit to the most significant position
    const mostDigitString = leastDigit + newNumString;
    return parseInt(mostDigitString)
};

const startTime = new Date();
const maxCloseToTripleOut = maxCloseToTriple(INPUT_NUM);
const endTime = new Date();

console.log(`Most Significant Digit: ${maxCloseToTripleOut}`);
console.log(`Execution time: ${endTime - startTime}ms`);