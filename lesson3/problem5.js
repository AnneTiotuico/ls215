// Implement encoding and decoding for the rail fence cipher.

// The Rail Fence cipher is a form of transposition cipher that gets its name
// from the way in which it's encoded. It was already used by the ancient Greeks.

// In the Rail Fence cipher, the message is written downwards on successive
// "rails" of an imaginary fence, then moving up when we get to the bottom (like a zig.zag). Finally the message is then read off in rows.

// For example, using three "rails" and the message "WE ARE DISCOVERED FLEE AT ONCE", the cipherer writes out:

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . A . . . I . . . V . . . D . . . E . . . N . .
// Then reads off:

// WECRLTEERDSOEEFEAOCAIVDEN
// To decrypt a message you take the zig.zag shape and fill the ciphertext along the rows.

// ? . . . ? . . . ? . . . ? . . . ? . . . ? . . . ?
// . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
// . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
// The first row has seven spots that can be filled with "WECRLTE".

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
// . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
// Now the 2nd row takes "ERDSOEEFEAOC".

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .
// Leaving "AIVDEN" for the last row.

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . A . . . I . . . V . . . D . . . E . . . N . .
// If you now read along the zig.zag shape you can read the original message.

/*
Problem:
(encoding function)
given two inputs, a message string and integer representing how many rows/rails are needed,
return a string that encodes the message using n given rows
(decoding function)
given an encoded message string, return the decoded message as a string
rules/requirements:
create a function that encodes a message given the message and how many rows/rails
create another function that decodes a given message
the message is written downward, letter by letter on successive rows/rails
starting from the top left and moving one space to the right and one down each time
until we hit the bottom/last row and start moving upward (one space to the right
and one up until we hit the first row) and continue moving down and up until
the end of the string
we ignore/skip spaces
input: string and int (encoding) string (decoding)
output: string (encoding and decoding)
questions:
Will the input always be letters and spaces only?
How do we handle non string inputs?
  -empty strings?
Is it case sensitive?
Is there a minimum or maximum length for the input?
How many rails/rows will there be? Will it always be 3 or does the user input how many?
What if the rails given is 1?
What if the rails given is equal to the length of letters in the string?
  -What if there are more rails than the length of letters?
Should the function be able to both decode and encode or can we separate the two processes
into different functions?
Will the length of the output always be equal to the length of the message's letters?
  - do we exlcude any spaces and other characters from the length?
  - do we only keep the letters?
Does the first letter need to start on the top left?
Does the last letter always have to end on the top right?
Does the output need to be a rectangle?
  - the same amount of chars on each line?
Should we output each line on its own or in one long string?
What if the second input is a string but contains a number?
Examples / test cases:
"WE ARE DISCOVERED FLEE AT ONCE"
W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .
WECRLTEERDSOEEFEAOCAIVDEN
length of string = 30
length of just letters (w/o spaces) = 25
length of fence = 25 chars
length of space between each letter on 1st row = 3 in between, 0 from start and end
length of space between each letter on 2nd row = 1 from the start and end and in between
length of space between each letter on 3rd row = 2 from the start and end, 3 in between
1st row has space for 7 letters
2nd row has space for 12 letters
3rd row has space for 6 letters
console.log(railCipherEncode('WE ARE DISCOVERED FLEE AT ONCE', 2))
W . A . E . I . C . V . R . D . L . E . T . N . E
. E . R . D . S . O . E . E . F . E . A . O . C .
console.log(railCipherEncode('WE ARE DISCOVERED FLEE AT ONCE', 3))
W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .
console.log(railCipherEncode('WE ARE DISCOVERED FLEE AT ONCE', 4))
W	.	.	.	.	.	I	.	.	.	.	.	R	.	.	.	.	.	E	.	.	.	.	.	E
.	E	.	.	.	D	.	S	.	.	.	E	.	E	.	.	.	E	.	A	.	.	.	C	.
.	.	A	.	E	.	.	.	C	.	V	.	.	.	D	.	L	.	.	.	T	.	N	.	.
.	.	.	R	.	.	.	.	.	O	.	.	.	.	.	F	.	.	.	.	.	O	.	.	.
letter indexes per row:
1st row . 0 6 12 18 24
2nd row . 1 5 7 11 13 17 19 23
3rd row . 2 4 8 10 14 16 20 22
4th row . 3 9 15 21
console.log(railCipherEncode('WE ARE DISCOVERED FLEE AT ONCE', 5)
W	.	.	.	.	.	.	.	C	.	.	.	.	.	.	.	L	.	.	.	.	.	.	.	E
.	E	.	.	.	.	.	S	.	O	.	.	.	.	.	F	.	E	.	.	.	.	.	C	.
.	.	A	.	.	.	I	.	.	.	V	.	.	.	D	.	.	.	E	.	.	.	N	.	.
.	.	.	R	.	D	.	.	.	.	.	E	.	E	.	.	.	.	.	A	.	O	.	.	.
.	.	.	.	E	.	.	.	.	.	.	.	R	.	.	.	.	.	.	.	T	.	.	.	.
letter indexes per row:
1st row . 0 8 16 24
2nd row . 1 7 9 15 17 23
3rd row . 2 6 10 14 18 22
4th row . 3 5 11 13 19 21
5th row . 4 12 20
console.log(railCipherEncode('WE ARE DISCOVERED FLEE AT ONCE', 6)
W	.	.	.	.	.	.	.	.	.	V	.	.	.	.	.	.	.	.	.	T	.	.	.	.
.	E	.	.	.	.	.	.	.	O	.	E	.	.	.	.	.	.	.	A	.	O	.	.	.
.	.	A	.	.	.	.	.	C	.	.	.	R	.	.	.	.	.	E	.	.	.	N	.	.
.	.	.	R	.	.	.	S	.	.	.	.	.	E	.	.	.	E	.	.	.	.	.	C	.
.	.	.	.	E	.	I	.	.	.	.	.	.	.	D	.	L	.	.	.	.	.	.	.	E
.	.	.	.	.	D	.	.	.	.	.	.	.	.	.	F	.	.	.	.	.	.	.	.	.
notes:
first row. start on index 0 then
last row . the character is placed on the nth index . 1 (n being the # rows input)
console.log(railCipherEncode('hello', 2))
h . l . o
. e . l .
console.log(railCipherEncode('hello', 3))
h . . . o
. e . l .
. . l . .
console.log(railCipherEncode('hello', 4))
h . . . .
. e . . .
. . l . o
. . . l .
console.log(railCipherEncode('hello', 5))
h . . . .
. e . . .
. . l . .
. . . l .
. . . . o
console.log(railCipherEncode('moon', 2))
m . o .
. o . n
console.log(railCipherEncode('moon', 3))
m . . .
. o . n
. . o .
console.log(railCipherEncode('moon', 4))
m . . .
. o . .
. . o .
. . . n
console.log(railCipherEncode('moon', 5))
m . . .
. o . .
. . o .
. . . n
. . . .
Data Structures:
string(input/output)
number/integer (input)
arrays
regex?
Algorithm:
- guard clause(s)
  - if msg str in not string type and int is not number type, return 'invalid input'
  - if msg str input includes anything other than letters and spaces, return 'invalid input'
  - if rails num input is less than 2 return 'invalid input'
- clean msg str
- remove anything that isn't a letter a-zA-Z (case insensitive)
- if cleaned str is < 2, return 'invalid input'
- split cleaned str into array of chars `letters`
- initialize result array of n sub arrays Array(n).fill([])
- create rows
- initialize `row` to 0
- initialize `directionUp` to `false
- iterate through array of `letters` with index`
  - if row is equal to x then push current letter into array[x]
    - else push '.'
  - if `directionUp` subtract 1 to row
    - else add 1
  - if row === n given rows, set `directionUp` to true
- log each row
- iterate through `result`
  - for each subarry, join it and log it
*/

