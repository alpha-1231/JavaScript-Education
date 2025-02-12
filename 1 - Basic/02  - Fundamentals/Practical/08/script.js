// this is the example of the string in JS
let nam = "josh jagar";
let othernam = 'josh jagar';
let anothernam = `vishu`

// 1. length of the string
console.log("the length of the string is: ", nam.length)

// 2. Accessing items of the string
console.log("the first element of the name is :", nam[0])

// 3. Changing the values to the string
var number = 12;
let new_num = number.toString()
let another_num = String(number)
console.log(typeof (new_num), typeof (another_num))

// 4. Escape character
const paragraph = "\t JavaScript strings are primitive values and are immutable.\n\
This means that modifying a string always results in a new string, leaving the\n\
original string unchanged. To create literal strings, you use either single \n\
quotes (\'\) or double quotes ( \"\ ) like this "

console.log(paragraph)
// 5. String formatting with literals

let sentence =`\hi my name is ${nam} and this is the example of using the template literals`
console.log("The paragrph is:\n",sentence)

// 6. To join the string in JS
console.log("a"+" and "+"b")
let concat = "a"+" and "+"b";
console.log(concat);