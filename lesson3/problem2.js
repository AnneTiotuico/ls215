/*
The Luhn formula is a simple checksum formula used to validate a variety of
identification numbers, such as credit card numbers and Canadian Social Insurance Numbers.

The formula verifies a number against its included check digit,
which is usually appended to a partial number to generate the full number.
This number must pass the following test:

Counting from the rightmost digit and moving left, double the value of every second digit
For any digit that thus become 10 or more, subtract 9 from the result
1111 becomes 2121
8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
Add all these digits together
1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
8763 becomes 7733, and 7 + 7 + 3 + 3 is 20
If the total (the checksum) ends in 0 (put another way,
if the total modulo 10 is congruent to 0), then the number is valid according
to the Luhn Formula; else it is not valid. Thus, 1111 is not valid
(as shown above, it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).

Write a program that, given a number in string format, check if it is valid
per the Luhn formula. This should treat, for example, "2323 2005 7766 3554" as valid.
You can ignore all non-numeric characters in the input string.

-------------------------------PEDAC-------------------------------

Problem:
given a string (representing a number), check if it is valid per the Luhn formula

rules/requirements:
- string should contain digits and may contain spaces or other nonnumeric chars
- ignore all non-numeric characters in the input

- start from the rightmost character and move left,
    double the value of every second digit
- for any digit that becomes 10 or more when we double it (multiply by 2),
    subtract 9 from it

input:
  - string (which includes digits and may contain non-numeric chars)
output:
  - boolean (true if valid, false otherwise)

Questions:
If we are ignoring all non-numeric chars, are input strings containing any other char
besides 0-9 still valid inputs?
Do the non-numeric chars, count when determining every second digit?
Do we double every second digit starting from the very end of the string or the end of each n digit chunk?
Do we need to validate the input?
  How do we handle non-string arguments?
  How do we handle an empty string?
  How do we handle no argument being passed in?
  Does the string need to contain a specific # of digits?
Are we checking each 4digit chunk one at a time?
Will the input always be chunks of 4 digits/length of digits will be a multiple of 4?
What if we have a string input is not in a 4digit chunk but its total check sum ends in 0?

Examples/test cases:
(assuming we will start from the end of the string to start of the string
and ignore any nondigits when determining which numbers to double)

1111 => 2121 => invalid/false
- double every second num starting from the right
  (1*2) + 1 + (1*2) + 1

- sum up all the digits
  2 + 1 + 2 + 1  = 6

- if sum end in 0 / total modulo is 0 => valid/true
  6 % 10 = 6 !== 0 => false/invalid checksum


8763 => 7733 valid/true
- double every second num starting from the right
  (8*2) + 7 + (6*2) + 3
  16 + 7 + 12 + 3

- if digit becomes more than 10 after doubling, subtract 9
  (16-9) + 7 + (12-9) + 3
  7 + 7 + 3 + 3

- sum up all the digits
  7 + 7 + 3 + 3 = 20

- if sum end in 0 / total modulo is 0 => valid/true
  20 % 10 = 0 === 0 => true/valid checksum


validNumber("2323 2005 7766 3554"); // true
2323 =>
4 + 3 + 4 + 3 = 14

2005 =>
4 + 0 + 0 + 5 = 9

7766 =>
7*2 + 7 + 6*2 + 6
14 + 7 + 12 + 6
5 + 7 + 3 + 6 = 21

3554 =>
6 + 5 + 10 + 4
6 + 5 + 1 + 4 = 16

14 + 9 + 21 +16 = 60 % 10 === 0 true

5151 5151 51
5*2 + 1 + 5*2 + 1 + 5*2 + 1 + 5*2 + 1 + 5*2 + 1
10 + 1 + 10 + 1 + 10 + 1 + 10 + 1 + 10 + 1
1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 = 10 % 10 === 0

2222
2*2 + 2 + 2*2 + 2
4 + 2 + 4 + 2 = 16

4242
4*2 + 2 + 4*2 + 2
8 + 2 + 8 + 2 = 20

800 36 7473
8 + 0*2 + 0 + 3*2 + 6 + 7*2 + 4 + 7*2 + 3
8 + 0 + 0 + 6 + 6 + 14 + 4 + 14 + 3
8 + 0 + 0 + 6 + 6 + 5 + 4 + 5 + 3 = 37

console.log(validNumber('1111') === false);
console.log(validNumber('8763') === true);
console.log(validNumber('2323 2005 7766 3554') === true);
console.log(validNumber('.2323. 2005 7766 3554.') === true);
console.log(validNumber('8763 8763 8763 8763') === true);
console.log(validNumber('a876a3') === true);
console.log(validNumber('1010') === false);
console.log(validNumber('5151 5151 51') === true);
console.log(validNumber('_5151 5151 51_') === true);
console.log(validNumber('2222') === false);
console.log(validNumber('4242') === true);
console.log(validNumber('678 999 8212') === false);
console.log(validNumber('800 36 7473') === false);
console.log(validNumber('3554   2323  7766  2005 ') === true);
console.log(validNumber('34') === true); //(3*2 + 4 = 6 + 4 = 10 % 10 = 0)


edge cases:
console.log(validNumber('') === false);
console.log(validNumber('abc') === false);
console.log(validNumber([]) === false);
console.log(validNumber({}) === false);
console.log(validNumber(null) === false );
console.log(validNumber(undefined) === false);
console.log(validNumber(true) === false);
console.log(validNumber(NaN) === false);


Data Structures:
- string (input)
- boolean (output)
- numbers (when we have to multiply by 2 and add sum)
- regex (clean the string to only get digits)
- arrays (iterate to determine which digit to double)

Algorithm:
- guard clause, if the input's type is not a string, return false right away
- clean the string `cleanStr` (see below)
- break up the str of digits into an array of digits (['8', '7', '6', '3'])
- reverse the numbers (['3', '6', '7', '8'])
- iterate through the array, transforming each str digit into its number form ([3, 6, 7, 8])
- iterate through the array of numbers with index
  - if the index is even, leave as is
  - if the index is odd, multiply by 2
    - if product is less than 10, leave as is
    - if product is 10 or more, subtract 9
- sum up all the digits
  - either we can sum the numbers as we iterate (reduce),
  - or first map the resulting digits then sum up the transformed array
- get the modulo of the sum
  - if sum % 10 === 0 return true
  - if sum % 10 !== 0 return false


- helper method `cleanStr` to get only the digits from the input string
  - replace any/all chars that aren't a digit with an empty str
    - use regex \D

***(parts my algo initially missed, string input is empty or becomes empty after cleaning)

added functionality:
write a function that can add a check digit to make the number valid per the Luhn formula and return
the original number plus that digit. This should give "2323 2005 7766 3554" in the response to
"2323 2005 7766 355"

"2323 2005 7766 355" => "2323 2005 7766 3554"

"2323 2005 7766 355"
2 + 3*2 + 2 + 3*2 + 2 + 0*2 + 0 + 5*2 + 7 + 7*2 + 6 + 6*2 + 3 + 5*2 + 5
2 + 6 + 2 + 6 + 2 + 0 + 0 + 10 + 7 + 14 + 6 + 12 + 3 + 10 + 5
2 + 6 + 2 + 6 + 2 + 0 + 0 + 1 + 7 + 5 + 6 + 3 + 3 + 1 + 5 = 49
49 % 10 = 9


2*2 + 3 + 2*2 + 3 + 2*2 + 0 + 0*2 + 5 + 7*2 + 7 + 6*2 + 6 + 3*2 + 5 + 5*2
4 + 3 + 4 + 3 + 4 + 0 + 0 + 5 + 14 + 7 + 12 + 6 + 6 + 5 + 10
4 + 3 + 4 + 3 + 4 + 0 + 0 + 5 + 5 + 7 + 3 + 6 + 6 + 5 + 1 = 56
closest num that is a multiple of 10 is 60
60 - 56 = 4
that's why we add 4 the make the number valid
(we know the number being added won't be doubled)

algorithm:
- if `checksum % 10 === 0` in `validNumber` returns false,
  then invoke helper method `addCheckDigit` with `numsReversed` passed in

- prepend `numsReversed` with a 0 so that we can replicate what the length would be with an added
    check digit, save this into variable `newNum`
    -(initialy missed) make sure we are returning the new array with 0 prepended
- extract checksum code from `validNumber` into helper `getChecksum`
- invoke `getChecksum` with `newNum` passed in to get new check sum
- divide checksum by 10 and round then multiply by 10 to get nearest multiple of 10
- subtract checksum from nearest multiple of 10 to get the number we need to add


*/

