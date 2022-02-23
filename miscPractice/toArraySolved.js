/*
Your task is to take a string of ranges and spread them out into individual digits within an array.

The ranges are consecutive. You should write a function that will convert a string of ranges into an array. A range, or series of consecutive numbers, will be represented as two numbers separated by an underscore, a range of one just by the number its self and multiple ranges separated by commas.

For example,
The range '5_9' should return an array [5, 6, 7, 8, 9]
The range '6' would just be [6]
The range '3_6,9' should return an array [3, 4, 5, 6, 9]

Using the above system, you should write a function:
toArray - convert a range string back to an array

Edge cases
An empty string should become an empty array if passed to toArray.

*/

/*
toArray function
Problem:
given a string representing ranges, return an array of numbers


rules/requirements:
- separate ranges (two numbers separated by _) into individual numbers
- leave individual numbers as is
- put all the numbers together in an array and sort them desc

input: str
output: array

Examples/test cases:
const actualArr = toArray('3_6,9') /
console.log(actualArr)      // [3,4,5,6,9]
- 3_6 represents the numbers 3 4 5 6
  - min is 3 max is 6, we need to get all the numbers in between
  - all nums in ranges are 1 apart
- 9 is by itself so we can just leave that as is
- we put all these into an array and they should be in number form

console.log(toArray('5_9'))      // [5, 6, 7, 8, 9]
- 5_9 represents the numbers 5, 6, 7, 8, 9
  - min is 5 max is 9, we need to get all the numbers in between
  - all nums in ranges are 1 apart

console.log(toArray('6'))      // [6]
- 6 will just be 6 within an array


Data structures:
- array
- numbers
- string

rules for interview?
expect invalid input and return empty []
- if str contains anything other than digits commas, spaces or underscores, consider invalid

Algorithm:
- initialize `ranges` to str.split(',')

- iterate through `ranges` with param `range` using map
  - if `range` contains '_'
    - if yes, invoke `separateRange`
      - return string of individual nums separated by ,
    - if no, return range as is
- iterate through transformed `ranges` and convert all to Number using map
- return transformed `ranges`

- helper method `separateRange` takes in str like '3_9'
  - let result = []
  - let min = Number(str[0])
  - let max = Number(str[2])
  - use a for loop starting at `num` = min and stop when equal to max, increment by 1 each time
    - push each num into the result array

  - return result.join(', ')

*/


// Should return an array
function toArray(str) {
  if (str.length < 1) return [];
  let result = [];
  let ranges = str.split(',');
  ranges.forEach(range => {
    if (range.includes('_')) {
      let [min, max] = range.split('_')
      min = Number(min);
      max = Number(max);
      for (let num = min; num <= max; num++) {
        result.push(Number(num));
      }
    } else {
      result.push(Number(range))
    }
  })

  return result
}



const actualArr = toArray('3_6,9')
console.log(actualArr)      // [3,4,5,6,9]

console.log(toArray('5_9'))      // [5, 6, 7, 8, 9]
console.log(toArray('6'))      // [6]
console.log(toArray('3_6,9'))      // [3, 4, 5, 6, 9]
console.log(toArray(''))      // []

console.log(toArray('-2_0'))      // [-2, -1, 0]

console.log(toArray('0_5,7_17,20_31,33_35,37_38,41_63,65_67,69_72,74_99'))

/*

*/