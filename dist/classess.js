"use strict";
class Department {
    constructor(n) {
        this.name = n;
    }
    display() {
        console.log("Department Name: ", this.name);
    }
}
class ITDepartment extends Department {
    constructor(departmentName, admins) {
        super(departmentName);
        this.admins = admins;
        this.admins = admins;
    }
    listOfAdmin() {
        this.admins.forEach((element) => {
            console.log("Department Admin: ", element);
        });
        console.log("Total Admins = ", this.admins.length);
    }
}
class Employee extends Department {
    constructor(departmentName, employeeName, employeeId, Report) {
        super(departmentName);
        this.employeeName = employeeName;
        this.employeeId = employeeId;
        this.Report = Report;
        this.employeeName = employeeName;
        this.employeeId = employeeId;
        this.Report = Report;
    }
    get mostRecentReport() {
        return this.Report;
    }
    employeeReports() {
        console.log(`Report of ${this.employeeName} Id:${this.employeeId} Report:${this.mostRecentReport}` // in getter no parenthesis in  method
        );
    }
    addEmployee(name) {
        //   const employeeArray:string[];
        console.log(name);
    }
}
const obj = new Department("Software"); //base
obj.display();
//child
const dObj = new ITDepartment("Department Enterprise", [
    "Jaima",
    "Antor",
    "Tanjina",
]);
dObj.listOfAdmin();
//employee
const empObj = new Employee("Software", "Koli", 11217, "Done work properly");
console.log("Employee Data");
empObj.employeeReports();