//code before added functionality

function cleanStr(str) {
  return str.replace(/\D/g, '');
}

function validNumber(value) {
  if (typeof value !== 'string') return false;
  let cleaned = cleanStr(value);
  if (cleaned.length < 1) return false;
  let numsReversed = [...cleaned].reverse().map(Number);

  let checksum =  numsReversed.reduce((sum, num, idx) => {
    if (idx % 2 === 0) return sum + num;
    let product = num * 2;
    return sum + ((product >= 10) ? product - 9 : product);
  });

  return checksum % 10 === 0;
}

// added functionality code:

// function cleanStr(str) {
//   return str.replace(/\D/g, '');
// }

// function getChecksum(arrOfNums) {
//   return arrOfNums.reduce((sum, num, idx) => {
//     if (idx % 2 === 0) return sum + num;
//     let product = num * 2;
//     return sum + ((product >= 10) ? product - 9 : product);
//   });
// }

// function addCheckDigit(invalidNumber) {
//   if (getChecksum(invalidNumber) % 10 === 0) return invalidNumber.reverse().join('')
//   let tempNum = [0].concat(invalidNumber);
//   let checksum = getChecksum(tempNum);
//   let nearestMultiple = Math.round(checksum / 10) * 10;
//   let addedDigit = nearestMultiple - checksum;
//   tempNum.shift();
//   return [addedDigit].concat(tempNum).reverse().join('');
// }

