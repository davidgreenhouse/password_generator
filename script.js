// Assignment code here
/* var uppcase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var symbols = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~", "^", "$"]
var confirmUpper;
var cofirmLower;
var confirmNumber;
var confirmSymbol;



function generatePassword () {
    var passwordLength = window.prompt("Choose a password between 8 and 128 characters");
}


if (passwordLength >= 8 || passwordLength <= 128) {
    alert("You have chosen " + passwordLength + " characters.");

} */

var upper = ["A", "B","C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var symbols = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~", "^", "$"]




function generatePassword() {
  var passwordLength = window.prompt("Please choose a password between 8 and 128 characters.");
  
  while (passwordLength < 8 || passwordLength > 128) {
    window.alert("You must choose a password between 8 and 128 characters.");
    generatePassword();
  }
  
  var confirmUp;
  var confirmLow;
  var confirmNum;
  var confirmSym;

  if (passwordLength >= 8 || passwordLength <= 128) {
    alert("You have chosen " + passwordLength + " characters.");
    var confirmUp = confirm("Would you like any uppercase characters?");
    var confirmLow = confirm("Would you like any lowercase characters?");
    var confirmNum = confirm("Would you like any numbers?");
    var confirmSym =confirm("Would you like any special characters?");
  }

  var passwordInput = []

  while (confirmUp === false && confirmLow === false && confirmNum === false && confirmSym === false) {
    alert("Please choose at least one type of character");
    var confirmUp = confirm("Would you like any uppercase characters?");
    var confirmLow = confirm("Would you like any lowercase characters?");
    var confirmNum = confirm("Would you like any numbers?");
    var confirmSym =confirm("Would you like any special characters?");
  }
  
  
  if (confirmUp) {
    passwordInput = passwordInput.concat(upper)
  }
  
  if (confirmLow) {
    passwordInput = passwordInput.concat(lower);
  }
  
  if (confirmNum) {
    passwordInput = passwordInput.concat(numeric);
  }
  
  if (confirmSym) {
    passwordInput = passwordInput.concat(symbols);
  }
  
  console.log(passwordInput)
  

  var newPassword = ""

  for (i = 0; i < passwordLength; i++){
    newPassword = newPassword + passwordInput[Math.floor(Math.random() * passwordInput.length)];
    console.log(newPassword);
  }
    return newPassword;
}

/* if (confirmUp) {
  passwordInput = passwordInput.concat(upper)
}

if (confirmLow) {
  passwordInput = passwordInput.concat(lower);
}


console.log(passwordInput) */



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);