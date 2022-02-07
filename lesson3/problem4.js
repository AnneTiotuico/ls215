// Problem Description
// You are given a list of numbers in a "short-hand" range where only
// the significant part of the next number is written because we know the
// numbers are always increasing (ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]). Some people use different separators for their ranges
// (ex. "1-3, 1-2", "1:3, 1:2", "1..3, 1..2" represent the same numbers [1, 2, 3, 11, 12]). Range limits are always inclusive.

// Your job is to return a list of complete numbers.

// The possible separators are: ["-", ":", ".."]

// "1, 3, 7, 2, 4, 1" --> 1, 3, 7, 12, 14, 21
// "1-3, 1-2" --> 1, 2, 3, 11, 12
// "1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
// "104-2" --> 104, 105, ... 112
// "104-02" --> 104, 105, ... 202
// "545, 64:11" --> 545, 564, 565, .. 611


/*
Problem:
given a list of numbers in "short-hand" in string form, return an array of complete numbers.


rules/requirements-
short-hand numbers can be written with different separators ('-', ':', '..')
short-hand range means only the significant part of the next number is written since we know the numbers are always increasing
complete numbers are the full numbers such as 1, 2, 3, 11, 12, 13, etc
range limits are always inclusive
  - 1-3 or 1:3 or 1..3 will include 1 2 and 3
can have multiple ranges (1:5:2)

input  - string of numbers
output - array of numbers


questions
Can we assume that the numbers will always increase from left to right?
How do we handle non string inputs?
How do we handle empty strings?
Can different separators be used in one input string?
Will the input only include digits and separators?
Is there a max range / how many numbers can a range include?
What if the range is the same number on both ends? For ex, 1-1 or 104-104.
  How do we handle these cases?


Examples / test cases
(ex. "1, 3, 7, 2, 4, 1" represents [1, 3, 7, 12, 14, 21]).
we get 1, 3 and 7 since these are all complete numbers from the input and
the number of the left is less than the number on the right
2 becomes 12 since 2 is less than 7 (we prepend a 1)
4 becomes 14 since 4 is greater than 2 (continue to prepend a 1)
1 becomes 21 since 1 is less than 2 (we prepend a 2)

(ex. "1-3, 1-2", "1:3, 1:2", "1..3, 1..2" represent the same numbers [1, 2, 3, 11, 12])
all three of these syntaxes even with differing separators, represent the same numbers
we get 1, 2, and 3 since ranges are inclusive and so far the numbers are all increasing
the next range is 1-2, this is inclusive which means 2 numbers since the first num
in the range is less than the previous number we prepend a 1, the next number is greater than the
num on the left so we continue to prepend 1

"1:5:2" --> 1, 2, 3, 4, 5, 6, ... 12
- get 1-5 since we start with first num and increase by 1 until we reach the second num
- get 5-12 since we start with 5 and increase by 1 until we reach a number that ends in 2
    - stop when num % 10 === 2, in this case 12 % 10

"545, 64:11" --> 545, 564, 565, .. 611
- get 545 since this is already a whole number
- 564-611 since 64 is less than 45 we just prepend a 5 to 64 and increase by 1 until we reach a
  number that ends in 11
    - stop when num % 100 === 11, in this case 611 % 100



happy paths:
console.log(completeNumbers('1, 3, 7, 2, 4, 1'));  // [1, 3, 7, 12, 14, 21]
console.log(completeNumbers('1-3, 1-2'));          // [1, 2, 3, 11, 12]
console.log(completeNumbers('1:3, 1:2'));          // [1, 2, 3, 11, 12]
console.log(completeNumbers('1..3, 1..2'));        // [1, 2, 3, 11, 12]
console.log(completeNumbers('1:5:2'));             // [1, 2, 3, 4, 5, 6, ... 12]
console.log(completeNumbers('104-2'));             // [104, 105, ... 112]
console.log(completeNumbers('104-02'));            // [104, 105, ... 202]
console.log(completeNumbers('545, 64:11'));        // [545, 564, 565, .. 611]
console.log(completeNumbers('1'));                 // [1]

edge cases:
console.log(completeNumbers(''));                  // []
console.log(completeNumbers([]]));                 // []
console.log(completeNumbers(undefined));           // []
console.log(completeNumbers(null));                // []
console.log(completeNumbers('abc'));               // []
console.log(completeNumbers('a1, 3, 4, 1s'));      // []
console.log(completeNumbers('one, two'));          // []
console.log(completeNumbers('1-3, 1*2'));          // []
console.log(completeNumbers('..1.., 3.., 7..'));   // []
console.log(completeNumbers('1--2, 3.., 7..'));    // []


Data Structures
strings (input)
array (output)
numbers (elements in output)

Algorithm
(assuming all invalid input will just return an empty array)
- guard clauses-use helper method `validInput` (see below)
  - if `validInput` returns false, return empty array `[]`
  - if `validInput` returns true, continue

- initialize variable `resultArr` to empty array `[]`? (if we don't use reduce)
- split string into array, split on commas followed by a space `, ` ("1-3, 1-2" => ['1-3', '1-2'])
- iterate through the array (reduce? with initial value has empty array `[]`)
  - check if the current number includes a separator
    - if yes, invoke helper method `expandRange`
    - if no, push the current number converted as Number into the resulting array


- helper method `validInput` that takes a value as input
  - if value is 'string' type and only matches digits 0-9 and separators '-', ':', '..'
    - if yes, return true
    - if no, return false

- helper method `expandRange` that takes in 2 args, the current num and previous num as strings (default previous num to '0')
  - initialize `result` variable to empty array `[]`
  - initialize `modulo` variable to `10`
  - initialize `prepended` variable to first number of previous num
  - split current num into an array, split on separator `shortHandRange` '1-3' => [1, 3]
    - get the first number using `getNextNum` and push into `result` in Number form
    - increment the Number(first number) by 1
      - check if sum % `modulo` is less than or equal to the second num in shortHandRange
        - if yes, push into `result`
        - if no, return result

- helper method `getFirstNum` that takes in a current num and previous num
  - initialize `prepended` variable to first number of previous num
  - check if first Number(current num) in `shortHandRange` is greater than Number(previous num)
    - if yes, return current num
    - if no, prepend with `prepended` and invoke this method again until it finally returns current         num

-check if multiple ranges
    -if yes, break into single ranges and expand use helper `breakToSingleRanges`
      -iterate through each range and invoke `expandRange`
    -if no, expand `expandRange`

- algo for when the number is a range `expandRange`
  - initialize resultRange = []
  - get the first number of the range,
  - check if first num is less than the previous num
    - if yes, prepend the number until we get one that is greater
      - reassign firstnum to new num
    - if no, it is greater push first num into resultRange
  - do a loop that increments first num and pushes sum into resultRange
    - stop when the sum ends with the second number of the range
  - return resultRange



- algo for when it is a multiple range ('1:5:2') `breakToSingleRanges`
  - do a helper method that splits it into one range each [ '1', '5' ], [ '5', '2' ]
  - iterate through sub arrs and invoke `expandRange` on each (transform/map)
  - return transformed array

let str = '1:5:2';
let nums = str.split(':');

let ranges = [];

for (let idx = 0; idx < nums.length - 1; idx++) {
  let numsCopy = nums.slice()
  ranges.push(numsCopy.splice(idx, 2));

}

console.log(ranges) // [ [ '1', '5' ], [ '5', '2' ] ]


high level algo:
check if current num is a range
  -check if it is multiple ranges
    -if yes, break into since ranges and expand
    -if no, expand
check if its less than previous num
return num as is
*/


