"use strict";
const names = [];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Okay Done");
    }, 2000);
    promise.then((data) => {
        data.split("");
    });
});
///creating generic functions
function merge(obja, objb) {
    return Object.assign(obja, objb);
}
console.log(merge({ name: "mim" }, { age: 30 }));
