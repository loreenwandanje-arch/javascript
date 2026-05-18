// Write that prompts the user to input student marks. The input should be between 0 and 100.Then output the correct grade: 
// A > 79 , B - 60 to 79, C  > 49 to 59, D - 40 to 49, E - less 40

let student_marks = Number(prompt("Enter student score:"))

if (student_marks > 100 || student_marks < 0){
    console.log("Invalid score! Try again")
} else if (student_marks > 79){
    console.log("A")
} else if (student_marks >= 60 && student_marks <= 79){
    console.log("B")
} else if (student_marks >= 50 && student_marks <= 59){
    console.log("C")
} else if (student_marks >= 40 && student_marks <= 49){
    console.log("D")
} else {
    console.log("E")
}