// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


  // Prompts
  // window.alert("Please answer the following questions in order to set the parameters for your password.");

  // Select number of characters
  function setNumber() {
    var numberOfCharacters = prompt("Number of characters in password (from 8-128):");
    // Invalid answers:
    //  Nothing entered
    if (numberOfCharacters === "") {
      alert("You did not enter a number. Please try again.");
      setNumber();
    // Too small
    } else if (numberOfCharacters < 8) {
      var tryAgainBigger = confirm("Number must be at least 8.");
      setNumber();
    // Too big
    } else if (numberOfCharacters > 128) {
      var tryAgainSmaller = confirm("Number must be no more than 128.");
      setNumber();
    };
  };
  // Call function
  // setNumber();
  

  // Pasword Includes ...
  function passwordIncludes() {
    var lowerCase = confirm("Include lowercase characters?");
    var upperCase = confirm("Include uppercase characters?");
    var numeric = confirm("Include numeric characters?");
    var special = confirm("Include special characters?");
    // no characters
    if (!lowerCase && !upperCase && !numeric && !special) {
      var tryAgainPickOne = confirm("At least one type of character must be included.");
      passwordIncludes();
    };
  };
  // Call function
  // passwordIncludes();

  // alert("Thank you.\nNow generating your password...");

  // Generate password
  function generatePassword() {
    // character arrays
    var optionsLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var optionsUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var optionsNumeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var optionsSpecial = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
    // array of character arrays
    var optionsOptions = [optionsLowerCase, optionsUpperCase, optionsNumeric, optionsSpecial];

    // select an array
    var selectArray = Math.floor(Math.random() * optionsOptions.length);
    // select a character
    var character = Math.floor(Math.random() * optionsOptions[selectArray].length);

    // testing
    console.log(optionsOptions[selectArray][character]);
  };
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
