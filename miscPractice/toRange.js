/*
Description
Your task is to take arrays of numbers and compress them into ranges.

The numbers in the array are mostly consecutive. If you convert them as ranges,
it will save a lot of space. You should write a function that will convert an
array of numbers into a string. A range, or series of consecutive numbers,
will be represented as two numbers separated by an underscore, a range of one
just by the number its self and multiple ranges separated by commas.

For example,
The numbers 5, 6, 7, 8 and 9 would be displayed as "5_9"
The number 6 would just be "6"
The numbers 3,4,5,6,9 would be "3_6,9"

Using the above system, you should write two functions:
toRange - convert an array of numbers to a range string
toArray - convert a range string back to an array

Warnings
The numbers could arrive all jumbled up so you'll need to sort them sometimes
the same number may appear more than once, duplicates should be discarded.

Edge cases
An empty array should become an empty string if passed to toRange and
vice versa for the toArray function. Also, ranges of 2 digits will take the
same space whether they are represented as a sequence or a range.
I.e. "5,6,8,9".length === "5_6,8_9".length so there will be no compression,
but represent them as a range anyway for consistency.
*/



// Should return a string representing the ranges
function toRange(arr) {

}

/*
rules for interview?
- don't mutate original array
- there may be invalid inputs if input is not an array, return 'Invalid Input'
- dont worry about too many args
- if no arg, return 'Invalid Input'
- if empty arr, return empty str
- sparse arrays are possible
    - these would become undefined when you use new Set(arr)
- can start and end at 0
- can have start and end with negatives
- remove duplicate nums
- nums should be sorted ascending


*/