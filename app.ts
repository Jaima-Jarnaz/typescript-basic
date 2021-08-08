//functions
function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log(`Result` + num);
}
printResult(add(5, 12));

//functions as type
let combineValues;
combineValues = add;

console.log(combineValues(6, 5));

let result: Function;

result = add;
console.log("function", result(2, 2));

//function signature

let resultSet: (n1: number, n2: number) => number;
resultSet = add;
console.log("function type", resultSet(9, 5));

//function callback

function addHandler(n1: number, cb: (num: number) => void) {
  const result = n1 * n1;
  cb(result);
}

addHandler(10, (ans) => {
  console.log("result is", ans);
});
