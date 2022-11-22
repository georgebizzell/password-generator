// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

console.clear();

var typesArray = [];

var pwordlength = 0;

// GetRandomInt from https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to prompt user for password options
function getPasswordOptions() {

  var pwordlength = document.querySelector("#pwordlength").value;
  const lowercase = document.querySelector("#lowercase");
  const uppercase = document.querySelector("#uppercase");
  const numeric = document.querySelector("#numeric");
  const special = document.querySelector("#specialCharacters"); 

  ArrayOption = {
    array: 'lowerCasedCharacters',
    use: document.querySelector("#lowercase").checked
  }

  typesArray.push(ArrayOption);

  console.log(typesArray);

  /*upperCasedCharacters
  numericCharacters
  specialCharacters */

  console.log(pwordlength);
  console.log(lowercase.checked);
  console.log(uppercase.checked);
  console.log(numeric.checked);
  console.log(special.checked);
}

//Filter arrays by options
/*
function filterArrays
{

}
*/

// Validate password length entry
function validatePwordLength(pwordlength) {
  if (pwordlength > 9 && pwordlength < 65)
  {
    document.getElementsByName("pwordlengthvalidation") = "Valid length";
  }
  else
  {
    document.getElementsByName("pwordlengthvalidation") = "Incorrect entry - Password length must be between 10 - 65 characters";
  }
}



// Function for getting a random element from an array
function getRandom(arr) {
  var random_number = getRandomInt(0, arr.length);
  return arr[random_number];
}

console.log(getRandom(upperCasedCharacters));

// Function to generate password with user input
function generatePassword() {
for (var i; i < pwordlength;i++)
{
  console.log("generatePasswordCalled");
}
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {

  getPasswordOptions();
  validatePwordLength(pwordlength);
  var password = generatePassword();
  var passwordText = document.querySelector('#password'); 

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);