/*
Find Out the given number is "Palindrom" or Not?  (n>=0)

I/O: n = 78987;
O/P: True;

I/O: n = 8668;
O/P: True;

I/O: n = 8;
O/P: True;

I/O: n = 21;
O/P: False;

I/O: n = 367;
O/P: False;

----------------------------------------------------------------
Logial Approach :
Reverse the number and check if the reverse number and orginal number is same or not.If same then return true otherwise false.

n = 367;
rev = 0;

last digit:
n%10
Remaining:
Math.floor(n/10)

reverse:
rev = rev*10 + last digit;
rev = rev*10 + 7;--> 0*10 + 7 = 7;
rev = rev*10 + 6;--> 7*10 + 6 = 76;
rev = rev*10 + 3;--> 76*10 + 3 = 763;

----------------------------------------------------------------

*/

function isPalindrom(num) {
  let rev = 0; // reverse number
  let temp = num;
  /*-------reverse the number--------*/
  while (temp !== 0) {
    let ld = temp % 10; //last digit
    temp = Math.floor(temp / 10);
    rev = rev * 10 + ld;
    // console.log({ld,rev,num});
  }
  // console.log(rev);
  /*------------------------------ */
  return rev === num ? true : false;
}

let number = 78987;
let result = isPalindrom(number);
console.log(result);

/*
387
isPalindrome function:

num: 387
(i)First Iteration:-
temp: 387
ld: 387%10 = 7;
temp: 387/10 = 38;
rev: 0*10 +7 = 7;

(ii)Second Iteration:-
temp: 38
ld: 38%10 = 8;
temp: 38/10 = 3;
rev: 7*10 +8 = 78;

(iii)Third Iteration:-
temp: 3
ld: 3%10 = 3;
temp: 3/10 = 0;
rev: 78*10 +3 = 783;

now temp= 0 ; no further iteration
----
timeComplexity: O(n)
---
*/
