// Description
// Your task is to take arrays of numbers and compress them into ranges.

// The numbers in the array are mostly consecutive. If you convert them as ranges,
// it will save a lot of space. You should write a function that will convert an
// array of numbers into a string. A range, or series of consecutive numbers,
// will be represented as two numbers separated by an underscore, a range of one
// just by the number its self and multiple ranges separated by commas.

// For example,
// The numbers 5, 6, 7, 8 and 9 would be displayed as "5_9"
// The number 6 would just be "6"
// The numbers 3,4,5,6,9 would be "3_6,9"

// Using the above system, you should write two functions:
// toRange - convert an array of numbers to a range string
// toArray - convert a range string back to an array

// Warnings
// The numbers could arrive all jumbled up so you'll need to sort them
// Sometimes the same number may appear more than once, duplicates should be discarded.

// Edge cases
// An empty array should become an empty string if passed to toRange and
// vise versa for the toArray function. Also, ranges of 2 digits will take the
// same space whether they are represented as a sequence or a range. I.e.
// "5,6,8,9".length === "5_6,8_9".length so there will be no compression,
// but represent them as a range anyway for consistency.

/*
toRange function
Problem:
given an array of numbers, (which are mostly consecutive), return a string
representing a range

rules/requirements:
- numbers may be jumbled, so you need to sort them ascending first
- sometimes the same number may appear more than once, duplicates should
be discarded
- empty array should return empty string ''
- ranges of 2 digits will take same space whether as is or in range form,
but represent them in a range anyway
  - for ex. "5,6,8,9".length === "5_6,8_9".length

input: array of integers
output: string representing a range (ranges should be separated with an _,
and numbers/ranges should be separated with commas ,)

Examples/test cases:
console.log(toRange([5, 6, 7, 8, 9]) === '5_9');
- the array is sorted asc
- each num is 1 apart so the result will just be one range
- we start with the min num 5, then end with max num 9, and join them with _

console.log(toRange([6]) === '6');
- single digit, just return the digit in string form

console.log(toRange([3, 4, 5, 6, 9]) === '3_6,9');
- the array is sorted asc
- min is 3 and max is 9
- 3, 4, 5, 6 are all one apart so they get compressed to a range 3_6
- 9 isn't part of a range so we just join it with the range separated by a comma

Data structures:
- array
- numbers
- string

rules for interview?
- don't mutate original array
- there may be invalid inputs

Algorithm:
- initialize `sortedArr` to a copy of arr
  - arr.slice().sort()
- initialize `result` to arr w empty subarr [[]]

- initialize ranges to 0
- iterate through the `sortedArr`

*/


// Should return a string representing the ranges
function toRange(arr) {
  let sortedArr = arr.slice().sort((a, b) => a - b).filter(num => num !== undefined);
  let result = [[]];

  let ranges = 0;
  for (let idx = 0; idx < sortedArr.length; idx++) {
    if (idx === 0) {
      result[ranges].push(sortedArr[idx]);
    } else if (sortedArr[idx] - sortedArr[idx - 1] === 1) {
      result[ranges].push(sortedArr[idx]);
    } else {
      ranges += 1;
      result[ranges] = [];
      result[ranges].push(sortedArr[idx]);
    }
  }

  return result.map(range => {
    let max = Math.max(...range);
    let min = Math.min(...range);
    return (range.length > 1) ? `${min}_${max}` : range[0];
  }).join(',');

}

console.log(toRange([5, 6, 7, 8, 9]) === '5_9');
console.log(toRange([6]) === '6');
console.log(toRange([3, 4, 5, 6, 9]) === '3_6,9');
console.log(toRange([3,4,5,6,9,10,12]) === '3_6,9_10,12');
console.log(toRange([]) === '');
console.log(toRange([5,6,8,9]) === '5_6,8_9');
console.log(toRange([1,2,3,4,5,,,,]) === '1_5');
console.log(toRange([0,1,2,3,]) === '0_3');

const actualString = toRange([3,4,5,6,9]);
console.log(actualString === '3_6,9');


console.log(toRange([5,6,8,9]) === '5_6,8_9');
console.log(toRange([-1, 0, 1, 2, 5]) === '-1_2,5');
console.log(toRange([-10, -9, -8, -7, -6]) === '-10_-6');
console.log(toRange([1, , 2, 3, , 4]) === '1_4');


// took about 29-35 mins
