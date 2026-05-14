let person = {
    name: "Wangari Mathai",
    age: 36,
    address: "123 Nyayo Suites" 
}
console.log(person)

// dot notation-used for keys that follow identifier naming rules
console.log(person.name)
console.log(person.age)
console.log(person["address"])

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

person.name = "Hannah"
console.log(person)

