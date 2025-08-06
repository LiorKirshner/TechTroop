import React from "react";

const Landing = ({ name, hottestItem }) => {
  return (
    <div>
      <h2>Welcome {name}!</h2>
      {hottestItem && (
        <div>
          <h3>🔥 Hottest Item in Store!</h3>
          <p>
            <strong>{hottestItem.item}</strong>
          </p>
          <p>Price: ${hottestItem.price}</p>
          <p>Discount: {hottestItem.discount * 100}% OFF!</p>
        </div>
      )}
    </div>
  );
};

export default Landing;
