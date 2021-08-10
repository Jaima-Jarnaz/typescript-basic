"use strict";
//functions
function addnum(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log(`Result` + num);
}
printResult(addnum(5, 12));
//functions as type
let combineValues;
combineValues = add;
console.log(combineValues(6, 5));
let result;
result = add;
console.log("function", result(2, 2));
//function signature
let resultSet;
resultSet = add;
console.log("function type", resultSet(9, 5));
//function callback
function addHandler(n1, cb) {
    const result = n1 * n1;
    cb(result);
}
addHandler(10, (ans) => {
    console.log("result is", ans);
});
