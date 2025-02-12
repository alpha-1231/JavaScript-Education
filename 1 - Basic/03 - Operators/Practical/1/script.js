let a = 4;
let b = 5;
let obj = {
    valueOf() {
        return 20;
    },
};

ans = obj - b;
console.log(obj.valueOf())

console.log(ans);
