"use strict";

/*
Implement a function that takes a string as an argument and returns a new
string that contains the original string in reverse.
*/

// function reverse(string) {
//   let reversed = [];
//   for (let idx = string.length - 1; idx >= 0; idx--) {
//     reversed.push(string[idx]);
//   }

//   return reversed.join('');
// }

// function reverse(string) {
//   return [...string].reverse().join('');
// }

// function reverse(string) {
//   return [...string].reduceRight((result, char) => {
//     return result.concat(char);
//   }, []).join('');
// }

function reverse(string) {
  return [...string].reduceRight((result, char) => result.concat(char), '');
}

console.log(reverse('hello'));                  // returns "olleh"
console.log(reverse('The quick brown fox'));    // returns "xof nworb kciuq ehT"