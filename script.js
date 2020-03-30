

var generateBtn = document.querySelector("#generate");
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numeric = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['!', '@', '#', '$', '%', '^', '&', '*'];
var confirmPasswordBaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var confirmUppercase = false;
var comfirmNumeric = false;
var confirmSpecial = false;
var confirmMinLength = 8;
var password = '';

function generatePassword() {

  var confirmCriteria = alert('Password will be between 8 and 128 characters long and requires the use of uppercase letters, lowercase letters, numbers, and special characters. Do you wish to continue?');
  console.log(confirmCriteria);

  var totalChar = prompt('What is the total number of characters you are comfortable remembering? Remember it must be bertween 8 and 128 characters.');
  var desiredLength = [];
  desiredLength.push(totalChar);
  console.log(totalChar);

  if (confirmMinLength < 8 || confirmMinLength > 128) {
    confirmMinLength = prompt('Your choice must meet the length requirements. Chose total number of characters between 8 and 128.');
    desiredLength.push(totalChar);
    console.log(confirmMinLength);
  }

  var confirmUppercase = confirm('Do you consent to using uppercase letters?');
  console.log(confirmUppercase);

  if (confirmUppercase === true) {
    confirmPasswordBaseLetters = confirmPasswordBaseLetters.concat(uppercase);
  }

  var confirmNumeric = confirm('Do we have your permission to use Numbers in your password?');
  console.log(confirmNumeric);

  if (confirmNumeric === true) {
    confirmPasswordBaseLetters = confirmPasswordBaseLetters.concat(numeric);
  }

  var confirmSpecial = confirm('Finally, do you consent to the use of special characters? Such as !,@,#,$,%.');
  console.log(confirmSpecial);

  if (confirmSpecial === true) {
    confirmPasswordBaseLetters = confirmPasswordBaseLetters.concat(special);
  }

  for (var i = 0; i < desiredLength; i++) {
    password = password += confirmPasswordBaseLetters[Math.floor(Math.random() * confirmPasswordBaseLetters.length)]
  }
  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);


