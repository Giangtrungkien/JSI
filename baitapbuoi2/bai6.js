let student = [
  {
    name: "Duong",
    age: 11,
    hobbies: ["video game", "sleep", "learn"],
  },
  {
    name: "Dong",
    age: 12,
    hobbies: ["video game", "sick", "study"],
  },
  {
    name: "Minh",
    age: 13,
    hobbies: ["video game", "sick", "learn"],
  },
  {
    name: "Thanh",
    age: 9,
    hobbies: ["play game", "sleep", "learn"],
  },
  {
    name: "Hung",
    age: 11,
    hobbies: ["play game", "sick", "study"],
  },
];
//bai 1
let names = [];
for (let i = 0; i < student.length; i++) {
  names.push(student[i].name);
}
let ages = [];
for (let i = 0; i < student.length; i++) {
  names.push(student[i].age);
}
console.log(names, ages);
//bai 2
for (let i = 0; i < student.length; i++) {
  if (student[i].hobbies) {
    console.log(student[i].name + "'s hobbies:");
    for (let j = 0; j < student[i].hobbies.length; j++) {
      console.log("- " + student[i].hobbies[j]);
    }
  } else {
    console.log(student[i].name + "khong co so thich nay");
  }
}
//bai 3
for (let i = 0; i < student.length; i++) {
  if (student[i].hobbies.includes("study")) {
    console.log(student[i].name);
  }
}
//bai 4
student = student.map((person) => {
  if (person.age === 11) {
    return { ...person, age: 15 };
  }
  return person;
});
console.log(student);
