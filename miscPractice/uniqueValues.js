// You are given a table, in which every key is a stringified number, and each corresponding value is an array of characters, e.g.

// {
//   "1": ["A", "B", "C"],
//   "2": ["A", "B", "D", "A"],
// }
// Create a function that returns a table with the same keys, but each character should appear only once among the value-arrays, e.g.

// {
//   "1": ["C"],
//   "2": ["A", "B", "D"],
// }

/*
Problem:
- given an object where keys are string nums and values are arrays of string letters,
  return a new object where the array is modified so that each char letter only appears once within the   whole object

rules/requirements:
- dont mutate original input, return new object
- keys will always be string integers, but can be negative, 0 or positive nums
  - don't worry about decimals
  - dont worry about special nums, NaN, (-)Infinity
- values will always be arrays, and will always contain single char strings
  - 'A' and 'a' are treated as different chars
  - string can contain any single char
  - dont worry about empty strings or invalid, no sparse arrays
- we will always be given a valid key and value within the objs
- if input not an object OR empty obj OR no arg return empty obj {}
- dont worry about multiple args
- if key is greater, keep the values, if less than, remove the values
- result obj should sort the keys from least to greatest

input: object
output: new object


Examples/test cases:
// {
//   "1": ["A", "B", "C"],
//   "2": ["A", "B", "D", "A"],
// }
returns:
// {
//   "1": ["C"],
//   "2": ["A", "B", "D"],
// }
- each arr contains single capitalized letters
- the last key value pair arr contains the letters from the previous pair so remove it from the previous pair
  - 'A' and 'B'
- within the last pair arr it contains more than 1 'A', so remove one

// {
//   "1": ["A", "B", "C"],
//   "2": ["a", "B", "D"],
// }
returns:
// {
//   "1": ["A", "C"],
//   "2": ["a", "B", "D"],
// }
- 'a' and 'A' are treated different so they can stay as is
- 'B' are in both, so remove from previous/ remove from any arrays besides the last


// non letter chars:
uniqueValues({
"1": [" ", "C"],
"2": [" ", "B", "D"],
}) //=> {"1": ["C"],
"2": [" ", "B", "D"],}

uniqueValues({
"1": [" ", "C", "?"],
"2": [" ", "B", "D", "3"],
"-3": ["a", "?", "3"]
})

sorted greatest to least key
=>
{
"2": [" ", "B", "D", "3"],
"1": [" ", "C", "?"],
"-3": ["a", "?", "3"],
}

//=>
"-3": ["a"],
"1": ["C", "?"],
"2": [" ", "B", "D", "3"],
}
- sort the obj by the keys from greatest to least key value
  - so we know which pairs to remove from and which to keep
- keep track of all values within the array in a separate array `values` []
- iterate through each key/value pair add those array values to `values`
  - iterate through current value array, and check if current element is within `values`
    - if it is, remove or replace with ''
    - if not, leave as is


//invalids
uniqueValues(NaN) //=> {}
uniqueValues([]) //=> {}
uniqueValues('') //=> {}
uniqueValues() //=> {}
uniqueValues({}) //=> {}

Data structures:
- objects
- strings
- arrays
- numbers? (to convert keys to number for to sort by)


- if input not an object OR empty obj OR no arg return empty obj {}
Algorithm:
- guard clauses
  - if helper function `invalidInput` returns true, return {};

- initialize a copy of the input obj, Object.assign({}, inputobj) `copy`
- initialize a `values` array []
- sort the copy by key greatest to least (have to  convert to arrays using Object.entries)
- iterate through the key value pairs
  - iterate through value array (map)
    - if current element isn't in `values` then push that element into `values`
    - if it is, replace that element within the array with a ''
  - at the end of array iteration, use filter to filter out all the ''
- return Object.fromEntries(`copy`) (fromEntries auto sorts from least to greatest key)

- helper function `invalidInput`
  - check if input is NOT an object (!!obj && obj.constructor.name === 'Object') OR Object.keys(obj).length < 1 || !obj

*/

function invalidInput(obj) {
  return (!obj || obj.constructor.name !== 'Object') || Object.keys(obj).length < 1;
}

function uniqueValues(obj) {
  if (invalidInput(obj)) return {};
  let copy = Object.assign({}, obj);
  let values = [];
  let copyArr = Object.entries(copy)
  let sortedDescArr = copyArr.sort((a, b) => {
    return Number(b[0]) - Number(a[0])
  });

  let sortedKeys = [];

  sortedDescArr = sortedDescArr.map(pair => {
    sortedKeys.push(pair[0])
    return [pair[0],

    pair[1].map(char => {
      let newChar = ''
      if (!values.includes(char)) {
        values.push(char)
        newChar = char
      }
      return newChar;
    }).filter(char => char !== '')]
  })

  let sortedObj = Object.fromEntries(sortedDescArr)

  let newObj = {}

  sortedKeys.forEach(key => {
    newObj[key] = sortedObj[key]
  })

  return newObj
}


function removeDuplicateIds(obj) {
  let keys = Object.keys(obj).sort( (a, b) => Number(b) - Number(a));
  let taken = [];
  let result = {};

  keys.forEach( key => {
    result[key] = newValue(obj[key]);
  });

  return result;

  function newValue(ar) {
    let result = [];
    ar.forEach( char => {
      if (!taken.includes(char)) {
        result.push(char);
        taken.push(char);
      }
    });

    return result;
  }
}

//create new object {}
// iterae through the sortedDescArr each pair

// console.log(uniqueValues(NaN)); //=> {}
// console.log(uniqueValues([])); //=> {}
// console.log(uniqueValues('')); //=> {}
// console.log(uniqueValues()); //=> {}
// console.log(uniqueValues({})); //=> {}


// console.log(uniqueValues({
//   "1": ["A", "B", "C"],
//   "2": ["A", "B", "D", "A"],
// }));
// // returns:
// // {
// //   "1": ["C"],
// //   "2": ["A", "B", "D"],
// // }


// console.log(uniqueValues({
//   "1": ["A", "B", "C"],
//   "2": ["a", "B", "D"],
// }));
// // // returns:
// // // {
// // //   "1": ["A", "C"],
// // //   "2": ["a", "B", "D"],
// // // }

// // // non letter chars:
// console.log(uniqueValues({
// "1": [" ", "C"],
// "2": [" ", "B", "D"],
// }));
// // //=> {"1": ["C"],
// // "2": [" ", "B", "D"],}

console.log(uniqueValues({
"1": [" ", "C", "?"],
"2": [" ", "B", "D", "3"],
"-3": ["a", "?", "3"]
}));


// =>
// "-3": ["a"],
// "1": ["C", "?"],
// "2": [" ", "B", "D", "3"],
