function myOwnEvery(array, func) {
  let result = true;
  array.forEach(item => { if (!func(item)) result = false });

  return result;
}

let isAString = value => typeof value === 'string';
console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));       // true