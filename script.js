// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



  // testing
  


  // Beginning of my code

  var numberOfCharacters;
  var lowerCase;
  var upperCase;
  var numeric;
  var special;

  var characterCount;

  var optionsLowerCase;
  var optionsUpperCase;
  var optionsNumeric;
  var optionsSpecial;
  var optionsOptions;

  var selectArray;
  var character;


  // testing b
  // var actualPassword = [];




  // Begin Prompts
  window.alert("Please answer the following questions in order to set the parameters for your password.");

  // Select number of characters
  function setNumber() {
    numberOfCharacters = prompt("Number of characters in password (from 8-128):");
    // Invalid answers:
    //  Nothing entered
    if (numberOfCharacters === "") {
      alert("You did not enter a number. Please try again.");
      setNumber();
    // Too small
    } else if (numberOfCharacters < 8) {
      alert("Number must be at least 8.");
      setNumber();
    // Too big
    } else if (numberOfCharacters > 128) {
      alert("Number must be no more than 128.");
      setNumber();
    } else {
      characterCount = numberOfCharacters;
    };
  };
  // Call function
  setNumber();
  
  // Pasword criteria selection
  function passwordIncludes() {
    lowerCase = confirm("Include lowercase characters?");
    upperCase = confirm("Include uppercase characters?");
    numeric = confirm("Include numeric characters?");
    special = confirm("Include special characters?");
    // no characters
    if (!lowerCase && !upperCase && !numeric && !special) {
      var tryAgainPickOne = alert("At least one type of character must be included.");
      passwordIncludes();
    };
  };
  // Call function
  passwordIncludes();

  // Conclude Prompts
  alert("Thank you.\nNow generating your password...");


  // Generate password
  function generatePassword() {
    // character arrays
    optionsLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    optionsUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    optionsNumeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    optionsSpecial = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
    // array of character arrays
    optionsOptions = [optionsLowerCase, optionsUpperCase, optionsNumeric, optionsSpecial];

    // Which character arrays to use
    // all yes
    if (lowerCase && upperCase && numeric && special) {
      optionsOptions = [optionsLowerCase, optionsUpperCase, optionsNumeric, optionsSpecial];
      // one no
    } else if (lowerCase && upperCase && numeric && !special) {
      optionsOptions = [optionsLowerCase, optionsUpperCase, optionsNumeric];
    } else if (lowerCase && upperCase && !numeric && special) {
      optionsOptions = [optionsLowerCase, optionsUpperCase, optionsSpecial];
    } else if (lowerCase && !upperCase && numeric && special) {
      optionsOptions = [optionsLowerCase, optionsNumeric, optionsSpecial];
    } else if (!lowerCase && upperCase && numeric && special) {
      optionsOptions = [optionsUpperCase, optionsNumeric, optionsSpecial];
      // two no's
    } else if (lowerCase && upperCase && !numeric && !special) {
      optionsOptions = [optionsLowerCase, optionsUpperCase];
    } else if (lowerCase && !upperCase && numeric && !special) {
      optionsOptions = [optionsLowerCase, optionsNumeric];
    } else if (!lowerCase && upperCase && numeric && !special) {
      optionsOptions = [optionsUpperCase, optionsNumeric];
    } else if (lowerCase && !upperCase && !numeric && special) {
      optionsOptions = [optionsLowerCase, optionsSpecial];
    } else if (!lowerCase && upperCase && !numeric && special) {
      optionsOptions = [optionsUpperCase, optionsSpecial];
    } else if (!lowerCase && !upperCase && numeric && special) {
      optionsOptions = [optionsNumeric, optionsSpecial];
      // three no's
    } else if (lowerCase && !upperCase && !numeric && !special) {
      optionsOptions = [optionsLowerCase];
    } else if (!lowerCase && upperCase && !numeric && !special) {
      optionsOptions = [optionsUpperCase];
    } else if (!lowerCase && !upperCase && numeric && !special) {
      optionsOptions = [optionsNumeric];
    } else if (!lowerCase && !upperCase && !numeric && special) {
      optionsOptions = [optionsSpecial];
    };


    // testing b
    // function actualPassword() {




    // Determines the characters
    for (characterCount; characterCount > 0; characterCount--) {
      // select an array
      selectArray = Math.floor(Math.random() * optionsOptions.length);
      // select a character
      character = Math.floor(Math.random() * optionsOptions[selectArray].length);
      console.log(optionsOptions[selectArray][character]);

      // testing b
      // password = optionsOptions[selectArray][character];
    };


    // }

      // testing b
      // password = actualPassword();

  };
  // Call function
  generatePassword();

      // testing b
      // password = actualPassword();
  // password();
  // testing b
  // console.log(password());
  // password = actualPassword





  // End of my code



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
