// Given the below recipe for chocolate cake write a function cake() that takes
// two inputs: ingredient and amount.
// The recipe should be adjusted according to the amount passed into the function.
// An Object containing all ingredients and their new amounts should be returned.

// Example:
// If I have just 80g of caster sugar, how much will I need of the other ingredients?

// cake('caster sugar',80) => {'caster sugar': '80g', butter: '85g', eggs: 1.5,
// 'self-raising flour': '57.5g', 'cocoa powder': '27.5g'}

// Note that the new amounts should be rounded to 1 decimal place and unit of
// measurement for amount will always be in grams, unless the ingredient is eggs.


/*
Problem:
given a string (representing an ingredient) and number (representing amount),
return and object that contains the given ingredient and amount as a property
pair as well as how much of the other ingredients are needed, as property pairs

rules/requirements:
- output recipe should be adjusted according to passed amount
- new amounts should always be rounded to 1 decimal place
- unit of measurement will always be in grams (g)
  - unless its eggs, then no unit of measurement
- all amounts will be strings with 'g' at the end
  - unless its eggs, then it will be a number

input: string and number (ingredient & amount)
output: object (property pairs of all ingredients and new amounts)

questions:
- Do we need to worry about invalid inputs?
- More than 2 args passed in?
- Less than 2 args passed in?
- How do we handle if 1st arg isn't a string or 2nd arg isnt a number?
- Will the second arg always be a positive integer?
  -What about decimals?
- Are we mutating the recipe object given?
  - Are we returning a new recipe object?

Examples/test cases:
cake('caster sugar',80) => {'caster sugar': '80g', butter: '85g', eggs: 1.5,
'self-raising flour': '57.5g', 'cocoa powder': '27.5g'}
- caster sugar 160 / 80 = 2 so everything else needs to be amt/2
- butter 170 / 2 = 85
- eggs 3/2 = 1.5 (dont forget to round to 1 decimal)
- self-raising flour 115 / 2 = 57.5
- cocoa powder 55/2 = 27.5
* dont forget all amts besides eggs need to be strings rounded to 1 decimal place (toFixed(1))
  and appended with 'g'

Data structures:
- string (input)
- number(input)
- object (output)
- regex? (to extract amt number without the 'g')

Algorithm:
(assuming we don't mutate original object)

- guard clause(s):
  - if helper method `invalidStrInput` return true, return 'Invalid Input'
  - if helper method `invalidNumInput` return true, return 'Invalid Input'

- initialize `newRecipe` to a copy of the `recipe` object (Object.assign({}, recipe))
- iterate through object using Object.keys then using a for loop
  - get the values for each ingredient and reassign :
    - if it's a string, use match regex to extract the digits, join them and convert to number
    - if not a string, leave as is
- should now have an object with values being numbers
- initialize `adjustmentValue` to amount / newRecipe[ingredient]

- iterate through object again using Object.keys and for loop
  - initialize `newAmt` = amount / adjustmentValue
  - reassign the amount to `newAmt`.toFixed(1) but if key is 'eggs' then convert back to number
- return `newRecipe`

- helper method `invalidStrInput`
  - check if input is string and is a key in the `recipe` object
    - return true if yes,
    - else return false

- helper method `invalidNumInput`
  - check if input is NOT a finite number || input <= 0
    - return true if yes,
    - else return false

*/

let recipe = {
  'caster sugar': '160g',
  butter: '170g',
  eggs: 3,
  'self-raising flour': '115g',
  'cocoa powder': '55g'
};

function invalidStrInput(str) {
  return !Object.keys(recipe).includes(str);
}

function invalidNumInput(num) {
  return !Number.isFinite(num) || num <= 0;
}

function cake(ingredient, amt) {
  if (invalidStrInput(ingredient) || invalidNumInput(amt)) return 'Invalid Input';

  let newRecipe = Object.assign({}, recipe);
  Object.keys(newRecipe).forEach(ingr => {
    let numAmt = newRecipe[ingr];
    if (typeof numAmt === 'string') {
      newRecipe[ingr] = Number(numAmt.match(/[0-9]/g).join(''));
    }
  });

  let adjustmentValue = newRecipe[ingredient] / amt;
  Object.keys(newRecipe).forEach(ingr => {
    let newAmt = newRecipe[ingr] / adjustmentValue;
    newAmt = Number(newAmt.toFixed(1));
    newAmt = ingr === 'eggs' ? newAmt : String(newAmt) + 'g';
    newRecipe[ingr] = newAmt;
  });

  return newRecipe;
}



console.log(cake('', 200));  // 'Invalid Input'
console.log(cake('flour', 200));  // 'Invalid Input'
console.log(cake('salt', 200)); // 'Invalid Input'
console.log(cake('butter', NaN)); // 'Invalid Input'
console.log(cake('butter', -1)); // 'Invalid Input'
console.log(cake('butter', 0)); // 'Invalid Input'

console.log(cake('caster sugar', 200)); //=> {'caster sugar': '200g', butter: '212.5g', eggs: 3.8, 'self-raising flour': '143.8g', 'cocoa powder': '68.8g'}

console.log(cake('caster sugar',80))// => {'caster sugar': '80g', butter: '85g', eggs: 1.5, 'self-raising flour': '57.5g', 'cocoa powder': '27.5g'}