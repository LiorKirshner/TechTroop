import React from "react";

const Landing = ({ name, hottestItem }) => {
  return (
    <div>
      <h2>Welcome {name}!</h2>
      {hottestItem && (
        <div>
          <h3>🔥 Hottest Item in Store!</h3>
          <p>
            <strong>{hottestItem.item}</strong> : ${hottestItem.price}
          </p>
        </div>
      )}
    </div>
  );
};

export default Landing;
