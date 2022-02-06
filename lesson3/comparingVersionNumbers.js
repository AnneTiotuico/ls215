/*
While version numbers often appear to be decimal numbers, they are, in fact,
a convenient notation for a more complicated number system.
The following are all legal version numbers:

1
1.0
1.2
3.2.3
3.0.0
4.2.3.0

Write a function that takes any two version numbers in this format and
compares them, with the result of this comparison showing whether the first
is less than, equal to, or greater than the second version:

If version1 > version2, we should return 1.
If version1 < version2, we should return -1.
If version1 === version2, we should return 0.
If either version number contains characters other than digits and the . character, we should return null.
Here is an example of version number ordering:

0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

problem:
given two version numbers, compare them using greater than or less than operations
rules:
1
1.0
1.2
3.2.3
3.0.0
4.2.3.0

the above are all valid version numbers

if v1 > v2 return 1
if v1 < v2 return -1
if v1 === v2 return 0
if either version contains chars other than digits and `.` return null

input: strings of numbers and `.` (2 version numbers)
output: number or null (1 or -1 or 0)

examples:
0.1 < 1 return -1
we look at the first digit of each version, 0 and 1 and 1 is greater so second version is bigger

1.0 < 1.1.3 < 1.2
all the first numbers of each version are equal so we check the second number
0 is less than 1 and 2 so it will be the smallest version
next we compare 1 and 2 and 1 is less than 2 so 1.1.3 is the second smallest

1.2.0.0 < 1.18.2 < 13.37
the first 2 numbers have 1 as the first number while the third number is 13
therefore 13.37 is the biggest version
then we compare the second number of the first 2, 2 and 18
18 is bigger so 1.18.2 is the second biggest and 1.2.0.0 is the smallest

data structures:
string (input containing digits and `.` and may contain invalid chars)
number (output 1, -1, 0)
null (output if input has invalid chars)

algorithm:
guard clause that if the input contains anything other than digits or `.` return null
-use regex
split each argument into a string on the `.` so that we can get an array of all the digits
compare the first digit of the first version to the first digit of the second version
if v1's first digit is greater than v2's first digit, return 1
if v1's first digit is less than v1's first digit, return -1
if they are equal, move on to the next digit and continue the comparison process
if the versions are not the same length, save the longest into a variable
save shortest to a variable
add 0's to shortest to make lengths equal
use a simple for loop to loop x times depending on the longest length
if we never return -1 or 1, return 0
*/

function invalidVersion(version) {
  return !(/^\d(\.?\d+)*$/.test(version));
}

function compareVersions(version1, version2) {
  if  (invalidVersion(version1) || invalidVersion(version2)) return null;
  let v1Chars = version1.split('.');
  let v2Chars = version2.split('.');
  let longest = v1Chars.length > v2Chars.length ? v1Chars : v2Chars;
  let shortest = v1Chars.length < v2Chars.length ? v1Chars : v2Chars;
  let missingElements = longest.length - shortest.length;

  for (let count = 0; count < missingElements; count++) {
    shortest.push(0);
  }

  for (let idx = 0; idx < longest.length; idx++) {
    if (Number(v1Chars[idx]) > Number(v2Chars[idx])) return 1;
    if (Number(v1Chars[idx]) < Number(v2Chars[idx])) return -1;
  }

  return 0;
}

/* my test cases
console.log(compareVersions('0.1', '1'));           // -1
console.log(compareVersions('1.0', '1.1.3'));       // -1
console.log(compareVersions('1.0', '1.2'));         // -1
console.log(compareVersions('1.1.3', '1.2'));       // -1
console.log(compareVersions('1.2.0.0', '1.18.2'));  // -1
console.log(compareVersions('1.2.0.0', '13.37'));   // -1
console.log(compareVersions('13.37', '1.18.2'));    // 1
console.log(compareVersions('13.37', '13.37'));     // 0
console.log(compareVersions('13..37', '13.37'));    // null
console.log(compareVersions('13.37', '13..37'));    // null
console.log(compareVersions('13.3a', '13.37'));     // null
console.log(compareVersions('1.0.1', '1.0'));       // 1
*/

console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1