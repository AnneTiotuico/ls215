// Atticus has been invited to a dinner party, and he decides to purchase a bottle of wine. However, he has little knowledge of how to choose a good bottle. Being a very frugal gentleman (yet disliking looking like a cheapskate), he decides to use a very simple rule. In any selection of two or more wines, he will always buy the second-cheapest.

// Given an array of wine objects, write a function that returns the name of the wine he will buy for the party. If given an empty array, return null. If given an array of only one, Atticus will buy that wine.


/*
Problem:
given an array of objects representing wines, return a string of the name of the wine Atticus will buy

rules/requirements:
- if there are 2 or more wines/objects in the array, he will buy the second cheapest
- if given an empty array, return `null`
- if given an array of only one wine/object, return that name
- all wines will be different prices


input: array of objects
output: string

Examples/test cases:
chosenWine([
  { name: "Wine A", price: 8.99 },
  { name: "Wine 32", price: 13.99 },
  { name: "Wine 9", price: 10.99 }
]) ➞ "Wine 9"

- return 'Wine 9' since it is the second cheapest
- if the wines were sorted by price ascending, return the name of the second wine (index 1)

chosenWine([{ name: "Wine A", price: 8.99 }]) ➞ "Wine A"
- only 1 wine, so return that wine's name

chosenWine([]) ➞ null
- empty array, return null

Data structures:
- array (input)
- objects (wines within the array input)
- strings (property names, output)
- numbers(decimals-prices)

Algorithm:
- iterate through the array using sort with a custom sort using the price of the the object
  save it in a variable `sortedWines`
- return the name of the wine at index 1

*/

function chosenWine(wines) {
  if (wines.length < 1) return null;
  let sortedWines = wines.sort((a, b) => a.price - b.price);
  return wines.length > 1 ? sortedWines[1].name : wines[0].name
}

// Examples
console.log(chosenWine([
  { name: "Wine A", price: 8.99 },
  { name: "Wine 32", price: 13.99 },
  { name: "Wine 9", price: 10.99 }
])) // ➞ "Wine 9"

console.log(chosenWine([{ name: "Wine A", price: 8.99 }])) // ➞ "Wine A"

console.log(chosenWine([])) // ➞ null
// Notes
// All wines will be different prices, so there is no confusion in the ordering.

//9 mins 15 secs