function invalidEncodeInput(msg, rows) {
  return typeof msg !== 'string' || /[^a-z ]+/gi.exec(msg) || rows < 2
          || (typeof rows !== 'number' || Number.isNaN(rows) || rows === Infinity || rows === -Infinity);
}

function cleanStr(msg) {
  return msg.replace(/[^a-z]/gi, '');
}

function railCipherEncode(msg, rows) {
  if (invalidEncodeInput(msg, rows)) return 'Invalid Input';
  let letters = cleanStr(msg).split('');
  if (letters.length < 2) return 'Invalid Input';

  let row = 0;
  let resultRows = Array(rows).fill().map(row => []);

  let directionUp = false;
  letters.forEach((letter) => {
    resultRows.forEach((resultRow, idx) => {
      row === idx ? resultRow.push(letter + ' ') : resultRow.push('. ');
    });

    directionUp ? row -= 1 : row += 1;
    if (row === 0) {
      directionUp = false;
    } else if (row === rows - 1) {
      directionUp = true;
    }
  });

  let encoded = resultRows.map(row => row.join('')).join('\n');
  return encoded.match(/[a-z]/gi).join('');
}


console.log(railCipherEncode('WE ARE DISCOVERED FLEE AT ONCE', 2));
// W . A . E . I . C . V . R . D . L . E . T . N . E
// . E . R . D . S . O . E . E . F . E . A . O . C .

