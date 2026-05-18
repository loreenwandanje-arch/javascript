// Write a program that lets the user input a password. Give them only 4 attempts to check the passwords entered against
//  “admin@123”. If the password is correct access is granted. After you show them a message , the account is blocked.
let correct_password = "admin@123"
let attempts = 4

for (let i = 0; i < attempts; i++) {
    let password = prompt(`Enter password (${attempts - i} attempts remaining):`)

    if (password === correct_password) {
        console.log("Access granted!")
        break
    } else {
        console.log("Wrong password")
    }

    if (i === attempts - 1) {
        console.log("Account blocked! Too many failed attempts")
    }
}