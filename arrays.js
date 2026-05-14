let values = [1, 2, 6, "Mangoes", "Berries", true]
console.log(values)

console.log(values[3])
values[5] = false
console.log(values)

// length method
console.log(values.length)

// at()
console.log(values.at(5))
console.log(values.at(-2))

// slice()
console.log(values.slice(2,5))

// adding items with push()
values.push("apples",5,6,8)
console.log(values)

// adding items with unshift-adds items at the start of an array
values.unshift("Peaches","Pear",430)
console.log(values)

// pop()-removing array items 
values.pop()
console.log(values)

// shift()-removing array items at the end
values.shift()
console.log(values)

// includes
console.log(values.includes('Oranges')) //false

//at(
console.log(values.at(3))
console.log(values.at(-2)) //-8

//splice()-adds new items to an array
// syntax example- colors.splice(1,2,"yellow","black")
values.splice(9,0,"phones")
console.log(values)

//concat()-creates a new array by merging existing arrays
let array1 = ["James","Bond"]
let array2 = ["Mary","Smith"]

let array3 = array1.concat(array2)
console.log(array3)