function invalidInput(value) {
  // return (typeof value !== 'string' || /[^0-9:\-\. ,]/.test(value) || value.length < 1);
  return (typeof value !== 'string' || !/^([0-9]+(-|:|, |\.\.|))+$/.test(value.trim()) || value.length < 1);
}

function prependNum(num, previous) {
  let prepend;
  if (previous.length > 1) {
    prepend = previous.split('').slice(0,1).join('');
  } else {
    prepend = '1';
  }
  while (Number(previous) >= Number(prepend + num)) {
    prepend = String(Number(prepend) + 1);
  }

  return  prepend + num;
}

function isRange(num, previous) {
  if (num.match(/[-:.]+/g).length > 1) {
    return breakToSingleRanges(num).reduce((result, range) => {
      return result.concat(expandSingleRange(range, result.slice(-1)));
    }, []);
  }

  return expandSingleRange(num.split(/[-:.]+/g), previous);
}

function breakToSingleRanges(num) {
  let nums = num.split(/[-:.]+/g);
  let ranges = [];

  for (let idx = 0; idx < nums.length - 1; idx++) {
    let numsCopy = nums.slice();
    let nextRange = numsCopy.splice(idx, 2);

    if (idx !== 0) nextRange[0] = String(Number(ranges.flat()[1]) + 1);
    ranges.push(nextRange);
  }

  return ranges;
}

