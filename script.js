//Start of the Log
console.log("Log Start");

// Variables to Calculate Age
var currentYear;
let birthYear;

currentYear = 2023; // This is the Current Year
birthYear = 1993;   // Add your Birth Year
let z = currentYear - birthYear;

let monthsLived = z * 12 + " months";

//Display First & Last Name Together
var firstName = "Rohit"; // Add your First Name Here
var lastName = "Bhatia"; // Add your Last Name Here
let fullName = firstName + " " + lastName;

document.querySelector("#name").innerHTML += fullName;
document.querySelector("#age").innerHTML += z;
document.querySelector("#monthsLived").innerHTML += monthsLived;

// Console Logs
console.log("First Name: " + firstName + "\n" + "Last Name: " +lastName);
console.log("Full Name: " + fullName);
console.log("Age: " + z);
console.log("Months Since Birth: " + monthsLived);

//End of the Log
console.log("Log ends");