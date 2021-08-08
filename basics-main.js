"use strict";
//ENUM
var Roll;
(function (Roll) {
    Roll["admin"] = "mim";
    Roll[Roll["id"] = 4] = "id";
})(Roll || (Roll = {}));
//objects
var person = {
    name: "jaima",
    age: 25,
    color: ["blue", "black"],
    //role: [24, "engineer"], //tuples
    role: Roll.admin, //enum
};
console.log(person.name);
for (var _i = 0, _a = person.color; _i < _a.length; _i++) {
    var colors = _a[_i];
    console.log(colors);
}
//array
var fruits = ["banana", "mango"];
fruits.push("lichi");
var u1 = {
    name: "Jaima",
    age: 24,
};
