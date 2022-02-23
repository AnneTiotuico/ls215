// Create the function type which takes the argument val and returns val's type as a string. If possible, type should return additional information. For example 1 should return 'Number Integer'.

/*
Problem:
- given a value, return a string of that value's type


rules/requirements:
- return val's type as a string
- return addtl info if possible
- input can be any JS type
  - null
  - undefined
  - boolean
  - string
  - functions
  - objects
  - arrays
  - numbers
  - regex obj


input: value (any JS type)
output: string

questions:
- always 1 arg input
  - dont have to worry about 0 args or 2+ args
-

Examples/ test cases:
- null => 'Null'
- undefined => 'Undefined'
- boolean => 'Boolean'

- string => 'String'
  - normal string => 'String'
  - string numbers => 'String Number ex '4'


- functions => 'Function'
- objects => 'Object'
- arrays => 'Array'


- numbers =>
  - whole numbers/Integers for 0 and negative ints 'Number Integer'
  - decimals can be positive or negative => 'Number Float'
  - NaN => 'Number NaN'
  - Infinity & -Infinity => 'Number Infinite'


- regex obj => 'RegExp'

Data structures:


Notes:
- to check for integer use Number.isInteger
- use Number.isFinite to check if input a number not NaN, Infinity or -Infinityb



Algorithm:
- check if val is null, return 'Null'
- check if val is undefined, return 'Undefined'
- check if val is equal to `true` or `false`, if either return true, return 'Boolean'
- check if val's constructor name is 'RegExp', return 'RegExp'

- check if typeof val === 'object', invoke helper `specificObj`
  - return the return value of `specificObj`

- check if typeof val === 'number', if yes, invoke hleper method 'specificNum'
  - return the return value of 'specificNum'

- at this point val can only be a string, return return value of `specificStr`

- helper method `specificObj` that takes 1 val
  - return val.constructor.name


- helper method `specificNum` that takes 1 val
  - let type = 'Number ';
  - let specific = '';
  - if val.isNaN === true, reassign specific to 'NaN'
  - if !val.isFinite then reassign specific to `Infinite`
  - if val.isInteger if true, reassign specific to 'Integer'
    - if not 'Float'
  - return type concatenated with specific type (Integer, Infinite, Float)

- helper method `specificStr` that takes 1 val
  - check if Number(val) equals to NaN or length < 1, return 'String'
  - if not, return 'String Number'
*/

function specificObj(val) {
  return val.constructor.name;
}


function specificNum(val) {
  let type = 'Number ';
  let specific;

  if (Number.isInteger(val)) {
    specific = 'Integer';
  } else if (!Number.isInteger(val)) {
    specific = 'Float';
  }

  if (Number.isNaN(val)) specific = 'NaN';
  if (!Number.isFinite(val) && !Number.isNaN(val)) specific = 'Infinite';

  return type + specific;
}

function specificStr(val){
  if (Number.isNaN(Number(val))|| val.length < 1) return 'String';
  return 'String Number';
}

function type(val) {
  if (val === null) return 'Null';
  if (val === undefined) return 'Undefined';
  if (val === true || val === false) return 'Boolean';
  if (typeof val === 'function') return 'Function';
  if (typeof val === 'object') return specificObj(val);
  if (typeof val === 'number') return specificNum(val);
  return specificStr(val);
}

// refactored:
function specificNum(val) {
  let type = 'Number ';
  let specific;

  if (Number.isNaN(val)) {
    specific = 'NaN';
  } else if (!Number.isFinite(val)) {
    specific = 'Infinite';
  } else if (Number.isInteger(val)) {
    specific = 'Integer';
  } else if (!Number.isInteger(val)) {
    specific = 'Float';
  }

  return type + specific;
}

function specificStr(val){
  if (Number.isNaN(Number(val))|| val.length < 1) return 'String';
  return 'String Number';
}

function type(val) {
  if (val === null) return 'Null';
  if (val === undefined) return 'Undefined';
  if (typeof val === 'string') return specificStr(val);
  if (typeof val === 'number') return specificNum(val);
  return val.constructor.name;
}


// console.log(type(null)); // 'Null'
// console.log(type(undefined)); // 'Undefined'
// console.log(type(false)); // 'Boolean'
// console.log(type(true)); // 'Boolean'
// console.log(type(/[ab]/)); // 'RegExp'

// // // objects
// console.log(type(function() {})); // 'Function'
// console.log(type({})); // 'Object'
// console.log(type([])); // 'Array'

// // //numbers
// console.log(type(0)); // 'Number Integer'
// console.log(type(-5)); // 'Number Integer'
// console.log(type(5)); // 'Number Integer'
// console.log(type(5.5)); // 'Number Float'
// console.log(type(-5.5)); // 'Number Float'
// console.log(type(NaN)); // 'Number NaN'
// console.log(type(Infinity)); // 'Number Infinite'
// console.log(type(-Infinity)); // 'Number Infinite'

// // // strings
// console.log(type('')); // 'String'
// console.log(type('hello')); // 'String'
// console.log(type('4')); // 'String Number'
// console.log(type('4.5')); // 'String Number'
// console.log(type('-4')); // 'String Number'
// console.log(type('-4.5')); // 'String Number'
// console.log(type('0')); // 'String Number'

console.log(type(Math.max))// --> 'Function'
function Custom(){}//
console.log(type(new Custom()))// --> 'Custom'
// console.log(type(Console {}))


// 50 mins


