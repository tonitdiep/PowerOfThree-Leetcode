// Leetcode 326 Power of Three
// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

/**
 * @param {number} n
 * @return {boolean}
 */
// Input: n = 27
// Output: true
var isPowerOfThree = function(n) {
  // iterative option
    if ((n === 1)) 
        {return true;}
    else if (n < 1)
        {return false;}
    else
        return isPowerOfThree(n/3)
}