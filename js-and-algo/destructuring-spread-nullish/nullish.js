let employeesArr = [
  { name: "Joey", id: 1, age: 26 },
  { name: "Lily", id: null, age: 24 },
  { name: "Alice", id: 7, age: null },
  { name: "Sam", id: 8, age: 24 },
  { name: "Ray", id: null, age: null },
];

for (let employ of employeesArr) {
  employ.id ?? console.log(employ.name); // lily,ray
  employ.age ?? console.log(employ.name); // alice,ray
}
