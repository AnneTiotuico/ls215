/*
problem:
create a function `totalArea` that takes an array of rectangles as an argument
and returns the total area covered by all the rectangles
input: array of sub arrays
output: number

example:
[[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]] = 141
  12  +    36    +   8   +    81  +  4   = 141

data structures:
arrays, numbers

algorithm:
iterate through each sub array in the array
multiply the two numbers within the sub arr together
add all those products together to get the result
*/


function totalArea(rectangles) {
  return rectangles.map(rect => rect[0] * rect[1]).reduce((total, area) => total + area);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));    // 141

