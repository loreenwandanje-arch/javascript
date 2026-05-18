// TASK 4: Using Python or PHP or Java or Ruby or JavaScript
// Write a program which accepts email as form input or from terminal. Validate the email by checking if it's a valid email. 
// Hint: Check if it contains an “@” symbol and “.” symbol.
let email = prompt("Enter your email:").trim()

if (email.includes("@") && email.includes(".")) {
    console.log(`${email} is a valid email`)
} else {
    console.log(`${email} is not a valid email`)
}