"use strict";

/*
Write a function that takes a string as an argument and returns true if the
string contains properly balanced parentheses, false otherwise.
Parentheses are properly balanced only when '(' and ')' occur in matching pairs,
with each pair starting with '('.
*/


// function isBalanced(string) {
//   let opening = string.match(/\(/g);
//   let closing = string.match(/\)/g);
//   if (opening && closing && (opening.length - closing.length) === 0) {
//   return true
//   }
//   return false;
// }

function isBalanced(string) {
  let count = 0;
  let balanced = true;
  [...string].forEach(char => {
    if (count < 0) {
      balanced = false;
    } else if (char === '(') {
      count += 1;
    } else if (char === ')') {
      count -= 1;
    }
  });

  return (typeof balanced === 'number' && balanced % 2 === 0) ;
}

// function isBalanced(string) {
//   let count = 0;
//   for (let idx = 0; idx < string.length; idx++) {
//     if (string[idx] === '(') {
//       count += 1;
//     } else if (string[idx]  === ')') {
//       count -= 1;
//     } else if (count < 0) {
//       return false;
//     }
//   }
//   return count === 0;
// }

// function isBalanced(string) {
//   let count = 0;
//   for (let idx = 0; idx < string.length; idx++) {
//     if (string[idx] === '(') count += 1;
//     if (string[idx]  === ')') count -= 1;
//     if (count < 0) return false;
//   }

//   return count === 0;
// }


console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false