function Ex1() {
  let companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 },
  ];

  const showCompany = (name, revenue) => {
    return (
      <div id={name} key={name}>
        {name} makes {revenue} every year
      </div>
    );
  };

  return (
    <div>
      {companies.map((company) => showCompany(company.name, company.revenue))}
    </div>
  );
}

export default Ex1;
