// "Write a function called doubler that doubles every value in an array".
// - elements that are numbers should be multiplied by 2
let arr = [1, 2, 3];
doubler(arr); // [2, 4, 6]

// - elements that are strings should be repeated twice via concatenation
let arr2 = ['a', 'hi', 'abc'];
doubler(arr2);  // ['aa', 'hihi', 'abcabc']

// - other types of elements should be duplicated in the array
let arr3 = [undefined, null, true, false, [], {}, function() {}]
doubler(arr3); // [undefined, undefined, null, null, true, true, false, false, [], [], {}, {}, function() {}, function() {}]

// - the input array should not be mutated
let arr4 = [4, 5, 6];
doubler(arr4) // [8, 10, 12]
console.log(arr4); // [4 ,5, 6]

let arr5 = ['a', 'hi', 'abc'];
doubler(arr5) // ['aa', 'hihi', 'abcabc']
console.log(arr4); // ['a', 'hi', 'abc']

// - elements that are special number values should remain unchanged
let arr6 = [NaN, Infinity, -Infinity];
doubler(arr6); // [NaN, Infinity, -Infinity]

// - elements that are any other type of number should be treated normally (multiplied by 2)
let arr7 = [0, -0, 1, 2]
doubler(arr7); // [0, -0, 2, 4]

// - elements that are empty strings should remain unchanged
let arr8 = ['', 'a', ''];
doubler(arr8); // ['', 'aa', '']

// - elements that are any other type of string should be treated normally (repeated twice)
let arr9 = ['x', ' ', '--', '0']
doubler(arr9); // ['xx', '  ', '----', '00']

// - the input array can contain a mixture of different types of elements
let arr10 = [1, '', NaN, {}, 'cc'];
doubler(arr10); // [2, '', NaN, {}, {}, 'cccc']

// - non-primitive elements should have their reference duplicated, not their value
let nonPrim = {a: 5}
let arr11 = [nonPrim, 'a', 5];
let result = doubler(arr11); // [nonPrim, nonPrim, 'aa', 10]
result[0] === result[1] // true

let arr12 [{a: 1}, 's'];
doubler(arr12); // [{a: 1}, arr12[0], 'ss']


// - elements that appear more than once should be treated normally (as specified above)
let arr13 = ['a', 'a', 1, 2, 1, true, true];
doubler(arr13) // ['aa', 'aa', 2, 4, 2, true, true, true, true]

// - elements that contain nested arrays or objects should be treated normally (duplicated)
let arr14 = [[1], {a: [5]}, [1, {}]];
doubler(arr14); // [[1], [1], {a: [5]}, {a: [5]}, [1, {}], [1, {}]];
//*keep in the mind that these should all duplicate the reference and not the value

// - if the input array contains empty slots (a "sparse array"), they should be removed
let arr15 = [1, , 2, ,3];
doubler(arr15); // [2, 4, 6]

// - if an inner array (element) contains empty slots, they should remain unchanged
let arr16 = [[1, , 2, , 3]];
doubler(arr16); // [[1, , 2, , 3], [1, , 2, , 3]]

// - if the input array contains any object properties, they should remain unchanged
let arr17 = [1, 2];
arr17.a = 5; // [1, 2, a: 5]
doubler(arr17); // [2, 4, a: 5]

// - if an inner array (element) contains any object properties, they should remain unchanged
let arr18 = [[1, 2]];
arr18[0].a = 5; // [[1, 2, a: 5]];
doubler(arr18); // [[1, 2, a: 5], [1, 2, a: 5]]

// - if the array is empty, return an empty array
let arr19 = [];
doubler(arr19); // []

// - if multiple arguments are passed, ignore all but the first
let arr20 = ['ab', 1];
let arr21 = [1, 2, 3];
doubler(arr20, arr21); // ['abab', 2]

// - if the argument is a string, treat it as an array of characters
let str = 'abcd';
doubler(str) // ['aa', 'bb', 'cc', 'dd']

// - if the argument is a non-negative integer, treat it as an array of digits
let int = 1234;
doubler(int); // [2, 4, 6, 8];

// - if the argument is an object, treat it as an array of its property values
let myObj = {a: 3, b: 4: 'hi': 5};
doubler(myObj); // [6, 8, 10]

// - all other kinds of inputs are invalid, and should return the string 'Invalid input'
//it can accept an array, a string, a non negative integer, an object, one or more inputs
doubler(-0); // 'Invalid input'
doubler(-1); // 'Invalid input'
doubler();   // 'Invalid input'
doubler(NaN);   // 'Invalid input'
doubler(Infinity);   // 'Invalid input'
doubler(-Infinity);   // 'Invalid input'
doubler(undefined);   // 'Invalid input'
doubler(null);   // 'Invalid input'
doubler(true);   // 'Invalid input'
doubler(false);   // 'Invalid input'
doubler(function() {});   // 'Invalid input'


