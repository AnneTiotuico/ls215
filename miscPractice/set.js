// Validating a Set in the Set Game
// In the game Set, three cards form a set if each of the cards are identical or completely different for each of the four properties. All three cards must:

// Have the same color or different colors.
// Have the same number or different numbers.
// Have the same shades or different shades.
// Have the same shape or different shapes.
// The four properties are:

// Colors: red, purple, green
// Numbers: 1, 2, 3
// Shades: empty, lined, full
// Shapes: squiggle, oval, diamond

// Here, a set is represented by an array containing three cards. Each card is represented by an object of properties and values. Write a function that determines whether three cards constitute a valid set.

/*
Problem:
- given an array containing 3 objects that represent a card return a boolean
  - true if it the cards are a set
  - false otherwise

rules/requirements:
- input will always be an array of 3 cards
- each card (object) will always have 4 prpoerties
  - color: red, purple, green
  - number: 1, 2, 3
  - shade: empty, lined, full
  - shape: squiggle, oval, diamond
- valid set:
  - color: either ALL the SAME or ALL different
  - number: either ALL the SAME or ALL different
  - shade: either ALL the SAME or ALL different
  - shape: either ALL the SAME or ALL different

input: array of objects
output: boolean


Examples/test cases:
[
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "lined", shape: "diamond" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
]
=> true
- color: all are the same
- number: all are different
- shade: all are different
- shape: all are different

[
  { color: "red", number: 1, shade: "empty", shape: "squiggle" },
  { color: "red", number: 2, shade: "lined", shape: "diamond" },
  { color: "purple", number: 3, shade: "full", shape: "oval" }
]

// =>false
- color: 2 are the same, NOT ALL different/ NOT ALL same
- dont need to check other props


Data structures:
- arrays (input)
- objects (elements within input)
- strings (prop names and value)
- numbers (prop values)
- boolean (output)


notes:
- iterate through array of cards
  - iterate through each prop name
  - check if all cards have the same value for current prop name
    - if all the same, continue/dont do anything
  - if not all the same:
    - check if all cards have different value for current prop

- ['red', 'red', 'red']

Algorithm:
- iterate through the array param (cardObj)
  -


> set.map(card => Object.values(card))
[
  [ 'red', 1, 'empty', 'squiggle' ],
  [ 'red', 2, 'lined', 'diamond' ],
  [ 'red', 3, 'full', 'oval' ]
]

transpose values to

let colors = []
let numbers = []
let shades = []
let shapes = []

iterate through cards
colors.push(card[color])
numbers.push(card[number])
shades.push(card[shade])
shapes.push(card[shape])

put these into an array
let colors = []
let numbers = []
let shades = []
let shapes = []

iterate through each prop array
  - new Set(propArr).size === 2 return false

-invalid => 2 are the same
*/

// Here is an example of a set:

function isSet(set) {
  let colors = [];
  let numbers = [];
  let shades = [];
  let shapes = [];

  set.forEach(card => {
    colors.push(card.color);
    numbers.push(card.number);
    shades.push(card.shade);
    shapes.push(card.shape);
  });

  let propArray = [colors, numbers, shades, shapes];
  let valid = true;

  propArray.forEach(propArr => {
    if (new Set(propArr).size === 2) valid = false;
  });

  return valid;
}



// [
//   { color: "red", number: 1, shade: "empty", shape: "squiggle" },
//   { color: "red", number: 2, shade: "lined", shape: "diamond" },
//   { color: "red", number: 3, shade: "full", shape: "oval" }
// ]


// // "Same" properties: color
// // "Different" properties: numbers, shading and shapes
// // The following is not a set:

// [
//   { color: "red", number: 1, shade: "empty", shape: "squiggle" },
//   { color: "red", number: 2, shade: "lined", shape: "diamond" },
//   { color: "purple", number: 3, shade: "full", shape: "oval" }
// ]

// // Colors are not all identical, but not all different.
// // Examples
console.log(isSet([
  { color: "green", number: 1, shade: "empty", shape: "squiggle" },
  { color: "green", number: 2, shade: "empty", shape: "diamond" },
  { color: "green", number: 3, shade: "empty", shape: "oval" }
])) //➞ true

console.log(isSet([
  { color: "purple", number: 1, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 1, shade: "full", shape: "oval" }
])) //➞ true

console.log(isSet([
  { color: "purple", number: 3, shade: "full", shape: "oval" },
  { color: "green", number: 1, shade: "full", shape: "oval" },
  { color: "red", number: 3, shade: "full", shape: "oval" }
])) //➞ false
// Notes
// A set cannot have 2/3 cards having the same property. Either all must share that property, or none will share that particular property.

// 23 mins