// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword () {
  // Prompt user for parameters
  var passLength = window.prompt("Character Length?")
  
  if (passLength<8 || passLength>128) {
    window.alert("Must be between 8-128 characters")
    return;
  }

  var passLower = window.confirm("Would you like to include lowercase letters?");
  var passUpper = window.confirm("Would you like to include Uppercase letters?");
  var passNumber = window.confirm("Would you like to include numbers?");
  var passSpecial = window.confirm("Would you like to include special characters?");


  // Arrays of various parameters
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbols = ["@", "*", "#", "!", "&", "%", "$"];
  var lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


  //Create master array with all options selected
  var generatedOptions = [];

  if (passLower) {
    generatedOptions.push(lowers);
  }

  if (passUpper)  {
    generatedOptions.push(uppers);
  }

  if (passNumber) {
    generatedOptions.push(numbers);
  }

  if (passSpecial)  {
    generatedOptions.push(symbols);
  }

  if (generatedOptions.length === 0) {
    window.alert("You must select at least one option");
    return;
  }

  // Join and manipulate final array so that it may be assessed. 
  var finalOptions = generatedOptions.join('');

  var middleForm = finalOptions.replace(/,/g, "");

  var finalForm = Array.from(middleForm);

  
// Create password array of random items from options array
  var hugeMittens = "";

  for (var i = 0; i<passLength; i++) {
    var tinyMittens = Math.floor(Math.random() * finalForm.length);
    hugeMittens += finalForm[tinyMittens];

  }
  
  return hugeMittens
  

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
