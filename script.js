// These are the variables that represent the user input for the password generator. 
var enter;
var numberCheck;
var specCharCheck;
var uppercaseCheck;
var lowercaseCheck;

// Below are all the variable choices in each category. We have special charactrers and alphanumeric characters (both upper and lowercase)  
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// This space will be used for the conversion of lowercase to uppercase letters
space = [];

// Choices declared outside the if statement so they can be concatenated upon condition
var choices;

// Code below converts the lowercase letters to uppercase.
var toUpper = function (x) {
  return x.toUpperCase();
};

// This code creates a variable for uppercase conversion
alpha2 = alpha.map(toUpper);

var generateBtn = document.querySelector("#generate");

//This is where I added the event listener "click" in order to trigger the function
generateBtn.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
});

// Here is where we start the Password Generate function
function generatePassword() {
  // Asks for user input
  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  // First if statement for the user validation 
  if (!enter) {
    alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
    // Validates user input
    // Start user input prompts
    enter = parseInt(prompt("A number between 8 and 128 must be entered to continue"));

  } else {
    // Continues once user input is validated
    numberCheck = confirm("Will this contain numbers?");
    specCharCheck = confirm("Will this contain special characters?");
    uppercaseCheck = confirm("Will this contain Uppercase letters?");
    lowercaseCheck = confirm("Will this contain Lowercase letters?");
  };

  // Below if statement generates an alert box that informs the user that something needs to be selected in order to generage a password
  if (!specCharCheck && !numberCheck && !uppercaseCheck && !lowercaseCheck) {
    choices = alert("An option needs to be selected to continue");

  }
  // Below are the else if statements for 4 positive options 
  else if (specCharCheck && numberCheck && uppercaseCheck && lowercaseCheck) {

    choices = character.concat(number, alpha, alpha2);
  }
  // Below are the else if statements for 3 positive options 
  else if (specCharCheck && numberCheck && uppercaseCheck) {
    choices = character.concat(number, alpha2);
  }
  else if (specCharCheck && numberCheck && lowercaseCheck) {
    choices = character.concat(number, alpha);
  }
  else if (specCharCheck && lowercaseCheck && uppercaseCheck) {
    choices = character.concat(alpha, alpha2);
  }
  else if (numberCheck && lowercaseCheck && uppercaseCheck) {
    choices = number.concat(alpha, alpha2);
  }
  // Below are the else if statements for 2 positive options 
  else if (specCharCheck && numberCheck) {
    choices = character.concat(number);

  } else if (specCharCheck && lowercaseCheck) {
    choices = character.concat(alpha);

  } else if (specCharCheck && uppercaseCheck) {
    choices = character.concat(alpha2);
  }
  else if (lowercaseCheck && numberCheck) {
    choices = alpha.concat(number);

  } else if (lowercaseCheck && uppercaseCheck) {
    choices = alpha.concat(alpha2);

  } else if (numberCheck && uppercaseCheck) {
    choices = number.concat(alpha2);
  }
  // Below are the else if statements for 1 positive option
  else if (specCharCheck) {
    choices = character;
  }
  else if (numberCheck) {
    choices = number;
  }
  else if (lowercaseCheck) {
    choices = alpha;
  }
  // This else if function converts the lowercase letters to uppercase letters
  else if (uppercaseCheck) {
    choices = space.concat(alpha2);
  };

  // The password variable is an array placeholder for user generated amount of length
  var password = [];

  // The code below is the for loop that randomizes the selected variables.
  for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }
  // This joins the password array and converts it to a string
  var ps = password.join("");
  UserInput(ps);
  return ps;
}

// The code below adds the generated password to the output box. 
function UserInput(ps) {
  document.getElementById("password").textContent = ps;

}