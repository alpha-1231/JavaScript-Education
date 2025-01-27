console.log("------------------------------")
let nam = 1;
console.log("data type is : ", typeof (nam));
nam = "one";
console.log("data type is : ", typeof (nam));
nam = true
console.log("data type is : ", typeof (nam));

console.log("------------------------------")
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log("------------------------------")


console.log(NaN / 2); // NaN
console.log(NaN == NaN); // false

let a = 'I\'m hungry ,'
let b = 'and bored. '
console.log(a + b)


console.log("------------------------------")
let inProgress = true;
let completed = false;
console.log(typeof completed); // boolean

console.log("------------------------------")
let s = Symbol()
console.log(s.toString())
console.log("------------------------------")

let contact = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '(408)-555-9999',
    address: {
        building: '4000',
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
}

console.log(contact.firstName)
console.log(contact['lastName'])
console.log("------------------------------")