console.log(railCipherEncode('WE ARE DISCOVERED FLEE AT ONCE', 3));
// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . A . . . I . . . V . . . D . . . E . . . N . .

console.log(railCipherEncode('WE ARE DISCOVERED FLEE AT ONCE', 4));
// W	.	.	.	.	.	I	.	.	.	.	.	R	.	.	.	.	.	E	.	.	.	.	.	E
// .	E	.	.	.	D	.	S	.	.	.	E	.	E	.	.	.	E	.	A	.	.	.	C	.
// .	.	A	.	E	.	.	.	C	.	V	.	.	.	D	.	L	.	.	.	T	.	N	.	.
// .	.	.	R	.	.	.	.	.	O	.	.	.	.	.	F	.	.	.	.	.	O	.	.	.

// console.log(railCipherEncode('WE ARE DISCOVERED FLEE AT ONCE', 5));
// W	.	.	.	.	.	.	.	C	.	.	.	.	.	.	.	L	.	.	.	.	.	.	.	E
// .	E	.	.	.	.	.	S	.	O	.	.	.	.	.	F	.	E	.	.	.	.	.	C	.
// .	.	A	.	.	.	I	.	.	.	V	.	.	.	D	.	.	.	E	.	.	.	N	.	.
// .	.	.	R	.	D	.	.	.	.	.	E	.	E	.	.	.	.	.	A	.	O	.	.	.
// .	.	.	.	E	.	.	.	.	.	.	.	R	.	.	.	.	.	.	.	T	.	.	.	.

// console.log(railCipherEncode('WE ARE DISCOVERED FLEE AT ONCE', 6));
// W	.	.	.	.	.	.	.	.	.	V	.	.	.	.	.	.	.	.	.	T	.	.	.	.
// .	E	.	.	.	.	.	.	.	O	.	E	.	.	.	.	.	.	.	A	.	O	.	.	.
// .	.	A	.	.	.	.	.	C	.	.	.	R	.	.	.	.	.	E	.	.	.	N	.	.
// .	.	.	R	.	.	.	S	.	.	.	.	.	E	.	.	.	E	.	.	.	.	.	C	.
// .	.	.	.	E	.	I	.	.	.	.	.	.	.	D	.	L	.	.	.	.	.	.	.	E
// .	.	.	.	.	D	.	.	.	.	.	.	.	.	.	F	.	.	.	.	.	.	.	.	.


// console.log(railCipherEncode('hello', 2));
// h . l . o
// . e . l .

// console.log(railCipherEncode('hello', 3));
// h . . . o
// . e . l .
// . . l . .

// console.log(railCipherEncode('hello', 4));
// h . . . .
// . e . . .
// . . l . o
// . . . l .

// console.log(railCipherEncode('hello', 5));
// h . . . .
// . e . . .
// . . l . .
// . . . l .
// . . . . o

// console.log(railCipherEncode('moon', 2));
// m . o .
// . o . n

// console.log(railCipherEncode(' m o o n  ', 2));
// m . o .
// . o . n

// console.log(railCipherEncode('moon', 3));
// m . . .
// . o . n
// . . o .


// console.log(railCipherEncode('moon', 4));
// m . . .
// . o . .
// . . o .
// . . . n

// console.log(railCipherEncode('moon', 5));
// m . . .
// . o . .
// . . o .
// . . . n
// . . . .

// console.log(railCipherEncode('m', 5)); // 'Invalid Input'
// console.log(railCipherEncode('moon', 1)); // 'Invalid Input'
// console.log(railCipherEncode('m153', 5)); // 'Invalid Input'


