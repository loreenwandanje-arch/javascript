// let x = Number(prompt("Enter a number"))

if (x%2==0){
    console.log ("Even number")
}else{
    console.log("Not an even number")
}

// // write a simple if statement to check eligibilty of a voter(assume a voter must be at least 18 years)
let x = Number (prompt("Please enter your age"))

if (x >= 18){
    console.log("Eligible to vote")
}else{
    console.log("Not eligible")
}

// let num1= Number(prompt("Enter num1"))
// let num2= Number(prompt("Enter num2"))
// let num3= Number(prompt("Enter num3"))

if((num1 > num2) && (num1 > num3)){
    console.log ("Num1 is the largest")
}else if ((num2 > num1) && (num2 > num3)){
    console.log("Num2 is the largest")
}else{
    console.log("Num3 is the largest")
}

// // write a program that determines ticket prices based on age :
// // under 12-500/=,under 18-650/=,aduls-800/=,over 60years-400/=

// // write a program that checks whether the length of a username is at leats 8 characters
// // if length < 8,output "too short" otherwise output "correct format-"
// let username = Number(prompt("Enter Username"))

if (username < 8 ){
    console.log("Too short,try again!")
}else {
    console.log("Correct Format")
}

// // TASK 1
// // Conditional Statement A student’s final grade is determined by their exam score (an number between 0 and 100) using the rules below: 
// // If the score is 70 or above, the grade is A If the score is 60 to 69, the grade is B If the score is 50 to 59, 
// // the grade is C If the score is 40 to 49, the grade is D If the score is below 40, the grade is F Task: Write a JavaScript program that: Stores a student’s score in a variable.
// //  Uses if, else if, and else statements to determine the grade. Prints the grade to the console.

let grade = Number(prompt("Enter your Grade!"))

if ((grade < 0) && (grade > 100)){
    console.log("Invalid Grade Input!Try again!")
}else if (grade >=70){
    console.log("Grade : A")
}else if ((grade >= 60) && (grade <=69)){
    console.log("Grade : B")
}else if ((grade >= 50) && (grade <= 59)){
    console.log ("Grade : C")
}else if ((grade >= 40) && (grade <= 49)){
    console.log ("Grade : D")
}else{
    console.log("Grade : F")
}    

// // TASK 2
// // Create a variable and console log whether a number is odd or even

let num = Number(prompt("Enter A Number"))

if ((num % 2==0)){
    console.log("Even Number")
}else{
    console.log("Odd Number")
}

// // TASK 3
// // Create 3 variables and console log the largest of them. Assume that the user would not enter any two numbers which are the same.
// let num1 = Number(prompt("Enter num1"))
// let num2 = Number(prompt("Enter num2"))
// let num3 = Number(prompt("Enter num3"))

if ((num1 == num2) && (num1 == num3) && (num2 == num3)){
    console.log("Same number!Try Again")
}else if ((num1 > num2) && (num1 > 3)){
    console.log("num1 is the largest")
}else if((num2 > num1) && (num2 > num3)){
    console.log("num2 is the largest")
}else{
    console.log("num3 is the largest")
}

// // TASK 4
// // Create a variable called year and enter the a random year. Check if the year is a leap year or not. 
// // A leap year is a year that is divisible by 4  not divisible by 100 or divisible  by 400.

let year = Number(prompt("Enter a year"))

if ((year % 4 == 0 && year % 100 != 0) || (year % 400 ==0) ){
    console.log("Leap year!")
}
else {
    console.log("Not a Leap Year!")
}

// // TASK 5
// // Take as input from a user the temperature if the temperature is above 30°C display “The temperature is too high”,
// // if the temperature   is above 15 display “Normal temperature” otherwise display “Cold temperature”

let temp = Number(prompt("Enter the temperature"))

if (temp > 30){
    console.log("The temperature is too high")
}else if ((temp > 15) && (temp < 30)){
    console.log("Normal Temperature")
}else{
    console.log("Cold temperature")
}

// // TASK 6
// // Write a js program that checks if a variable x is between 10 and 20 (inclusive) 
// // and if another variable y is greater than 100. If both conditions are true, display"Conditions met", otherwise display"Conditions not met"

let x = Number(prompt("Enter a num1"))
let y = Number(prompt("Enter num2"))

if ((x >= 10) && (x <= 20) && (y > 100)){
    console.log("Conditions met")
}else {
    console.log("Conditions not met")
}

// // TASK 7
// // Write a js program that checks if a variable password is equal 
// // to the string "secret123". If it is, display "Access   granted", otherwise display"Access denied"

let password = prompt("Enter your password")

if (password == "secret123"){
    console.log("Access granted")
}else {
    console.log("Access denied")
}
// // TASK 8
// // Write a js program that checks if a variable student_score is greater than 90. If true, 
// // check if the attendance is greater than 80. If both conditions are true, 
// // display"Excellent student", otherwise display "Good score, but attendance needs improvement"

let student_score = Number(prompt("Enter Student Score"))
let attendance = Number(prompt("Enter student attendance"))
if ((student_score > 90) && (attendance > 80)){
    console.log("Excellent student")
}else{
    console.log("Good score, but attendance needs improvement")
}