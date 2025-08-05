import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Company from "./component/Company";

function App() {
  const upperCase = (name) => name.toUpperCase();

  let companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 },
  ];

  return (
    <div>
      {companies.map((c) => (
        <Company name={c.name} revenue={c.revenue} key={c.name} />
      ))}
    </div>
  );
}

export default App;
