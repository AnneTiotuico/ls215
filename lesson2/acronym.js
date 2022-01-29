"use strict";

/*
Write a function that generates and returns an acronym from a string of words.
For example, the function should return "PNG" for the string
"Portable Network Graphics". Count compound words (words connected with a dash)
as separate words.


algorithm:
split the string by space and dash (-)
from this array of words, get the first letter of each
capitalize those letters
*/

// function acronym(string) {
//   let cleanedStr =  string.replace('-', ' ').split(' ');
//   return cleanedStr.reduce((acr, word) => acr.concat(word[0].toUpperCase()), '');
// }

// function acronym(string) {
//   return string.split(/[- ]/).reduce((acr, word) => acr.concat(word[0].toUpperCase()), '');
// }

function acronym(string) {
  return string.split(/[- ]/).map(word => word[0].toUpperCase()).join('');
}


console.log(acronym('Portable Network Graphics'));                  // "PNG"
console.log(acronym('First In, First Out'));                        // "FIFO"
console.log(acronym('PHP: HyperText Preprocessor'));                // "PHP"
console.log(acronym('Complementary metal-oxide semiconductor'));    // "CMOS"
console.log(acronym('Hyper-text Markup Language'));                 // "HTML"