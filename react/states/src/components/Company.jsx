import React from "react";
import { useState } from "react";

const Company = () => {
  const companiesData = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 },
  ];
  let [companies, setCompanies] = useState(companiesData);

  return (
    <div className="ex-space">
      {companies.map((company) => (
        <div key={company.name}>
          <h3>{company.name}</h3>
          <p>Revenue: ${company.revenue}B</p>
        </div>
      ))}
    </div>
  );
};

export default Company;
