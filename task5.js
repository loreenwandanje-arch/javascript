// TASK 5: Using Python or PHP or Java or Ruby or JavaScript
// Implement a program that takes 3 users  inputs from the terminal or the Browser,
//  and stores them in three variables. Return the largest of the three. Do this without using the the inbuilt max () function!
let num1 = Number(prompt("enter num1:"))
let num2 = Number(prompt("enter num2"))
let num3 = Number(prompt("enter num3"))

if (num1 > num2 && num1 >num3){
    console.log("num1 is the largest")
}else if (num2 > num1 && num2 > num3){
    console.log("num2 is the largest")
}else{
    console.log("num3 is the largest")
}