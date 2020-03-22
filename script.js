var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// variable values - characters, numbers, upper & lower case aplphabetical characters
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

alpha2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Choices that were declared outside the if statements to make password
var choices;

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
    pwd = writePassword();
    document.getElementById("password").placeholder = pwd;
});

function writePassword() {
  // Asks for length of password
  enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  // If user does not enter a number
  if (!enter) {
      alert("Please enter a value!");

  } else if (enter < 8 || enter > 128) {
      // If user enters less then 8 or greater than 128 prompt will show
      enter = parseInt(prompt("Please choose between 8 to 128 characters!"));
      
  } else {
      // if user confirms each question
      confirmNumber = confirm("Will password contain numbers?");
      confirmCharacter = confirm("Will password contain special characters?");
      confirmUppercase = confirm("Will password contain uppercase letters?");
      confirmLowercase = confirm("Will password contain lowercase letters?");
  };
  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    choices = alert("You must choose a criteria!");
}

// If all criterias are met
else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

    choices = character.concat(number, alpha, alpha2);
};

// placeholder for the length of the password generated
var password = [];

// random selection of the criteria
for (var i = 0; i < enter; i++) {
  var pickChoices = choices[Math.floor(Math.random() * choices.length)];
  password.push(pickChoices);
}
// joins the array and makes into a string
var pwd = password.join("");
input(pwd);
return pwd;
}

function input(pwd) {
document.getElementById("password").textContent = pwd;

}

