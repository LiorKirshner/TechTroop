import React from "react";
import Item from "./Item";

const Home = ({ store, shouldDiscount }) => {
  return (
    <div>
      {store.map((item, index) => (
        <Item key={index} item={item} shouldDiscount={shouldDiscount} />
      ))}
    </div>
  );
};

export default Home;
