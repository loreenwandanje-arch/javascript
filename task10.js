// Write a program that calculates the total stock in a company from the array/list below if we know that the stock is 
// the last digit in every array/list.
let prods = [["omo","30kshs","300"], ["milk","50kshs","200"], ["bread","45kshs","359"], ["coffee","5kshs","79"]]

let total_stock = 0;

for (let i = 0; i < prods.length; i++) {
    let stock = Number(prods[i][2])
    total_stock += stock
}

console.log(`Total stock: ${total_stock}`)