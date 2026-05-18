// Prompt the user for a number either on a form input or the terminal. Depending on whether the number is even or odd,
//  display  either “odd” or “even” to the user.
//  Hint: how does an even / odd number react differently when divided by 2?\
// If the number is a multiple of 4, print out “divisible by 4”.

let num = Number(prompt("Enter a number:"))
if (num % 2 ==0){
    console.log("Even number")
}else if (num % 4 == 0){
    console.log("divisible by 4")
}else{
    console.log("Odd number")
}