/*
algorithm:
- guard clause(s)
  - return 'invalid input' if msg isn't a string or rows is less than 2 or msg includes
    anything but letters
- initialize resultRows = []
- push in an empty array given `rows` amount of times
  -for ex if given 3 then [[], [], []]
- initialize letters to an array of each char of msg msg.split('')
- push letters into first row x times
  - Round(length of msg input / given rows ) - 1 times
  - use shift to get rid of the item but the return value of shift to push into first row
- push letters into last row x times
  - Round(length of msg input / given rows ) - 2 times
  - use pop to get rid of the item but the return value of pop to push into last row
- get remaining length of `letters`, letters.length
- get remaining rows, rows - 2
- get letters per row length divided by remaining rows
- use a for loop to iterate starting at row 1 until we reach `rows` - 1
  - reassign the current resultRow[row] to the letters starting from 0 to letters per row
    - use splice to mutate letters so we can get rid of the used letters
- initialize row to 0
- initialize directionUp to false
- iterate through letters using map for transformation
  - return first letter of current row resultRows.shift()
    - if directionUp is false, increment row by 1 row += 1
      - else decrement row by 1 row -=1
    - if row is equal to 0
      - direction up should be false
    - if row is equal to rows - 1
      - directionup should be true
*/

function invalidDecodeInput(msg, rows) {
  return typeof msg !== 'string' || /[^a-z]+/gi.exec(msg) || rows < 2;
}

function railCipherDecode(msg, rows) {
  if (invalidDecodeInput(msg, rows) || msg.length < 2) return 'Invalid Input';

  let resultRows = [];
  for (let count = 1; count <= rows; count++) {
    resultRows.push([]);
  }

  let letters = msg.split('');
  let length = letters.length;

  let firstRowLetterCount = rows > 2 ? Math.round(length/rows) - 1 : Math.round(length/rows);
  let lastRowLetterCount = firstRowLetterCount - 1;

  for (let count = 1; count <= firstRowLetterCount; count++) {
    resultRows[0].push(letters.shift());
  }

  for (let count = 1; count <= lastRowLetterCount; count++) {
    resultRows[rows - 1].unshift(letters.pop());
  }

  let remainingLength = letters.length;
  let remainingRows = rows - 2;
  let lettersPerRow = remainingLength / remainingRows;

  for (let row = 1; row < rows - 1; row++) {
    resultRows[row] = letters.splice(0, lettersPerRow);
  }

  let row = 0;
  let directionUp = false;

  let decoded =  msg.split('').map((letter) => {
    let currentLetter = resultRows[row].shift();

    directionUp ? row -= 1 : row += 1;
    if (row === 0) {
      directionUp = false;
    } else if (row === rows - 1) {
      directionUp = true;
    }

    return currentLetter;
  }).join('');

  return decoded;
}

// console.log(railCipherDecode('WECRLTEERDSOEEFEAOCAIVDEN', 3)); // 'WEAREDISCOVEREDFLEEATONCE'
// 1st row WECRLTE 7 letters
// 2nd row ERDSOEEFEAOC 12 letters
// 3rd row AIVDEN 6 letters

// console.log(railCipherDecode('WAEICVRDLETNEERDSOEEFEAOC', 2)); // 'WEAREDISCOVEREDFLEEATONCE'
// console.log(railCipherDecode('WECRLTEERDSOEEFEAOCAIVDEN', 3)); // 'WEAREDISCOVEREDFLEEATONCE'
// console.log(railCipherDecode('WIREEEDSEEEACAECVDLTNROFO', 4)); // 'WEAREDISCOVEREDFLEEATONCE'
// console.log(railCipherDecode('WCLEESOFECAIVDENRDEEAOERT', 5)); // 'WEAREDISCOVEREDFLEEATONCE'
// console.log(railCipherDecode('WVTEOEAOACRENRSEECEIDLEDF', 6)); // 'WEAREDISCOVEREDFLEEATONCE'

// console.log(railCipherDecode('hloel', 2)); // hello
// console.log(railCipherDecode('m', 5));     // 'Invalid Input'
// console.log(railCipherDecode('moon', 1));  // 'Invalid Input'
// console.log(railCipherDecode('m153', 5));  // 'Invalid Input'

// couldn't pass
// console.log(railCipherDecode('hoell', 3)); // hello
// console.log(railCipherDecode('helol', 4)); // hello
// console.log(railCipherDecode('hello', 5)); // hello
// console.log(railCipherDecode('moon', 2));  // moon
// console.log(railCipherDecode('mono', 3));  // moon
// console.log(railCipherDecode('moon', 4));  // moon
// console.log(railCipherDecode('moon', 5));  // moon