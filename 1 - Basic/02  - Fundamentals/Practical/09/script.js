let obj = {
    name: "vihsu",
    age: "21",
}

// basic printing in the console
console.log(`Hi ${obj.name} , you are ${obj.age} years old. `)

// deleting the object property
delete obj.name
console.log("after deleting the properties.................")
console.log(`Hi ${obj.name} , you are ${obj.age} years old. `)

// updating the object properties
console.log("after updating the properties.................")
obj.name = "Hemanta Bhusal"
console.log(`Hi ${obj.name} , you are ${obj.age} years old. `)

// adding the new properties to the object
obj.other = "obj"
console.log(obj)