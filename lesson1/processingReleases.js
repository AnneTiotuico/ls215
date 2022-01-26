/*
problem:
create a function `processReleaseData` that generates an array of objects that contain only the `id` and `title` key/value pairs.
rules: id is greater than 0 and title should be non-empty string
keep only the releases that have BOTH id and title properties
keep only the id and title data for each release
input: array of objects
output: array of objects

examples:
processReleaseData(newReleases);
// should return:
[{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];
The above two objects are the only ones that have both an id and title

data structures:
objects, arrays, numbers, strings

algorithm:
iterate through each object and check if they have both an id and title property
filter only the objects that do
then return an array of those objects where we only include the id and title
*/
let newReleases = [
  {
    'id': 70111470,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];

// function processReleaseData(data) {
//   let processed =  data.filter(release => release['id'] && release['title']);
//   return processed.map(release => Object({id: release['id'], title: release['title']}));
// }

// OR:
// function processReleaseData(data) {
//   let processed =  data.filter(release => release['id'] && release['title']);
//   return processed.map(release => { return { id: release['id'], title: release['title'] }});
// }


// OR:
function processReleaseData(data) {
  let processed =  data.filter(release => release['id'] && release['title']);
  return processed.map(release => ({ id: release['id'], title: release['title'] }));
}

console.log(processReleaseData(newReleases));

// should return:
// [{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];

// Further Exploration:
// The current solution assumes that the value of id will be an integer value
// greater than 0. If it was possible to have a value of 0 for id, what would
// the implications be to the current solution? What changes, if any, would
// need to be made in order to handle the 0 value?

// We would have to add a comparison to include 0 value ids:

// function processReleaseData(data) {
//   let processed =  data.filter(release => release['id'] >= 0 && release['title']);
//   return processed.map(release => { return { id: release['id'], title: release['title'] }});
// }

