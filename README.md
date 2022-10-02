# module-3-challenge

## Description

The purpose of Module 3 Challenge was to use our knowledge of JavaScript to write code that will gather the user's desired password criteria (length and types of characters) and generate a random password based on the criteria selected.

## Installation

N/A

## Usage

When the user clicks on the "Generate Password" button, a series of prompts will appear. First, the user picks a desired length for their password: between 8-128. Then, they are presented with the choice of what types of characters they want in their password: lowercase, uppercase, numeric, and/or special. To do so they either select "OK" to include that type of character or "Cancel" to not include that type of character. Finally, a password meeting those specifications is generated.
The following fail-safes are in place:
- If the user hits enter before inputting a number, they will be alerted to that and returned to the prompt to select the number of characters.
- If the user enters a number below 8, they will be alerted to the fact that the number must be at least 8 and returned to the prompt to select the number of characters.
- If the user enters a number above 128, they will be alerted to the fact that the number must be no greater than 128 and returned to the prompt to select the number of characters.
- If the user selects "Cancel" for all four character types, they will be alerted to the fact that they must select at least one type of character and returned to the beginning of the character type selection choices.
- If the password generated does not contain all of the user selected types of characters, the functions will re-reun until a password is generated that does have at least one of each type of character selected by the user.

When opened, this page appears as follows:
![alt text](./assets/annhixson.github.io_module-3-challenge%20before%20generating%20a%20password.png)
When a password has been generated, the page appears as follows:
![alt text](./assets/annhixson.github.io_module-3-challenge%20with%20password%20generated.png)
This app can be found at the following link: [https://annhixson.github.io/module-3-challenge/](https://annhixson.github.io/module-3-challenge/)

## Credits

- README template is from [https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)

- How to access elements in nested arrays: [https://www.codecademy.com/forum_questions/54a31674d3292ff5640169ca](https://www.codecademy.com/forum_questions/54a31674d3292ff5640169ca)

- When I was stymied in my attempts at getting the password text to appear in the box on the page, I found 3 pieces of code (and the placement of those pieces) from the messages from Reddit ussers u/itsMillerGaming and u/MrSloppyPants. Those pieces have a comment, in the javascript, on the same line, after the code, saying that it came from reddit and give the username of the one I got it from. The post and its comments are here: [https://www.reddit.com/r/learnprogramming/comments/p5hgem/im_still_really_new_to_js_and_i_have_an/](https://www.reddit.com/r/learnprogramming/comments/p5hgem/im_still_really_new_to_js_and_i_have_an/)

## License

N/A
