// Write a program that prints the largest of 4 inputs taken as input from a user.
let input1 = Number(prompt("Enter input1"))
let input2 = Number(prompt("Enter input2"))
let input3 = Number(prompt("Enter input3"))
let input4 = Number(prompt("Enter input4"))

if (input1 > input2 && input1 > input3 && input1 > input4){
    console.log(`${input1} is the largest`)
}else if (input2 > input1 && input2 > input3 && input2 > input4){
    console.log(`${input2} is the largest`)
}else if (input3 > input1 && input3 > input2 && input3 > input4){
    console.log(`${input3} is the largest`)
}else{
    console.log(`${input4} is the largest`)
}