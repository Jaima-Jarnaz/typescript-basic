"use strict";
//ENUM
var Roll;
(function (Roll) {
    Roll["admin"] = "mim";
    Roll[Roll["id"] = 4] = "id";
})(Roll || (Roll = {}));
//objects
const person = {
    name: "jaima",
    age: 25,
    color: ["blue", "black"],
    //role: [24, "engineer"], //tuples
    role: Roll.admin, //enum
};
console.log(person.name);
for (const colors of person.color) {
    console.log(colors);
}
//array
const fruits = ["banana", "mango"];
fruits.push("lichi");
const u1 = {
    name: "Jaima",
    age: 24,
};
