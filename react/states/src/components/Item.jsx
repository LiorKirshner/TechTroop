import React from "react";

const Item = ({ item }) => {
  return (
    <div>
      {item.item} : {item.price}${" "}
    </div>
  );
};

export default Item;
