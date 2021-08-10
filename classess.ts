class Department {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
  display() {
    console.log("Department Name: ", this.name);
  }
}

class ITDepartment extends Department {
  constructor(departmentName: string, public admins: string[]) {
    super(departmentName);
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
  constructor(
    departmentName: string,
    public employeeName: string,
    public employeeId: number,
    private Report: string
  ) {
    super(departmentName);
    this.employeeName = employeeName;
    this.employeeId = employeeId;
    this.Report = Report;
  }
  get mostRecentReport() {
    return this.Report;
  }

  employeeReports() {
    console.log(
      `Report of ${this.employeeName} Id:${this.employeeId} Report:${this.mostRecentReport}` // in getter no parenthesis in  method
    );
  }
  addEmployee(name: string) {
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
