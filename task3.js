// Write a program which gets a phone number from a form input or terminal. Validates the phone number by checking if it starts with +254.. or 07.. or 7… or 254.. or 01... or  1.. Convert the number to start with +254… 
// e.g if a user enters “0712345678”, the program should display “+254712345678”
// e.g if a user enters “0112345678”, the program should display “+254112345678”
// e.g if a user enters “712345678”, the program should display “+254712345678”

let phone = prompt("Enter your phone number:").trim();
let result;

if (phone.startsWith("+254")) {
    result = phone;

} else if (phone.startsWith("254")) {
    result = "+" + phone;

} else if (phone.startsWith("07") || phone.startsWith("01")) {
    result = "+254" + phone.slice(1); // remove the 0, add +254

} else if (phone.startsWith("7") || phone.startsWith("1")) {
    result = "+254" + phone;

} else {
    result = "Invalid phone number";
}

console.log(result);
