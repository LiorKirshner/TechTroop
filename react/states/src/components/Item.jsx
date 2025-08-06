import React from "react";

const Item = ({ item, shouldDiscount }) => {
  const originalPrice = item.price;
  const discountedPrice = originalPrice * (1 - item.discount);
  const finalPrice = shouldDiscount ? discountedPrice : originalPrice;

  return (
    <div className="item-card">
      <h3 className="item-title">{item.item}</h3>
      <div>
        {shouldDiscount ? (
          <div>
            <p className="price-original">Original: ${originalPrice}</p>
            <p className="price-discounted">
              Discounted: ${finalPrice.toFixed(2)} (
              {(item.discount * 100).toFixed(0)}% OFF!)
            </p>
          </div>
        ) : (
          <p className="price-regular">Price: ${originalPrice}</p>
        )}
      </div>
      {item.hottest && <span className="hottest-badge">🔥 HOTTEST ITEM!</span>}
    </div>
  );
};

export default Item;
