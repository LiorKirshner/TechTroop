/*Spot check: given the following array, write a named function outside of a forEach method. 
The function should receive one parameter, person, 
and should increase the person's salary by 300 if their performance was good.*/

let people = [
  { salary: 1300, goodPerformance: false },
  { salary: 1500, goodPerformance: true },
  { salary: 1200, goodPerformance: true },
  { salary: 1700, goodPerformance: false },
  { salary: 1600, goodPerformance: true },
];

function performanceCheck(person) {
  if (person.goodPerformance) {
    person.salary += 300;
  }
}

people.forEach(performanceCheck);
people.forEach((p) => console.log(p.salary)); // 1300, 1800, 1500, 1700, 1900

let users = [
  {
    name: "Leanne Graham",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: { lat: "-37.3159", lng: "81.1496" },
    },
  },
  {
    name: "Ervin Howell",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: { lat: "-43.9509", lng: "-34.4618" },
    },
  },
];
console.log(
  users.map((u) => {
    return { name: u.name, city: u.address.city };
  })
);

let movies = [
  { title: "Dareangel", studio: "Marvel", year: 2023 },
  { title: "Batterfly", studio: "Fox", year: 2021 },
  { title: "League of Ordinary People", studio: "Blizzard", year: 2025 },
  { title: "Thor: Ragnarok", studio: "Marvel", year: 2017 },
];
