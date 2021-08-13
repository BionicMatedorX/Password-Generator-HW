// Assignment Code

// var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button

// generateBtn.addEventListener("click", writePassword);

// <--------------------------->

//Creating variables:

var abcLower = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var specialsymbol ="!@#$%^&*" ;

//Convert Strings into Arrays
var abcArray = abcLower.split("");
var numberArray = number.split("");
var symbolyArray = specialsymbol.split("");

//Create Array for Uppercase Letters
var toUpper = function (x) {
    return x.toUpperCase();

};

//The Array (uppecase) is established when applying the above function
var abcArrayUpper = abcArray.map(toUpper);

//Window alert gives user instructions

window.onload = alert("Welcome! Please click Generate Password to begin.");

var password = "";

//Password generation code
function generatePassword() {
    var Password = "";
    var choices = [];

    var passLength = prompt ("How many characters do you want your password to be?");

    if (isNaN(passLength) === true) {
        alert("Please enter a number. \nTry again, click Generate Password.")
    } else if (passLength < 8 || passLength > 128) {
        alert("Password recommended length between 8 and 128 characters.")
        }

    else {
        if (confirm("Should password have uppercase letters?")) {
            // choices = choices.concat(abcArrayUpper)
            Array.prototype.push.apply(choices, abcArrayUpper)
        }   
        if (confirm("Should password have lowercase letters?")) {
            Array.prototype.push.apply(choices, abcArray)
        }
        if (confirm("Should password have numbers?")) {
            Array.prototype.push.apply(choices, numberArray)
        }
        if (confirm("Should password have special characters?")) {
            Array.prototype.push.apply(choices, symbolyArray)
        }
        
        else if (choices.length === 0) {
            alert("Please choose one criteria, \n Please try again")
            return "Try \n again.\n Click \n Generate Password!"
        }
        console.log(choices)

        for (var i = 0; i <passLength; i++) {
            var random = Math.floor(Math.random() * choices.length);
            Password += choices[random];
        }
    }
    return Password;
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
    var Password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = Password;
}

generateBtn.addEventListener("click" , writePassword);
