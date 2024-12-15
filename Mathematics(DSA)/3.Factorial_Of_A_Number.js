/*
Factoril Of A Number:(n>=0)

I/P: n = 4
O/P: 24

I/P: n = 6
O/P: 720

I/P: n = 0
O/P: 1

*/

//BEST SOLUTION --->
function Factoarial(number) {
  let Factoarial = 1;
  while (number !== 0) {
    Factoarial = Factoarial * number;
    number = number - 1;
  }
  // for(let i = 2; i <= number;i++){
  //     Factoarial = Factoarial * i
  // }
  return Factoarial;
}

const number = 4;
let result = Factoarial(number);
console.log("solution with loop :", result);

/*
---
Time Complexity: Θ(n)
Space Complexity: Θ(1)
---
*/

function fact(num) {
  if (num === 0) {
    return 1;
  }
  return num * fact(num - 1);
};

let res = fact(5);
console.log("solution with recursion :", res);
/*
fact(4)
->4*fact(3)
->3*fact(2) -> 4*3*fact(2)
->2*fact(1) -> 4*3*2*fact(1)
->1*fact(0) -> 4*3*2*1*fact(0) -> 4*3*2*1*1 =24

---
Time Complexity: Θ(n)
Space Complexity: Θ(1)
---

*/
