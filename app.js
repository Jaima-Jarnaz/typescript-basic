"use strict";
//functions
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result" + num);
}
printResult(add(5, 12));
//functions as type
var combineValues;
combineValues = add;
console.log(combineValues(6, 5));
var result;
result = add;
console.log("function", result(2, 2));
//function signature
var resultSet;
resultSet = add;
console.log("function type", resultSet(9, 5));
//function callback
function addHandler(n1, cb) {
    var result = n1 * n1;
    cb(result);
}
addHandler(10, function (ans) {
    console.log("result is", ans);
});
