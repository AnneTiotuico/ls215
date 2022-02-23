// Create a function that takes an array of objects like { name: "John", notes: [3, 5, 4] } and returns an array of objects like { name: "John", topNote: 5 }.

// If student has no notes (an empty array) then let's assume topNote: 0.

/*
Problem:
- given an array of objects representing a student and their notes, return an array of objects with the same names but rather than a notes property name and array value, replace it with a 'topNote' property and a number value which is the max of the original array value for that student


rules/requirements:
- if a student has no 'notes'/empty array, 'topNote' should be 0


input: array of objects
output: array of objects

Examples/test cases:
console.log(getStudentsWithNamesAndTopNotes([
  { "name": "John", "notes": [3, 5, 4] },
  { "name": "Max", "notes": [1, 4, 6] },
  { "name": "Zygmund", "notes": [1, 2, 3] }
]))
/*
➞ [
  { "name": "John", "topNote": 5 },
  { "name": "Max", "topNote": 6 },
  { "name": "Zygmund", "topNote": 3 }
]

- we return the same 3 objects/students but with their 'notes' prop replaced with 'topNote' and a value of a number that is the max of the original 'notes' array

Data structures:
- arrays
- objects
- strings
- numbers

Algorithm:
- iterate through the array of objects using `map` to transform the values.
- return an object with the same name property, but with a new property `topNote` and the value
  should be the max of the `notes` value

*/

function getStudentsWithNamesAndTopNotes(studentList) {
  return studentList.map(student => ({ name: student.name, topNote: Math.max(...student.notes) || 0 }))
}

// Examples

let students = [
  { "name": "John", "notes": [3, 5, 4] },
  { "name": "Max", "notes": [1, 4, 6] },
  { "name": "Zygmund", "notes": [1, 2, 3] }
];

console.log(getStudentsWithNamesAndTopNotes(students))
/*
➞ [
  { "name": "John", "topNote": 5 },
  { "name": "Max", "topNote": 6 },
  { "name": "Zygmund", "topNote": 3 }
]
*/


// Notes
// Try solving this challenge with an arrow function.

// 14 mins 4 secs