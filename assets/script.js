// Assignment code here
//new attempt



function generatePassword() {
  // define variables for later use
  var passwordFinal = "";
  var charLibrary = "";

  // take in the length of the password
  var passwordLength = window.prompt("Enter a character length for the password between 8 and 128 characters.");
  if (passwordLength < 8 ||  passwordLength > 128) {
    window.alert("Invalid entry.");
    generatePassword();
  }

  var promptLower = window.prompt("Would you like to include lowercase characters in the password?");
  // if yes or YES, include "abcdefghijklmnopqrstuvwxyz" in possible characters
  if (promptLower === "yes" || promptLower === "YES") {
    charLibrary += "abcdefghijklmnopqrstuvwxyz";
  }

  var promptUpper = window.prompt("Would you like to include uppercase characters in the password?");
  // if yes or YES, include "ABCDEFGHIJKLMNOPQRSTUVWXYZ" in possible characters
  if (promptUpper === "yes" || promptUpper === "YES") {
    charLibrary += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  var promptNum = window.prompt("Would you like to include numeric characters in the password?");
  // if yes or YES, include "1234567890" in possible characters
  if (promptNum === "yes" || promptNum === "YES") {
    charLibrary += "1234567890";
  }

  var promptSpecial = window.prompt("Would you like to include special characters in the password?");
  // if yes or YES, include " !"#$%&')(*+,-./:;<=>?@[\]^_`{|}~" in possible characters
  if (promptSpecial === "yes" || promptSpecial === "YES") {
    charLibrary += " !\"#$%\&\')(*+,-./:;<=>?@[\\]^_`{|}~";
  }

  for (var i = 0; i < passwordLength; i++) {
    passwordFinal += charLibrary.charAt(Math.floor(Math.random() * passwordLength));
  }

  return passwordFinal;
};


// Get references to the #generate element (button)
var generateBtn = document.querySelector("#generate");


// Write password to the #password input (inside the card body)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button (on click, call function writePassword)
generateBtn.addEventListener("click", writePassword);

