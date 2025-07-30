let userStorage = [
  { key: "darkMode", value: true },
  { key: "showSideNav", value: false },
  { key: "defaultResultCount", value: 9 },
  { key: "latestMarks", value: { sectionA: 92, sectionB: 11 } },
  {
    key: "cart",
    value: [
      { id: 3112, count: 2 },
      { id: 812, count: 16 },
    ],
  },
];

localStorage.dataThatIsImportant = JSON.stringify(userStorage);

let data = JSON.parse(localStorage.dataThatIsImportant || "[]");

data.forEach((d) => console.log(`${d.key}:`, d.value));
