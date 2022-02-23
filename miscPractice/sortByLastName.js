// Today you volunteered as a librarian. You were given an array of objects,
// each one containing different book information. You need to sort the objects
// in alphabetical order of the author's last name.



// Examples
console.log(sortByLastName([
  { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
  { name: "Warcross", rating: "13+", author: "Marie Lu" },
  { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
]));
//➞ [
//   { name: "The Hunger Games", rating: "12+", author: "Suzanne Collins" },
//   { name: "Warcross", rating: "13+", author: "Marie Lu" },
//   { name: "Harry Potter", rating: "8+", author: "Joanne Rowling" },
// ]

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

// interview rules:
// rules/requirements:
// - sort the array of objects based on the author's last name
// - dont mutate original input
// - empty arr, return []
// - no arg, return 'Invalid Input'
// - arg is not an arr, return 'Invalid Input'
// - dont worry about more than 1 arg
// - if arr contains anything other than objs, return 'Invalid Input'
// - if obj doesn't have the 3 props 'name', 'rating' 'author' OR author value isn't 2 names, return 'invalid input'