/*
problem:
create a function `octalToDecimal` that takes in a string that represents an octal value
then return a number in decimal
input: string (octal value)
output: number (decimal)

examples:
octalToDecimal('1');           // 1
                 1*8^0 = 1 * 1  = 1

octalToDecimal('10');          // 8
         1*8^1 + 0*8^0 = 8 + 0  = 8

octalToDecimal('130');         // 88
1*8^2 + 3*8^1 + 0*8^0 = 64 + 24 + 0 = 88

octalToDecimal('17');          // 15
        1*8^1 + 7*8^0 = 8 + 7   = 15

octalToDecimal('2047');        // 1063
2*8^3 + 0*8^2 + 4*8^1 + 7*8^0
1024 + 0 + 32 + 7               = 1063

octalToDecimal('011');         // 9
0*8^2 + 1*8^1 + 1*8^0
0 + 8 + 1                       = 9

data structures:
strings, numbers

algorithm:
split the string into an array of characters ['1', '0']
reverse the array of characters ['0', '1']
iterate through that reversed array
and transform the elements using base 8 to numbers
multiply the item by 8 to the power of its index
take that transformed array and reduce the values to a total
*/

function octalToDecimal(numberString) {
  return numberString.split('').reverse().map((item, idx) => {
    return item * (8 ** idx);
  }).reduce((sum, value) => sum + value);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9