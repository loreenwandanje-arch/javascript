//Assignment 1: Create an Array
// Create an array named colors with the following elements: 'red', 'green', 'blue'.
 let colors = ["red","green","blue"]

//Assignment 2: Access and Modify Array Elements
// Given the array colors, access the second element and change it to 'pink'. Then, display the modified array.

colors[1] =["pink"]
console.log (colors)

// Assignment 3: Determine the Length of an Array
// Given the array colors, determine its length and store it in a variable lengthOfColors. Then, display lengthOfColors.

let lengthOfColors = colors.length
console.log(lengthOfColors)

//Assignment 4: Use .pop() Method
// Given the array colors, use the .pop() method to remove the last element from the array. Then, display the modified array.
colors.pop()
console.log(colors)

// Assignment 5: Combine Arrays
// Given two arrays arr1 and arr2, combine them into a single array combinedArray using the .concat() method. Then, remove the first element 
// from combinedArray using the .shift() method. Finally, display the modified combinedArray.

// 1
let arr1 = ["Bat","Hockey","Peach","Lilies",5,2,0]
let arr2 = ["black","blue","stone",false]
combinedarray = arr1.concat(arr2)
console.log(combinedarray)

// 2
combinedarray.shift()
console.log(combinedarray)

// Assignment 6: Extract Subarray
// Given an array “sourceArray”, extract a subarray “extractedArray” from index 2 to index 4 using the .slice() method. 
// Then, modify the extractedArray by replacing its elements with 'x', 'y', and 'z' using the .splice() method. Finally, display both the 
// sourceArray and the modified extractedArray.
let sourceArray = [10, 20, 30, 40, 50, 60, 70]
let extractedArray = sourceArray.slice(2, 5)

extractedArray.splice(0, 3, 'x', 'y', 'z')
console.log(sourceArray)
console.log(extractedArray)







