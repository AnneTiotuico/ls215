/*
Your task is to take a string of ranges and spread them out into individual
digits within an array.

The ranges are consecutive. You should write a function that will convert a
string of ranges into an array. A range, or series of consecutive numbers,
will be represented as two numbers separated by an underscore, a range of
one just by the number its self and multiple ranges separated by commas.

For example,
The range '5_9' should return an array [5, 6, 7, 8, 9]
The range '6' would just be [6]
The range '3_6,9' should return an array [3, 4, 5, 6, 9]

Using the above system, you should write a function:
toArray - convert a range string back to an array

*/
// Should return an array
function toArray(str) {

}

/*
interview rules:
- there may be invalid inputs if input is not a str, return 'Invalid Input'
- dont worry about too many args
- if no arg, return 'Invalid Input'
- if empty str, return empty arr
- nums should be sorted ascending
- can start and end at 0
- can have start and end with negatives
*/

const actualArr = toArray('3_6,9')
console.log(actualArr)      // [3,4,5,6,9]

console.log(toArray('5_9'))      // [5, 6, 7, 8, 9]
console.log(toArray('6'))      // [6]
console.log(toArray('3_6,9'))      // [3, 4, 5, 6, 9]
console.log(toArray(''))      // []

console.log(toArray('-2_0'))      // [-2, -1, 0]

console.log(toArray('0_5,7_17,20_31,33_35,37_38,41_63,65_67,69_72,74_99'))
