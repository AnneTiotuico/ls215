// John keeps a backup of his old personal phone book as a text file. On each line of the file he can find the phone number (formated as +X-abc-def-ghij where X stands for one or two digits), the corresponding name between < and > and the address.

// Unfortunately everything is mixed, things are not always in the same order; parts of lines are cluttered with non-alpha-numeric characters (except inside phone number and name).

// Examples of John's phone book lines:

// "/+1-541-754-3010 156 Alphand_St. <J Steeve>\n"

// " 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010!\n"

// "<Anastasia> +48-421-674-8974 Via Quirinal Roma\n"

// Could you help John with a program that, given the lines of his phone book and a phone number num returns a string for this number : "Phone => num, Name => name, Address => adress"

// Examples:
// s = "/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010!\n"

// phone(s, "1-541-754-3010") should return "Phone => 1-541-754-3010, Name => J Steeve, Address => 156 Alphand St."


/*
Problem:
- given a string representing john's phone book, a second string representing a # we want to store for the contact, return 1 string that contains labels => value, Phone, Name, Address

rules/requirements:
- contacts will always only have 1 address, 1 phone, 1 name
- the name will be between < >
- the phone number wil be in this format -> +X-abc-def-ghij
  - literal +, X is 1 or 2 digits, then abc... represents single digits separated -
  - address is what is left over after we remove the phone and name and
- non string 1st arg, return 'Not Valid Directory'
- 1st arg needs at least 1 \n char
- non str 2nd arg, return 'Not a Valid Phone Number'
  - to be valid, has to be a string that is formatted properly X-abc-def-ghij
  - 2nd arg wont ever have the +prepended
- empty str for 1st is valid
- empty str for 2nd arg return 'Not a Valid Phone Number
- it can happen that the number num is not in the phone book, in that case return: "Error => Not found: num"
- order matters always phone, name, address

input: 2 strings
output: 1 string

Examples/test cases:
// "/+1-541-754-3010 156 Alphand_St. <J Steeve>\n"
phone("/+1-541-754-3010 156 Alphand_St. <J Steeve>\n", '1-541-754-3010' )
// => 'Phone => 1-541-754-3010, Name => J Steeve, Address => 156 Alphand St.
- notice that we remove the + from phone number, (remove any chars besides -)
- remove the < > from Name (remove any chars besides A-Z/a-z or spaces)
- remove _ from Address (remove any chars besides 0-9, a-z/A-Z spaces and . and -)

// " 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010!\n"
=> "Phone => 1-541-914-3010, Name => E Kustur, Address => 133 Green Rd. NY-56423"

// "<Anastasia> +48-421-674-8974 Via Quirinal Roma\n"
=> "Phone => 48-421-674-8974, Name => Anastasia, Address => Via Quirinal Roma"

// s = "/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010!\n"

// phone(s, "1-541-754-3010") should return "Phone => 1-541-754-3010, Name => J Steeve, Address => 156 Alphand St."

Data structures:
- strings
- regex?
- arrays?

notes:
- \n represents the end of a contact
- extract address last

- cleaning address
156 Alphand_St. => 156 Alphand Str.
 133, Green, Rd. => 133 Green Rd.
- remove leading /trailing spaces
- remove any chars that arent a space between each word
- keep the . at the end

Algorithm:
- guard clause(s):
  - if `invalidDirectory` returns true, return 'Not a valid directory'
  - if `invalidPhone` return true, return 'Not a valid phone number'
  - if `phoneNum` isn't included in the directory, "Error => Not found: `phoneNum`"

- initialize an array `contacts` = directory.split('\n')
- iterate through the `contacts` using map
  - check if the contact includes the `phoneNum`
    - return that if it is
- transformed array should contain the contact we want and undefined
- iterate through transformed array to get rid of undefined (filter)

- at this point, `contacts` is an array holding 1 string ["/+1-541-754-3010 156 Alphand_St. <J Steeve>"]

- extract name from `contacts` using regex .match(/<([A-Z ]+)>/i) (result[1]) save to `name`
- remove name from str so `contacts`.replace(//, '')

- extract phone number from `contacts` using regex  save to `phone`
- remove phone from str so `contacts`.replace(//, '')

- left with the address (clean the address) save to `address`

- return string 'Phone => ${phone}, Name => ${name}, Address => ${address}'

- `invalidDirectory` helper method
  - check if directory is NOT a string || doesn't include '\n'
    - return true if above is true
    - false otherwise

- `invalidPhone`  helper method
  - check if phone is NOT string || its not matching a specific format X-abc-def-ghij
    - return true if above is true
    - false otherwise
*/
function invalidDirectory(directory) {
  return typeof directory !== 'string' || !directory.includes('\n')
}

function invalidPhone(phone) {
  return typeof phone !== 'string' || !/^\d{1,2}-\d{3}-\d{3}-\d{4}$/.test(phone)
}

// - initialize an array `contacts` = directory.split('\n')
// - iterate through the `contacts` using map
//   - check if the contact includes the `phoneNum`
//     - return that if it is
// - transformed array should contain the contact we want and undefined
// - iterate through transformed array to get rid of undefined (filter)

// - at this point, `contacts` is an array holding 1 string ["/+1-541-754-3010 156 Alphand_St. <J Steeve>"]

function phone(directory, phoneNum) {
  if (invalidDirectory(directory)) return 'Not a valid directory';
  if (invalidPhone(phoneNum)) return 'Not a valid phone number';
  if (!directory.includes(phoneNum)) return `Error => Not found: ${phoneNum}`;

  let correctContact = directory.split('\n').filter(contact => contact.includes(phoneNum))[0];
  let name = correctContact.match(/<([A-Z ]+)>/i)[1]
  let removedName = correctContact.replace(/<[A-Z ]+>/i, '')

  let phone = removedName.match(/\+(\d{1,2}-\d{3}-\d{3}-\d{4})/)[1]
  let removedPhone = removedName.replace(/\+\d{1,2}-\d{3}-\d{3}-\d{4}/, '')
  let address = removedPhone.trim().replace(/[^0-9a-z . -]/gi, ' ').replace(/[ ]+/g, ' ');

  return `Phone => ${phone}, Name => ${name}, Address => ${address}`
}

// It can happen that there are many people for a phone number num, then return : "Error => Too many people: num"


// console.log(phone(15, "1-541-754-3010"))

// console.log(phone('/+1-541-754-3010 156 Alphand_St. <J Steeve>', "1-541-754-3010"))
// console.log(phone('+1-541-754-3010 156 Alphand_St. <J Steeve>\n', "121-541-754-3010"))
// console.log(phone('/+1-541-754-3010 156 Alphand_St. <J Steeve>\n', NaN))

let a = " 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010!\n"
console.log(phone(a, "1-541-914-3010"))
// => "Phone => 1-541-914-3010, Name => E Kustur, Address => 133 Green Rd. NY-56423"

let b = "<Anastasia> +48-421-674-8974 Via Quirinal Roma\n"
console.log(phone(b, "48-421-674-8974"))
// => "Phone => 48-421-674-8974, Name => Anastasia, Address => Via Quirinal Roma"

// let s = "/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010!\n"

// console.log(phone(s, "1-541-754-3010")) //should return "Phone => 1-541-754-3010, Name => J Steeve, Address => 156 Alphand St."


// let r = "/+1-541-754-3010 156 Alphand_St. <J Steeve>\n 133, Green, Rd. <E Kustur> NY-56423 ;+1-541-914-3010!\n"

// console.log(phone(r, "1-541-754-3050"))