// function validNumber(value) {
//   if (typeof value !== 'string') return false;
//   let cleaned = cleanStr(value);
//   if (cleaned.length < 1) return false;
//   let numsReversed = [...cleaned].reverse().map(Number);
//   let checksum =  getChecksum(numsReversed);

//   return checksum % 10 === 0 || validNumber(addCheckDigit(numsReversed));
// }


/* added functionality test cases
console.log(validNumber('2323 2005 7766 355') == true )// => '2323 2005 7766 3554';
console.log(validNumber('1111') == true )// => '11114';
console.log(validNumber('2324') == true )// => '23242';
console.log(validNumber('8763') === true)// => '8763';
*/

console.log(validNumber('323') === true);
console.log(validNumber('8763') === true);
console.log(validNumber('2323 2005 7766 3554') === true);
console.log(validNumber('.2323. 2005 7766 3554.') === true);
console.log(validNumber('8763 8763 8763 8763') === true);
console.log(validNumber('a876a3') === true);
console.log(validNumber('5151 5151 51') === true);
console.log(validNumber('_5151 5151 51_') === true);
console.log(validNumber('4242') === true);
console.log(validNumber('3554   2323  7766  2005 ') === true);
console.log(validNumber('34') === true); //(3*2 + 4 = 6 + 4 = 10 % 10 = 0)
console.log(validNumber('1111') === false);
console.log(validNumber('1010') === false);
console.log(validNumber('2222') === false);
console.log(validNumber('678 999 8212') === false);
console.log(validNumber('800 36 7473') === false);



// edge cases:
// console.log(validNumber('') === false);
// console.log(validNumber('abc') === false);
// console.log(validNumber([]) === false);
// console.log(validNumber({}) === false);
// console.log(validNumber(null) === false );
// console.log(validNumber(undefined) === false);
// console.log(validNumber(true) === false);
// console.log(validNumber(NaN) === false);

