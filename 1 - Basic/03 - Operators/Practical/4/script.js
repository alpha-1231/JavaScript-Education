let obj = {
    name: "vishu",
    valueOf: function () {
        return "23";
    }
}

// console.log(-obj)

let a = 10
let b = 5
a = a++ + b
a++
console.log(a)
b++
console.log(b)
console.log(a)