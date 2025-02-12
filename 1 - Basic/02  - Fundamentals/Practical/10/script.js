let person = {
    name: "vishu",
    age: 21,
}

// shallow copy
// let manager = { ... person};

// deep copy
let manager = JSON.parse(JSON.stringify(person))

manager.age=22
console.log("------------------------")
console.log(person)
console.log("------------------------")
console.log(manager)
console.log("------------------------")