// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  // Beginning of my code

  function generatePassword() {
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
    var lowerCaseCount;
    var upperCaseCount;
    var numericCount;
    var specialCount;

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
        alert("At least one type of character must be included.");
        passwordIncludes();
      };
    };
    // Call function
    passwordIncludes();

    // Conclude Prompts
    alert("Thank you.\nNow generating your password...");

    // Generate the characters of the password
    function characterTypesIncluded() {
      // Character arrays
      optionsLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      optionsUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
      optionsNumeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      optionsSpecial = [" ", "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
      // Array of character arrays
      optionsOptions = [optionsLowerCase, optionsUpperCase, optionsNumeric, optionsSpecial];

      // Which character arrays to use
      // User selected all types of characters
      if (lowerCase && upperCase && numeric && special) {
        optionsOptions = [optionsLowerCase, optionsUpperCase, optionsNumeric, optionsSpecial];
      // User selected three types of characters
      } else if (lowerCase && upperCase && numeric && !special) {
        optionsOptions = [optionsLowerCase, optionsUpperCase, optionsNumeric];
      } else if (lowerCase && upperCase && !numeric && special) {
        optionsOptions = [optionsLowerCase, optionsUpperCase, optionsSpecial];
      } else if (lowerCase && !upperCase && numeric && special) {
        optionsOptions = [optionsLowerCase, optionsNumeric, optionsSpecial];
      } else if (!lowerCase && upperCase && numeric && special) {
        optionsOptions = [optionsUpperCase, optionsNumeric, optionsSpecial];
      // User selected two types of characters 
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
      // User selected one type of character 
      } else if (lowerCase && !upperCase && !numeric && !special) {
        optionsOptions = [optionsLowerCase];
      } else if (!lowerCase && upperCase && !numeric && !special) {
        optionsOptions = [optionsUpperCase];
      } else if (!lowerCase && !upperCase && numeric && !special) {
        optionsOptions = [optionsNumeric];
      } else if (!lowerCase && !upperCase && !numeric && special) {
        optionsOptions = [optionsSpecial];
      };
    };
    // Call function
    characterTypesIncluded();

    // Generate the characters of the password
    function generateCharacters() {
      characterCount = numberOfCharacters;
      // Sets password to a string
      password = [""] /* reddit based u/itsMillerGaming */
      // For each of the selected number of characters...
      for (characterCount; characterCount > 0; characterCount--) {
        // Select an array
        selectArray = Math.floor(Math.random() * optionsOptions.length);
        // Select a character
        character = Math.floor(Math.random() * optionsOptions[selectArray].length);
        // Add character to password string
        password += (optionsOptions[selectArray][character]);
        // "password +=" is reddit based u/MrSloppyPants
      };
    };
    // Call function
    generateCharacters();

    // Check that password has all requested character types
    function characterTally() {
      lowerCaseCount = 0;
      upperCaseCount = 0;
      numericCount = 0;
      specialCount = 0;
      var passwordCharacterCount = password.length;
      var passwordCharacter;
      
      for (passwordCharacterCount; passwordCharacterCount > 0; passwordCharacterCount--) {
        passwordCharacter = password[passwordCharacterCount-1];
        if (optionsLowerCase.includes(passwordCharacter)) {
          lowerCaseCount++;
        };
        if (optionsUpperCase.includes(passwordCharacter)) {
          upperCaseCount++;
        };
        if (optionsNumeric.includes(passwordCharacter)) {
          numericCount++;
        };
        if (optionsSpecial.includes(passwordCharacter)) {
          specialCount++;
        };
      };
    };
    // Call function
    characterTally();

    function confirmCharacters() {
      if (optionsOptions.includes(optionsLowerCase) && lowerCaseCount === 0) {
        generateCharacters();
        characterTally();
        confirmCharacters();
      };
      if (optionsOptions.includes(optionsUpperCase) && upperCaseCount === 0) {
        generateCharacters();
        characterTally();
        confirmCharacters();
      };
      if (optionsOptions.includes(optionsNumeric) && numericCount === 0) {
        generateCharacters();
        characterTally();
        confirmCharacters();
      };
      if (optionsOptions.includes(optionsSpecial) && specialCount === 0) {
        generateCharacters();
        characterTally();
        confirmCharacters();
      };
    };
    // Call function
    confirmCharacters();

    // Returns the completed password
    return password; /* reddit based u/MrSloppyPants */
  };

  // End of my code


  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
