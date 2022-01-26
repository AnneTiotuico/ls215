/*
problem:
create a function `processBands` that takes in an array of objects
the function should change all the country values to 'Canada' for each object
it should also capitalize each word in the 'name' property value and remove any dots (periods)
input-array of objects
output-array of objects (formatted)

examples:
{ name: 'sunset rubdown', country: 'UK', active: false },
should return { name: 'Sunset Rubdown', country: 'Canada', active: false },
where name has all words capitalized and country is changed to Canada

{ name: 'women', country: 'Germany', active: false },
should return { name: 'Women', country: 'Canada', active: false },
where name is capitalized and country changed to Canada

{ name: 'a silver mt. zion', country: 'Spain', active: true },
should return { name: 'A Silver Mt Zion', country: 'Canada', active: true },
where we capitalize all of the words in name and remove the . after 'mt'
also change country to Canada

data structure:
arrays, objects, strings, booleans

algorithm:
have one helper function that changes the country to Canada
-iterate through the object and reassign the country property to 'Canada' for each object

another helper function that capitalizes words in the band name

another helper to remove the dots in the name

*/

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

// function countryToCanada(obj) {
//   obj.country = 'Canada';
// }

// function removeDots(obj) {
//   obj.name = obj.name.replace(/\./g, '');
// }

// function capitalizeName(obj) {
//   obj.name = obj.name.split(' ').map(word => {
//     return word[0].toUpperCase() + word.slice(1);
//   }).join(' ');
// }

// function processBands(data) {
//   data.forEach(band => {
//     countryToCanada(band);
//     removeDots(band);
//     capitalizeName(band);
//   });

//   return data;
// }

//without side effects:

function formatName(str) {
  return str.split(' ').map(word => {
    return word[0].toUpperCase() + word.slice(1)})
                  .join(' ').replace(/\./g, '');
}

function processBands(data) {
  return data.map(band => {
    return {
      name: formatName(band.name),
      country: 'Canada',
      active: band.active,
    };
  });
}

console.log(processBands(bands));
// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]