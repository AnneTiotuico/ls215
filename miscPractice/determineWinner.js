// https://edabit.com/challenge/Zou4ggX2D9w39wJrG

// The fight between you and your spouse is over. Based on your perception of how the fight went, determine who won.

// Given an object with three rounds, with nested objects as your points per round, determine the winner by counting who won the most rounds. The winner of the round is whoever scored the most points in that round. Draws are possible, both in rounds as in the final result.

// If you won more rounds than your spouse, return "ME!"
// If your spouse won more rounds, return "SPOUSE!"
// If you are tied, return "NOBODY!"

/*
Problem:
given an object of objects, return a string
- the nested objects represent rounds containing scores
- the output string should be who won the fight 'ME!', 'SPOUSE!' or 'NOBODY!'

rules/requirements:
- each object has 3 rounds/nested objects
- there can be a draw for both rounds and the final result
- return 'ME' if you  more rounds than your spouse
- return 'SPOUSE!' if your spouse won more
- return 'NOBODY' if it's a tie


input: object of objects
output: string


Examples/test cases:
console.log(determineWinnerOfFight({
  round1: {
    me: 10,
    spouse: 5,
  },
  round2: {
    me: 5,
    spouse: 20,
  },
  round3: {
    me: 10,
    spouse: 10,
  },
}))
//➞ "NOBODY!"
- nobody won since round 1 me won, round 2, spouse won, and round 3 is a tie
- meaning each person won 1 round
- it is tie/draw so we return 'NOBODY!'

console.log(determineWinnerOfFight({
  round1: {
    me: 40,
    spouse: 5,
  },
  round2: {
    me: 9,
    spouse: 10,
  },
  round3: {
    me: 9,
    spouse: 10,
  },
}))
//➞ "SPOUSE!"
- we return 'SPOUSE!' since spouse won round 1, round 2 and round 3


Data structures:
- objects
- strings
- numbers

Algorithm:
- initialize `mePoints` = 0
- initialize `spousePoints` = 0
- initialize `keys` = Object.keys(obj)
- iterate through rounds using the `keys`
  - for each round check if me has more points than spouse
    - if yes, increment `mePoints` by 1
    - else increment `spousePoints` by 1
    - if even, don't do anything
- compare `mePoints` and `spousePoints`
  - if `mePoints` is more, return 'ME!'
  - if `spousePoints` is more, return 'SPOUSE!'
  - else return 'NOBODY!'
*/

function invalidInput(obj) {
  return (!obj || obj.constructor !== Object) || Object.keys(obj).length === 0;
}

function determineWinnerOfFight(obj) {
  if (invalidInput(obj)) return 'Invalid input';
  let mePoints = 0;
  let spousePoints = 0;

  Object.keys(obj).forEach(round => {
    if (obj[round].me > obj[round].spouse) {
      mePoints += 1;
    } else if (obj[round].me < obj[round].spouse) {
      spousePoints += 1;
    }
  });

  if (mePoints > spousePoints) return 'ME!';
  if (mePoints < spousePoints) return 'SPOUSE!';
  return 'NOBODY!';
}
// Examples
console.log(determineWinnerOfFight({
  round1: {
    me: 10,
    spouse: 5,
  },
  round2: {
    me: 5,
    spouse: 20,
  },
  round3: {
    me: 10,
    spouse: 10,
  },
}))
//➞ "NOBODY!"


console.log(determineWinnerOfFight({
  round1: {
    me: 40,
    spouse: 5,
  },
  round2: {
    me: 9,
    spouse: 10,
  },
  round3: {
    me: 9,
    spouse: 10,
  },
}))
//➞ "SPOUSE!"

// 19 mins 31 secs

console.log(determineWinnerOfFight({
  round1: {
    me: 10,
    spouse: 5,
  },
  round2: {
    me: 5,
    spouse: 20,
  },
  round3: {
    me: 15,
    spouse: 10,
  },
}))
//➞ "ME!"


console.log(determineWinnerOfFight())
//➞ "Invalid Input"

console.log(determineWinnerOfFight({}))
//➞ "Invalid Input"

console.log(determineWinnerOfFight('{}'))
//➞ "Invalid Input"


console.log(determineWinnerOfFight(''))
//➞ "Invalid Input"

console.log(determineWinnerOfFight([]))
//➞ "Invalid Input"

console.log(determineWinnerOfFight(null))
//➞ "Invalid Input"

console.log(determineWinnerOfFight(undefined))
//➞ "Invalid Input"

console.log(determineWinnerOfFight(NaN))
//➞ "Invalid Input"