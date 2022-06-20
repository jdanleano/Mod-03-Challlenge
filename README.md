# Module 03 Challenge

## Mock Up

![This is a screenshot of my portfolio](./Assets/03-javascript-homework-demo.png)

This is my completed code for the Module 03 challenge this week. This week's Challenge required me to modify starter code to create an application that enables employees to generate random passwords based on criteria that they’ve selected. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished, responsive user interface that adapts to multiple screen sizes. The password can include special characters.

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

The Acceptance Criteria is as follows:

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

What I did to complete this challenge is take each individual criteria one at a time, while also trying to minimize repetativeness in the code. I first opened the given js file and added variables representing the user input for the password criteria. I then entered all the values for the alphanumeric characters, special characters, and a variable that holds the function to convert lower to uppercase letters. I then added an event listener to the variable generateBtn, so once clicked, will run the written function to start the password criteria prompts.

I then went on to create the actual function to generate the password, starting off with the prompt to ask how many characters the user would like to use between 8 and 128. If no value is selected, a prompt will appear, saying that a number between 8 and 128 is required to continue. I then starting writing the code for all variations of password criteria in the form of else if statements. I added else if statemts for 4 positive options, all the way down to 1 possible option. I also added an else if function in order to convert the lowercase characters to uppercase characters.

At the last end of the js file, I created a for loop in order to pick and randomize the user selected options. I used the Math variables to complete this, with the help of extended online research to find out how to use this properly. I also added a variable ps to convert the password array into a string that will be displayed to the output box. Lastly I added a function to have the generated password show up in the password section of the document using .textContent.



## Please see attached links to Repository and Deployed Page:



