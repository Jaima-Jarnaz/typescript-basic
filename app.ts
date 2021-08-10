const names: Array<string> = [];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Okay Done");
  }, 2000);

  promise.then((data) => {
    data.split("");
  });
});

///creating generic functions

function merge<T,U>(obja: T, objb: U) {
  return Object.assign(obja, objb);
}

console.log(merge({ name: "mim" }, { age: 30 }));

