// Today you volunteered as a librarian. You were given an array of objects, each one containing different book information. You need to sort the objects in alphabetical order of the author's last name.

/*
Problem:
given an array of objects representing books, return the same array with the books/objects sorted by the last name of the author

rules/requirements:
- sort the objects by the last name of the author
- there will always be a name, rating and author on each object
- array will never be empty
- author prop will always only have a first and last name

input: array of objects
output: same array of objects


Examples/test cases:
sortByLastName([
  { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
  { name: "Warcross", rating: "13+", author: "Marie Lu" },
  { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
])
➞ [
  { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
  { name: "Warcross", rating: "13+", author: "Marie Lu" },
  { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
]

- we sort by the author's last name
- C becomes before L and L comes before R


Data structures:
- array
- object
- strings

Algorithm:
- iterate through array of books using sort method
  - use custom sort, sorting by the author property
    - pass author name into helper method `firstLetterLastName`
    - compare the first letters of each last name to sort by

- helper function `firstLetterLastName` that takes a string
  - split the string on the space
  - return the first letter of the second string
*/

function firstLetterLastName(author) {
  let [first, last] = author.split(' ');
  return last[0];
}

function sortByLastName(books) {
  return books.sort((a, b) =>  {
    return firstLetterLastName(a.author) <  firstLetterLastName(b.author) ? -1 : 1
  })
}

