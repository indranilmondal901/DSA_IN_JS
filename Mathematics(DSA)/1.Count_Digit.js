/*
Count Digit:
[x > 0]

I/P : x = 9235
O/P : 4

I/P : x = 38
O/P : 2

-----------------------------------------------------------------
Logial Approach :

ld = Math.floor(x/10)--- removes the last digit from the given number
x = 9235;
ld = Math.floor(x/10) = Math.floor(923.5) = 923 ---> we have to count the cycle :: no of digits = no of cycles

-----------------------------------------------------------------
*/

function countDigit(x) {
  let numberOfDigits = 0;
  while (x > 0) {
    x = Math.floor(x / 10);
    numberOfDigits++;
  }
  return numberOfDigits;
}

const number = 92005;
let digit = countDigit(number);
console.log(digit);

/*

for example->
x =789
Inside countDigit::::::::===>
    789
First Iteration:
x = 78; numberOfDigits = 1;
Second Iteration:
x = 7; numberOfDigits = 2;
Third Iteration:
x = 0; numberOfDigits = 3

--
TimeComplexity: Θ(d) [d = no of digits] O(n)
--

*/


