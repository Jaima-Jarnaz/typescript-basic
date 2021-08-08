//ENUM
enum Roll {
  admin = "mim",
  id = 4,
}
//objects
const person: {
  name: string;
  age: number;
  color: string[];
  //role: [number, string];//tuples
  role: Roll; //enum
} = {
  name: "jaima",
  age: 25,
  color: ["blue", "black"], // array
  //role: [24, "engineer"], //tuples
  role: Roll.admin, //enum
};
console.log(person.name);
for (const colors of person.color) {
  console.log(colors);
}

//array
const fruits: string[] = ["banana", "mango"];
fruits.push("lichi");

//tuples
//role=[1,'mim']

//enum
//enum Task{admin='mim',id=5}

//type aliases
type User = {
  name: string;
  age: number;
};

const u1: User = {
  name: "Jaima",
  age: 24,
};
