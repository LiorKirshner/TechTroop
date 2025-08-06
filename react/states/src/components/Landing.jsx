import React from "react";

const Landing = ({ name, hottestItem }) => {
  return (
    <div className="landing-container">
      <h2 className="landing-title">Welcome {name}!</h2>
      {hottestItem && (
        <div className="hottest-item-card">
          <h3 className="hottest-item-title">🔥 Hottest Item in Store!</h3>
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
