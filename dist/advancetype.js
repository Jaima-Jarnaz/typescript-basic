"use strict";
//syudentInfo()
let stu1;
stu1 = {
    studentName: "Jaima",
    age: 24,
};
const e1 = {
    name: "Max",
    date: new Date(),
    priviledge: ["create-web-design"],
};
function StudentData(stu) {
    if ("date" in stu) {
        ///guard
        console.log(" one type of Guards", stu.date);
    }
}