// // Natalie
// console.log(validNumber('1111')) //=== 'not valid')
// console.log(validNumber('8763')) //=== 'valid')
// console.log(validNumber("2323 2005 7766 3554")) //=== 'valid')
// console.log(validNumber("2323a2005b7766c3554")) //=== 'valid')
// console.log(validNumber('')) //=== 'not valid')
// console.log(validNumber(1111)) //=== 'not valid')
// console.log(validNumber(null)) //=== 'not valid')
// console.log(validNumber({})) //=== 'not valid')
// console.log(validNumber()) //=== 'not valid')

// //Rona
// console.log(validNumber('1111')) //=== 'Invalid' ) // 2121 => 6 => Invalid
// console.log(validNumber('8763')) //=== 'Valid') // 7733 => 20 => Valid
// console.log(validNumber('1234')) //=== 'Invalid') // 1264 => 13 => Invalid
// console.log(validNumber('4589 a%09234')) //=== "Invalid") // 418909264 => 43 => Invalid
// console.log(validNumber('0')) //=== 'Valid')

// console.log(validNumber(false)) //=== "Invalid input")
// console.log(validNumber('')) //=== 'Empty string input')
// console.log(validNumber([])) //=== 'Invalid input')
// console.log(validNumber({})) //=== 'Invalid input')



// //Anne
// console.log(validNumber('1111')) //=== false);
// console.log(validNumber('8763')) //=== true);
// console.log(validNumber('2323 2005 7766 3554')) //=== true);
// console.log(validNumber('.2323. 2005 7766 3554.')) //=== true);
// console.log(validNumber('8763 8763 8763 8763')) //=== true);
// console.log(validNumber('a876a3')) //=== true);
// console.log(validNumber('1010')) //=== false);
// console.log(validNumber('5151 5151 51')) //=== true);
// console.log(validNumber('_5151 5151 51_')) //=== true);
// console.log(validNumber('2222')) //=== false);
// console.log(validNumber('4242')) //=== true);
// console.log(validNumber('678 999 8212')) //=== false);
// console.log(validNumber('800 36 7473')) //=== false);
// console.log(validNumber('3554   2323  7766  2005 ') )//=== true);
// console.log(validNumber('34') )//=== true); //(3*2 + 4 = 6 + 4 = 10 % 10 = 0)


// // edge cases:
// console.log(validNumber('')) //=== false);
// console.log(validNumber('abc')) //=== false);
// console.log(validNumber([])) //=== false);
// console.log(validNumber({})) //=== false);
// console.log(validNumber(null)) //=== false );
// console.log(validNumber(undefined)) //=== false);
// console.log(validNumber(true)) //=== false);
// console.log(validNumber(NaN)) //=== false);

// // Natalie
// console.log(validNumber('1111')) //=== 'not valid')
// console.log(validNumber('8763')) //=== 'valid')
// console.log(validNumber("2323 2005 7766 3554")) //=== 'valid')
// console.log(validNumber("2323a2005b7766c3554")) //=== 'valid')
// console.log(validNumber('')) //=== 'not valid')
// console.log(validNumber(1111)) //=== 'not valid')
// console.log(validNumber(null)) //=== 'not valid')
// console.log(validNumber({})) //=== 'not valid')
// console.log(validNumber()) //=== 'not valid')

// //Rona
// console.log(validNumber('1111')) //=== 'Invalid' ) // 2121 => 6 => Invalid
// console.log(validNumber('8763')) //=== 'Valid') // 7733 => 20 => Valid
// console.log(validNumber('1234')) //=== 'Invalid') // 1264 => 13 => Invalid
// console.log(validNumber('4589 a%09234')) //=== "Invalid") // 418909264 => 43 => Invalid
// console.log(validNumber('0')) //=== 'Valid')

// console.log(validNumber(false)) //=== "Invalid input")
// console.log(validNumber('')) //=== 'Empty string input')
// console.log(validNumber([])) //=== 'Invalid input')
// console.log(validNumber({})) //=== 'Invalid input')

