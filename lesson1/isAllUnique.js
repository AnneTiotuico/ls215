"use strict";

/*
problem:
create a function `isAllUnique` that takes in a string and returns a boolean
true if all characters are unique, false otherwise
rules- ignore multiple spaces and case differences
     -focus on non space characters without regard to case
input-string
output-boolean

examples:
isAllUnique('The quick brown fox jumped over a lazy dog');  // false
-not all unique characters since several letters are repeated
isAllUnique('123,456,789');                                 // false
we use the `,` character twice
isAllUnique('The big apple');                               // false
we use `p` twice
isAllUnique('The big apPlE');                               // false
we use `p` twice, we ignore case (P and p are the same)
isAllUnique('!@#$%^&*()');                                  // true
all unique characters
isAllUnique('abcdefghijklmnopqrstuvwxyz');                  // true
all unique letters/characters

data structures:
strings, booleans, arrays

algorithm:
create a variable to store the cleaned version of the string
  -get rid of spaces and make lowercase
iterate through the string using a simple for loop
create a regex that is the current character
remove that char and use the result to check if that char still exists in the string
return false if it does, else return true
*/

function isAllUnique(string) {
  let cleanedString = string.toLowerCase().replace(/[ ]/g, '');

  for (let index = 0; index < cleanedString.length; index++) {
    let regex = cleanedString[index];
    if (cleanedString.replace(regex, '').includes(regex)) return false;
  }

  return true;
}

console.log(isAllUnique('The quick brown fox jumped over a lazy dog'));  // false
console.log(isAllUnique('123,456,789'));                                 // false
console.log(isAllUnique('The big apple'));                               // false
console.log(isAllUnique('The big apPlE'));                               // false
console.log(isAllUnique('!@#$%^&*()'));                                  // true
console.log(isAllUnique('abcdefghijklmnopqrstuvwxyz'));                  // true