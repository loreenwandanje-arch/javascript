// Write a program that takes the email and password as input from a user
//  and checks if they are equal to “admin@mail.com” and password is “Admin@123” , 
//  if so then print  “Login is Successful” and if not print “Invalid username or password”.
//  ONLY accept 3 tries after which it notifies you that you have been blocked.

let email = prompt("Enter email")
let password = prompt("Enter password")
let attempts = 0
let max_attempts = 3

if (attempts >= max_attempts){
    console.log("You are BLOCKED!")
}
if (email == "admin@mail.com" && password === "Admin@123"){
    console.log("login successful")
}else{
    console.log("Invalid username or password.TRY AGAIN!")
}