function expandSingleRange(range, previous) {
  let expanded = [];
  let [firstNum, secondNum] = range;
  if (Number(firstNum) <= Number(previous)) {
    firstNum = prependNum(firstNum, previous);
  }

  expanded.push(firstNum);

  let sum = Number(expanded.slice(-1)[0]);
  while (!String(sum).endsWith(secondNum)) {
    expanded.push(String(sum+1));
    sum = Number(expanded.slice(-1)[0]);
  }

  return expanded;
}

function longHand(strNum) {
  if (invalidInput(strNum)) return [];
  let nums = strNum.split(', ');
  return nums.reduce((result, num) => {
    let previousNum = result.slice(-1)[0];
    if (/-|:|\.\./.test(num)) return result.concat(isRange(num, previousNum));
    if (Number(num) < Number(previousNum)) return result.concat(prependNum(num, previousNum));
    return result.concat(num);
  }, []).map(Number);
}


// happy paths:
console.log(longHand('1, 3, 7, 2, 4, 1'));  // [1, 3, 7, 12, 14, 21]
console.log(longHand('1, 3, 7, 2, 4, 1, 1'));  // [1, 3, 7, 12, 14, 21, 31]
console.log(longHand('1-3'));               // [1, 2, 3]
console.log(longHand('1-3, 1-2'));          // [1, 2, 3, 11, 12]
console.log(longHand('1:3, 1:2'));          // [1, 2, 3, 11, 12]
console.log(longHand('1..3, 1..2'));        // [1, 2, 3, 11, 12]
// console.log(longHand('2-1-3'));             // [2, 3, ... 11, 12, 13]
// console.log(longHand('1:5:2') );             // [ 1,  2, 3, 4,  5, 6 ... 12]
// console.log(longHand('4, 2-1')  );            // [4, 12, 13, .. 21]
// console.log(longHand('104-2')  );             // [104, 105, ... 112]
// console.log(longHand('104-02')  );            // [104, 105, ... 202]
// console.log(longHand('545, 64:11')  );        // [545, 564, 565, .. 611]
// console.log(longHand('1')  );                 // [1]

// edge cases:
// console.log(longHand(''));                  // []
// console.log(longHand([]));                  // []
// console.log(longHand(undefined));           // []
// console.log(longHand(null));                // []
// console.log(longHand('abc'));               // []
// console.log(longHand('a1, 3, 4, 1s'));      // []
// console.log(longHand('one, two'));          // []
// console.log(longHand('1-3, 1*2'));          // []

//Nat
// console.log(longHand("  1, 3, 7, 2, 4, 1 ")); // [1, 3, 7, 12, 14, 21]);
// console.log(longHand("1..3, 0..2")); // [1, 2, 3, 10, 11, 12]);

// console.log(longHand("")); //[]
// console.log(longHand()); //[]
// console.log(longHand(null)); //[]
// console.log(longHand(50)); //[]
// console.log(longHand({})); //[]

// too hard cases (couldn't pass)
// console.log(longHand('..1.., 3.., 7..'));   // []
// console.log(longHand('1--2, 3.., 7:'));     // []





