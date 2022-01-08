//Assignment code here
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = password;
  var passwordEl = document.querySelector("#password");
  passwordEl.textContent = passwordText
}

 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var spesh = "@#$?!";
  var num = "0123456789";
  var possiblities = [];
  var selectedPassword = "";
  //prompt the user for password criteria
  //  password lenght between 8 and 128

  //  Lower case, uppercase, numbers, special characters
  var length = window.prompt(
    "How long would you like your password to be? (must be between 8 and 128 characters)"
  );
  if (length < 8 || length > 128) {
    alert("Must be between 8 and 128 characters");
    return;
  }
  //Validate input
  //if okay include lower case
  var lowCase = window.confirm("Does your password need Lower Case letters?");
  
  //if okay include upper case
  var upCase = window.confirm("Does your password need Upper Case letters?");
  

  //if okay include special character
  var special = window.confirm("Does you want special characters in your password?");
  

  //if okay include numbers
  var number = window.confirm("Does your password need to include numbers?");
  

  if (!lowCase && !upCase && !special && !number) {
    alert("Must choose at least one of the criteria");
    return;
  }
  if (lowCase) {
    lowCase = lower;
    possiblities = possiblities + lowCase;
  
  }
  if (upCase) {
    upCase = upper;
    possiblities = possiblities + upCase;
  }
  if (special) {
    special = spesh;
    possiblities = possiblities + special;
  }
  if (number) {
    number = num;
    possiblities = possiblities + number;
  }

possiblities =possiblities.split("")
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * possiblities.length);
    var randomLetter = possiblities[randomIndex];
    selectedPassword = selectedPassword + randomLetter;
   
  }
  //display new password
  return selectedPassword;
}
