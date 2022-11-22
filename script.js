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

function characterArray(array, id, include) {
  this.array = array;
  this.id = id;
  this.include = include;
}

const lowerCasedCharactersObj = new characterArray(lowerCasedCharacters, "#lowercase", false);
const upperCasedCharactersObj = new characterArray(upperCasedCharacters, "#uppercase", false);
const numericCharactersObj = new characterArray(numericCharacters, "#numeric", false);
const specialCharactersObj = new characterArray(specialCharacters, "#specialCharacters", false);


const typesArray = [lowerCasedCharactersObj, upperCasedCharactersObj, numericCharactersObj, specialCharactersObj];

var optionsFiltered = [];

var pwordlength = 0;

// GetRandomInt from https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to prompt user for password options
function getPasswordOptions() {

  typesArray.forEach(function (item) 
  {
   item.include = document.querySelector(item.id).checked;
  }
  )

  console.log(typesArray);

  pwordlength = document.querySelector("#pwordlength").value;

  console.log(pwordlength);

}


// Validate password length entry
function validatePwordLength(pwordlength) {
  if (pwordlength > 9 && pwordlength < 65)
  {
    document.querySelector("#pwordlengthvalidation").style.color = "green";
    document.querySelector("#pwordlengthvalidation").innerHTML = "Valid password length";
    return true;
  }
  else
  {
    document.querySelector("#pwordlengthvalidation").style.color = "red";
    document.querySelector("#pwordlengthvalidation").innerHTML = "Password length must be between 10 - 64 characters";
    return false;
  }
}

// Check at least one character type selected
function validateCharacterTypes(array)
{

  for (var i = 0; i < typesArray.length; i++)
  {
      if (typesArray[i].include == true)
      {
        return true;
      }
  }
  
  document.querySelector("#validateCharacterTypes").style.color = "red";
  document.querySelector("#validateCharacterTypes").innerHTML = "At least 1 character type must be selected";

  return false;

}


// Function for getting a random element from an array
function getRandom(arr) {
  var random_number = getRandomInt(0, arr.length-1);
  return arr[random_number];
}


// Function to generate password with user input
function generatePassword() 
{
  var chosenArrays = typesArray.filter(function (el) {
    return el.include == true;
  });

  console.log(chosenArrays);

for (var i = 0; i < pwordlength;i++)
{
  var random_number = getRandomInt(0, chosenArrays.length-1);
  characterArray = chosenArrays[random_number].array;
  var randomChar = getRandom(characterArray);
  console.log(randomChar);
}
return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  getPasswordOptions();
  validatePwordLength(pwordlength);
  validateCharacterTypes(typesArray);
  if(validatePwordLength(pwordlength) && validateCharacterTypes(typesArray))
  {
  var password = generatePassword();
  var passwordText = document.querySelector('#password'); 
  passwordText.value = password;
  }
  else
  {
    stop;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);