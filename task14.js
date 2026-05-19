// Write a program that takes input of 2 values and adds them. The program should only accept 
// numbers and floats only or otherwise display an error 
// “invalid character entered” and take the user to re-enter the inputs .

let input1 = Number(prompt("Enter input1"))
let input2 = Number(prompt("Enter input2"))
let input3 = Number(input1 + input2)

if (input1 === String || input2 === String){
    console.log("Invalid character entered")
}else{
    console.log(input3)
}