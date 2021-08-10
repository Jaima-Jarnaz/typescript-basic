interface Person {
  studentName: string;
  age: number;
}

//syudentInfo()
let stu1: Person;
stu1 = {
  studentName: "Jaima",
  age: 24,
};

type Admin = {
  name: string;
  date: Date;
};
type Student = {
  name: string;
  priviledge: string[];
};

type BothData = Admin & Student; //intersection

const e1: BothData = {
  name: "Max",
  date: new Date(),
  priviledge: ["create-web-design"],
};

function StudentData(stu: BothData) {
  if ("date" in stu) {
    /// type guard
    console.log(" one type of Guards", stu.date);
  }
}
