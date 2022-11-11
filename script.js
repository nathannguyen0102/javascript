// specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters arrays:
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// select element by id
var generateButton = document.querySelector("#generate");
var passwordDisplay = document.querySelector("#password");

// password option
function passwordOption() {
  var numberCharacter = parseInt(
    prompt("How many charactters password have ?")
  );

  if (numberCharacter < 8 || numberCharacter >= 128) {
    alert(
      "password must have more than 8 characters and less than 129 characters"
    );
    return null;
  }

  var specialCharactersConfirm = confirm(
    "Password contains special character ?"
  );

  var numericCharactersConfirm = confirm(
    "Password contains numeric characters ?"
  );

  var lowerCasedCharactersConfirm = confirm(
    "Password contains lowercase characters ?"
  );

  var upperCasedCharactersConfirm = confirm(
    "Password contains uppercase characters ?"
  );

  if (
    specialCharactersConfirm === false &&
    numericCharactersConfirm === false &&
    lowerCasedCharactersConfirm === false &&
    upperCasedCharactersConfirm === false
  ) {
    alert("password must have one type of character");
    return null;
  }

  var passwordObject = {
    length: numberCharacter,
    specialCharactersConfirm: specialCharactersConfirm,
    numericCharactersConfirm: numericCharactersConfirm,
    lowerCasedCharactersConfirm: lowerCasedCharactersConfirm,
    upperCasedCharactersConfirm: upperCasedCharactersConfirm,
  };

  return passwordObject;
}

// get a random element in a array
function getRandom(input) {
  var randomNumber = Math.floor(Math.random() * input.length);
  var randomEl = input[randomNumber];
  return randomEl;
}

function getPassword() {
  var option = passwordOption();
  // Store elements of password and filloutCharacters in arrays
  var password = [];
  var filloutCharacters = [];

  // Store number of must have characters
  var takeSpot = 0;

  //check if password has option characters and add it to the password array
  if (option.specialCharactersConfirm) {
    filloutCharacters = filloutCharacters.concat(specialCharacters);
    password.push(getRandom(specialCharacters));
    takeSpot++;
  }

  if (option.numericCharactersConfirm) {
    filloutCharacters = filloutCharacters.concat(numericCharacters);
    password.push(getRandom(numericCharacters));
    takeSpot++;
  }

  if (option.lowerCasedCharactersConfirm) {
    filloutCharacters = filloutCharacters.concat(lowerCasedCharacters);
    password.push(getRandom(lowerCasedCharacters));
    takeSpot++;
  }

  if (option.upperCasedCharactersConfirm) {
    filloutCharacters = filloutCharacters.concat(upperCasedCharacters);
    password.push(getRandom(upperCasedCharacters));
    takeSpot++;
  }

  // number of random left over characters
  var numberFilloutCharacter = option.length - takeSpot;

  // add a left over random characters to password
  for (var i = 0; i < numberFilloutCharacter; i++) {
    var filloutCharacter = getRandom(filloutCharacters);
    password.push(filloutCharacter);
  }
  // return
  return password.join("");
}

//generate function and display password
function createPassword() {
  var passwordValue = getPassword();
  passwordDisplay.value = passwordValue;
}

//Event Listener(click);
generateButton.addEventListener("click", createPassword);
