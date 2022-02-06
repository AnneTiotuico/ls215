// Problem Description
// A collection of spelling blocks has two letters per block, as shown in this list:

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M
// This limits the words you can spell with the blocks to only those words that
//do not use both letters from any given block. You can also only use each block once.

// Write a function that takes a word string as an argument, and returns true if
// the word can be spelled using the set of blocks, or false otherwise.
// You can consider the letters to be case-insensitive when you apply the rules.

/*
Problem:
given a word string, return a boolean, true if the word can be spelled using the set of blocks, false otherwise; case-insensitive

rules/requirements:
- determine if given word can be spelled using set of blocks
- spelling blocks has two letter per block
- you can only use each block once
given blocks:
B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

for ex, so you can't have any words that have both a B and O in it
since they are on the same block

input: string (word)
output: boolean (true/false)

questions:
- Do we need to verify it is a real word?
  - Can it be random letters?
- Do we need to worry about non str arguments?
- How should we handle empty strings?
- How do we handle no argument?
- How do we handle multiple arguments?
- Will other chars besides a-z/A-Z be included? How do we handle those?
- Does the input string need to be at least/most a certain length?
  - Can it be one letter?

Examples / test cases:
isBlockWord('BATCH');      // true
uses each block once:
B:O, N:A, G:T, C:P, H:U

isBlockWord('BUTCH');      // false
B:O, H:U, G:T, C:P, H:U
uses H:U twice

isBlockWord('jest');       // true
case insensitive
J:W R:E F:S G:T

happy cases:
isBlockWord('BATCH');      // true
isBlockWord('BUTCH');      // false
isBlockWord('jest');       // true
isBlockWord('K');       // true
isBlockWord('BaSk');    // true
isBlockWord('MUSIC');   // true
isBlockWord('mutiny');  // true
isBlockWord('quEst');   // true
isBlockWord('Really');  // false
isBlockWord('movie');   // false
isBlockWord('sUsHi');   // false
isBlockWord('cookie');  // false
isBlockWord('BlocK');   // false

assuming we clean str and just keep letters cases:
isBlockWord('_ba sk_');       // true
isBlockWord('_/580K_');       // true
isBlockWord('MuS1C');         // true
isBlockWord('A5');            // true
isBlockWord('.q.u.E.s.t.');   // true
isBlockWord('/Ba  TCH/');     // true
isBlockWord('(Bu - TCH*');    // false
isBlockWord('(bobA123*');     // false
isBlockWord('@tasks*');       // false
isBlockWord('#4{box]');       // false


edge cases:
isBlockWord('');   // false
isBlockWord([]);   // false
isBlockWord({});   // false
isBlockWord(null);   // false
isBlockWord(undefined);   // false
isBlockWord(NaN);   // false
isBlockWord(' ');   // false
isBlockWord(/jest/);   // false


Data Structures:
- string (input)
- boolean (output)
- array/nested arrays
   - (hold letter blocks [['B', 'O'], ['H', 'U']])
   - (break up str into letters)
- regex (to clean string)

Algorithm:
- create a constant for letter blocks in nested subarrays as uppercase letters `blocks`
- validate input, if type is not string, return false
- clean the string through helper `cleanStr` (see below) '/Ba  TCH/' => 'BaTCH'
- split cleaned str into chars/letters ['B', 'a', 'T', 'C', 'H']
  - map through array of letters and uppercase all letters ['B', 'A', 'T', 'C', 'H']
- create variable `uniqueCount` and initialize to 0;
- iterate through array of uppercase letters
  - inner iteration, iterate through a copy of `blocks`, with idx
    - check if current block includes current letter (sub arr)
      - if yes, remove that block from copy of `blocks` and increment `uniqueCount`
      - if no, continue
- check if `uniqueCount` is equal to cleaned str length
  - if yes return true
  - if no, return false


- helper function `cleanStr` that takes string argument
  - replace anything that isn't A-Z/a-z with an empty str ''
  - return cleaned str containing only letters


B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M
*/

