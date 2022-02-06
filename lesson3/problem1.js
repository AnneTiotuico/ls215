/*
Write a program that cleans up user-entered phone numbers so that they can be
sent as SMS messages. Other than digits, the number may also contain special
character such as spaces, dash, dot, and parentheses that should be ignored.

The rules are as follows:

If the phone number is less than 10 digits, assume that it is a bad number.
If the phone number is 10 digits, assume that it is good.
If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
If the phone number is 11 digits and the first number is not 1, then it is a bad number.
If the phone number is more than 11 digits, assume that it is a bad number.

For bad numbers, just a return a string of 10 0s.

Problem:
given a string of characters, return a cleaned string that represents a valid number

rules
input string can contain integers(digits/whole numbers), spaces, dashes, dots, parentheses
these should be ignored
return a string of all digits 0-9

Bad numbers:
less than 10 digits
more than 11 digits
11 digits and first number is NOT 1
*return string of 10 0s if bad number

Good numbers:
10 digits exactly
11 digits and the first is 1 we can trim to get the last 10 digits
*return string of the (last) 10 digits

input - string of characters
output - string of 10 digits (either digits 0-9 or all 0s)

Questions:
Do we need to worry about inputs that aren't strings?
(null, undefined, booleans, functions, objects, arrays, numbers)
How do we handle an empty string?
Do we ignore anything that isn't a digit?
Will the input string ONLY contain digits with spaces, dashes, dots and parentheses?
How do we handle no argument being passed in? Should we set a default?
Can the 10 digits be any integer 0-9?
What if the input is a string of 10 0s?

examples/test cases:
(assuming input will always be a string that only contains 0-9, spaces, dashes, dots and parentheses)
formatNumber('123');            // '0000000000' (bad number, less than 10 digits)
formatNumber('1234567890');     // '1234567890' (good number, 10 digits)
formatNumber('12345678901);     // '2345678901' (good number, trim 1 and use last 10 digits)
formatNumber('42345678901');    // '0000000000' (bad number, 11 digits doesnt start with 1)
formatNumber('123456789111');   // '0000000000' (bad number, more than 11 digits)
formatNumber(' -,()');          // '0000000000' (bad number, less than 10 digits)
formatNumber('(123)-500-8888'); // '1235008888' (good number, ignore special chars, 10 digits)
formatNumber('.123.500-8000');  // '1235008888' (good number, ignore special chars, 10 digits)
formatNumber('1-2-3-4-5-6-7-8-9-0') // '1234567890' (good number, ignore special chars, 10 digits)
formatNumber(' 712 500 7890 ')      // '7125007890' (good number, ignore special chars, 10 digits)
formatNumber('1- 712 500. 7890) ')      // '7125007890' (good number, ignore special chars, trim first 1)

Edge cases:
formatNumber('')                // '0000000000' (bad number, less than 10 digits)
formatNumber(null)              // '0000000000' (bad number, less than 10 digits)
formatNumber('abcdefghij')       // '0000000000' (bad number, less than 10 digits)
formatNumber()                  // '0000000000' (bad number, less than 10 digits)
formatNumber([])                // '0000000000' (bad number, less than 10 digits)
formatNumber('0000000000')      // '0000000000' (considered bad number even if it is 10 digits? idk)


data structures:
strings (input: '0-9', ' ', '-', '.', '(', ')' ) (output: '0-9')
regex (to clean string)

algorithm:
check to see if input is a string, if not then return '0000000000'
clean the string using regex to only get the digits
get the length of the cleaned string
if less than 10, return '0000000000'
if more than 11 digits, return '0000000000'
if 11 digits, check if first number is 1
  if no, return '0000000000'
  if yes, trim the 1 then return result of 10 digits
if 10 digits, return the 10 digits

*/
function formatNumber(str) {
  let badNumber = '0000000000';
  if (typeof str !== 'string') return badNumber;
  let cleanedNum = str.replace(/[\D]/g, '');
  let cleanedLength = cleanedNum.length;

  // if (cleanedLength < 10 || cleanedLength > 11) return '0000000000';
  if (cleanedLength === 10) return cleanedNum;
  if (cleanedLength === 11 && cleanedNum[0] === '1') {
    return cleanedNum.substring(1);
  } else {
    return badNumber;
  }
}


console.log(formatNumber('123'));  // '0000000000' (bad number, less than 10 digits)
console.log(formatNumber('1234567890'));     // '1234567890' (good number, 10 digits)
console.log(formatNumber('12345678901'));     // '2345678901' (good number, trim 1 and use last 10 digits)
console.log(formatNumber('42345678901'));    // '0000000000' (bad number, 11 digits doesnt start with 1)
console.log(formatNumber('123456789111'));   // '0000000000' (bad number, more than 11 digits)
console.log(formatNumber(' - .()'));          // '0000000000' (bad number, less than 10 digits)
console.log(formatNumber('(123)-500-8888')); // '1235008888' (good number, ignore special chars, 10 digits)
console.log(formatNumber('.123.500-8000.'));  // '1235008000' (good number, ignore special chars, 10 digits)
console.log(formatNumber('1-2-3-4-5-6-7-8-9-0')); // '1234567890' (good number, ignore special chars, 10 digits)
console.log(formatNumber(' 712 500 7890 '));      // '7125007890' (good number, ignore special chars, 10 digits)
console.log(formatNumber('1- 712 500. 7890) ')); // '7125007890' (good number, ignore special chars, trim first 1)
console.log(formatNumber(''));                // '0000000000' (bad number, less than 10 digits)
console.log(formatNumber(''));                // '0000000000' (bad number, less than 10 digits)
console.log(formatNumber(null));              // '0000000000' (bad number, less than 10 digits)
console.log(formatNumber('abcdefghij'));      // '0000000000' (bad number, less than 10 digits)
console.log(formatNumber());                  // '0000000000' (bad number, less than 10 digits)
console.log(formatNumber([]));                // '0000000000' (bad number, less than 10 digits)
console.log(formatNumber('0000000000'));      // '0000000000' (considered bad number even if it is 10 digits? idk)


console.log(formatNumber('123') === '0000000000');  //  true
console.log(formatNumber('1234567890') === '1234567890');     //  true
console.log(formatNumber('12345678901') === '2345678901');     //  true
console.log(formatNumber('42345678901') === '0000000000');    // true
console.log(formatNumber('123456789111') === '0000000000');   //  true
console.log(formatNumber(' - .()') === '0000000000');          //  true
console.log(formatNumber('(123)-500-8888') === '1235008888'); // true
console.log(formatNumber('.123.500-8000.') === '1235008000');  //  true
console.log(formatNumber('1-2-3-4-5-6-7-8-9-0') === '1234567890'); // true
console.log(formatNumber(' 712 500 7890 ') === '7125007890');      // true
console.log(formatNumber('1- 712 500. 7890) ') === '7125007890'); //  true
console.log(formatNumber('') === '0000000000');                //  true