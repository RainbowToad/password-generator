// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword () {
  
  var passLength = window.prompt("Character Length?")
  
  if (passLength<8 || passLength>128) {
    window.alert("Must be between 8-128 characters")
    return;
  }

  window.confirm("Would you like to include lowercase letters?")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;cd

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
