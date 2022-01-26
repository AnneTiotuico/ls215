/*
problem:
create a function `anagram` that takes two arguments, a word and an array of words
return an array that contains the words from the words array that are anagrams of the word argument
input- word and array of words
output - array of words

examples:
anagram('listen', ['enlists', 'google', 'inlets', 'banana']);  // [ "inlets" ]
inlets is an anagram of listen, but elists is not since it has an extra s
anagram('listen', ['enlist', 'google', 'inlets', 'banana']);   // [ "enlist", "inlets" ]
inlets is an anagram of listen and so is enlist

data structures:
strings, arrays

algorithm:
iterate through the array of words
check if the word in the array when sorted, is equal to the word argument when sorted
  -split the word in the array and word argument into array of chars then join them back together
return a filtered array of elements that pass the above condition
*/

// function anagram(word, list) {
//   return list.filter(listWord => listWord.split('')
//                                         .sort()
//                                         .join('') === word
//                                         .split('')
//                                         .sort()
//                                         .join(''));
// }

// OR:

function sortWord(word) {
  return [...word].sort().join('');
}

function anagram(word, list) {
  return list.filter(listWord => sortWord(listWord) === sortWord(word));
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]