// function cleanStr(strOfChars) {
//   return strOfChars.replace(/[^a-z]/gi, '');
// }

// function isBlockWord(wordStr) {
//   const letterBlocks = [ ['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'],
//                         ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'],
//                         ['V', 'I'], ['L', 'Y'], ['Z', 'M'] ];

//   if (typeof wordStr !== 'string') return false;

//   let cleaned = cleanStr(wordStr);
//   if (cleaned.length < 1) return false;

//   let letters = [...cleaned].map(char => char.toUpperCase());
//   let uniqueCount = 0;
//   let blocksCopy = letterBlocks.slice(0);

//   letters.forEach(letter => {
//     blocksCopy.slice(0).forEach((block, idx) => {
//       if (block.includes(letter)) {
//         uniqueCount += 1;
//         blocksCopy.splice(idx, 1);
//       }
//     });
//   });

//   return uniqueCount === cleaned.length;
// }

// function cleanStr(strOfChars) {
//   return strOfChars.replace(/[^a-z]/gi, '');
// }

// function isBlockWord(wordStr) {
//   const letterBlocks = [ ['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'],
//                         ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'],
//                         ['V', 'I'], ['L', 'Y'], ['Z', 'M'] ];

//   if (typeof wordStr !== 'string') return false;

//   let cleaned = cleanStr(wordStr);
//   if (cleaned.length < 1) return false;

//   let letters = cleaned.toUpperCase().split('');
//   let uniqueCount = 0;
//   let blocksCopy = letterBlocks.slice(0);

//   letters.forEach(letter => {
//     blocksCopy.forEach((block, idx) => {
//       if (block.includes(letter)) {
//         uniqueCount += 1;
//         blocksCopy.splice(idx, 1);
//       }
//     });
//   });

//   return uniqueCount === cleaned.length;
// }


function isBlockWord(string) {
  const letterBlocks = [ ['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'],
                         ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'],
                         ['V', 'I'], ['L', 'Y'], ['Z', 'M'] ];
  if (typeof wordStr !== 'string') return false;

  return letterBlocks.every( block => {
    let regex = new RegExp(`[${block.join('')}]`, 'g');
    return (string.match(regex) || []).length <= 1;
  });

}


console.log(isBlockWord('BATCH') === true);      // true
console.log(isBlockWord('BUTCH')  === false);      // false
console.log(isBlockWord('jest') === true);       // true
console.log(isBlockWord('K') === true);          // true
console.log(isBlockWord('BaSk') === true);       // true
console.log(isBlockWord('MUSIC') === true);      // true
console.log(isBlockWord('mutiny') === true);     // true
console.log(isBlockWord('quEst') === true);      // true
console.log(isBlockWord('Really') === false);     // false
console.log(isBlockWord('movie') === false);      // false
console.log(isBlockWord('sUsHi') === false);      // false
console.log(isBlockWord('cookie') === false);     // false
console.log(isBlockWord('BlocK') === false);      // false

// // assuming we clean str and just keep letters cases:
console.log(isBlockWord('_ba sk_') === true);       // true
console.log(isBlockWord('_/580K_') === true);       // true
console.log(isBlockWord('MuS1C') === true);         // true
console.log(isBlockWord('A5') === true);            // true
console.log(isBlockWord('.q.u.E.s.t.') === true);   // true
console.log(isBlockWord('/Ba  TCH/') === true);     // true
console.log(isBlockWord('(Bu - TCH*') === false);    // false
console.log(isBlockWord('(bobA123*') === false);     // false
console.log(isBlockWord('@tasks*') === false);       // false
console.log(isBlockWord('#4{box]') === false);       // false


// // edge cases:
console.log(isBlockWord('') === false);          // false
console.log(isBlockWord([]) === false);          // false
console.log(isBlockWord({}) === false);          // false
console.log(isBlockWord(null) === false);        // false
console.log(isBlockWord(undefined) === false);   // false
console.log(isBlockWord(NaN) === false);         // false
console.log(isBlockWord(' ') === false);         // false
console.log(isBlockWord(/jest/) === false);      // false