// Examples
console.log(sortByLastName([
  { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
  { name: "Warcross", rating: "13+", author: "Marie Lu" },
  { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
]))
//➞ [
//   { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
//   { name: "Warcross", rating: "13+", author: "Marie Lu" },
//   { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
// ]




// Notes
// There will always be a name, rating, and author property on each object.
// The array will never be empty.
// The author property will always feature only a first and last name.

// 14 mins 7 secs

// with added rules: 33 mins 58 secs


// Today you volunteered as a librarian. You were given an array of objects, each one containing different book information. You need to sort the objects in alphabetical order of the author's last name. Do not mutate original input.

/*
Problem:
given an array of objects representing books, return a new array of objects sorted by author's last name

rules/requirements:
- sort the array of objects based on the author's last name
- dont mutate original input
- empty arr, return []
- no arg, return 'Invalid Input'
- arg is not an arr, return 'Invalid Input'
- dont worry about more than 1 arg
- if arr contains anything other than objs, return 'Invalid Input'
- if obj doesn't have the 3 props 'name', 'rating' 'author' OR author value isn't 2 names, return 'invalid input'


input: array of objects
output: new array of objects

Examples/ test cases:
console.log(sortByLastName([
  { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
  { name: "Warcross", rating: "13+", author: "Marie Lu" },
  { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
]))
// ➞ [
//   { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
//   { name: "Warcross", rating: "13+", author: "Marie Lu" },
//   { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
// ]

// console.log(sortByLastName([])); //➞ []
// console.log(sortByLastName()); //➞ 'invalid input'
// console.log(sortByLastName(NaN)); //➞ 'invalid input'
// console.log(sortByLastName(null)); //➞ 'invalid input'
// console.log(sortByLastName(undefined)); //➞ 'invalid input'
// console.log(sortByLastName([
//   5,
//   { name: "Warcross", rating: "13+", author: "Marie Lu" },
//   { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
// ])); //➞ 'invalid input'

// console.log(sortByLastName([
//   [],
//   { name: "Warcross", rating: "13+", author: "Marie Lu" },
//   { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
// ])); //➞ 'invalid input'

console.log(sortByLastName([
  {},
  { name: "Warcross", rating: "13+", author: "Marie Lu" },
  { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
])); //➞ 'invalid input'

console.log(sortByLastName([
  { name: "Harry Potter", rating: "8+", author: "Joanne Rowling Junior" },
  { name: "Warcross", rating: "13+", author: "Marie Lu" },
  { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
])); //➞'invalid input'

console.log(sortByLastName([
  { author: "Joanne Rowling Junior" },
  { name: "Warcross", rating: "13+", author: "Marie Lu" },
  { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
])); //➞ invalid input


Data structures:
- arrays
- objects
- strings

Algorithm:
- guard clause(s):
  - if helper function `invalidInput` returns true, return 'invalid input'
  - if (books.length < 1) return [];
  - if helper function `invalidBookObj` returns true, return 'invalid input'


- initialize `sorted` to a copy of the input array (input.slice())
- iterate over `sorted` with sort method
  - check if the first letter of firstlastname is less than first letter of secondlastname
    - use helper function `firstLetter` to get first letter of each
    - if first is < second, return -1 else return 1 so that it will sort appropriately (asc)
- return `sorted` arr

- helper function `firstLetter` that takes in a string separated by a space
  - split the string into 2 variables `first` and `last`
    - return the last[0] value

- helper function `invalidInput`
  - check if !(input isArray (Array.isArray(input)) || every book is an obj)
      - to check if obj, check if it's a truthy value, and obj.constructor.name === 'Object'
    - return true if above is true, false otherwise

- helper function `invalidBookObj`
  - iterate through array of books
    - check if !(every book has the 3 property names and author value.split(' ').length === 2)
      - return true if above is true, false otherwise
*/

function invalidInput(booksArr) {
  return (!Array.isArray(booksArr) || !booksArr.every(book => !!book && book.constructor.name === 'Object'));
}

function invalidBookObj(booksArr) {
  return !booksArr.every(book => {
    return Object.keys(book).includes('name') &&
           Object.keys(book).includes('rating') &&
           Object.keys(book).includes('author') &&
           book.author.split(' ').length === 2;
  })
}

function firstLetter(nameStr) {
  let [first, last] = nameStr.split(' ');
  return last[0];
}

function sortByLastName(books) {
  if (invalidInput(books)) return 'invalid input'
  if (books.length < 1) return [];
  if (invalidBookObj(books)) return 'invalid input'

  let sorted = books.slice();
  return sorted.sort((a, b) => {
    return firstLetter(a.author) < firstLetter(b.author) ? -1 : 1
  })

}


console.log(sortByLastName([
  { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
  { name: "Warcross", rating: "13+", author: "Marie Lu" },
  { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
]))
// ➞ [
//   { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
//   { name: "Warcross", rating: "13+", author: "Marie Lu" },
//   { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
// ]



// console.log(sortByLastName([])); //➞ []
// console.log(sortByLastName()); //➞ 'invalid input'
// console.log(sortByLastName(NaN)); //➞ 'invalid input'
// console.log(sortByLastName(null)); //➞ 'invalid input'
// console.log(sortByLastName(undefined)); //➞ 'invalid input'
// console.log(sortByLastName([
//   5,
//   { name: "Warcross", rating: "13+", author: "Marie Lu" },
//   { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
// ])); //➞ 'invalid input'

// console.log(sortByLastName([
//   [],
//   { name: "Warcross", rating: "13+", author: "Marie Lu" },
//   { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
// ])); //➞ 'invalid input'

console.log(sortByLastName([
  {},
  { name: "Warcross", rating: "13+", author: "Marie Lu" },
  { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
])); //➞ 'invalid input'

console.log(sortByLastName([
  { name: "Harry Potter", rating: "8+", author: "Joanne Rowling Junior" },
  { name: "Warcross", rating: "13+", author: "Marie Lu" },
  { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
])); //➞'invalid input'

console.log(sortByLastName([
  { author: "Joanne Rowling Junior" },
  { name: "Warcross", rating: "13+", author: "Marie Lu" },
  { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
])); //➞ invalid input


/*

Interview rules
- if empty array, return empty array
- if obj is missing any of the 3 props or author value isn't a first and last name (2 names separated by a space)
 - don't include that obj in the result array
- do not mutate original obj
- if input isn't an array, return 'invalid input'
- if input array contains anything other than objects, return 'invalid input'
*/