import "./App.css";
import React, { useState } from "react";
import Hudini from "./components/Hudini";
import Home from "./components/Home";
import Landing from "./components/Landing";

const App = () => {
  const [data] = useState({
    user: "Robyn",
    store: [
      { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
      { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
      {
        item: "Surround Sound Pelican",
        price: 3099,
        discount: 0.05,
        hottest: true,
      },
    ],
    shouldDiscount: false,
    currentPage: "Landing",
  });

  return (
    <>
      <div className="ex-space">
        <h4 className="ex-title">Exercise 1</h4>
        <div className="exercise" id="ex1"></div>
        <Hudini />
      </div>
      <div className="ex-space">
        <h4 className="ex-title">Exercise 2 - Store</h4>
        <div className="exercise" id="ex2"></div>
        <Landing
          name={data.user}
          hottestItem={data.store.find((item) => item.hottest)}
        />
        <Home store={data.store} />
      </div>
    </>
  );
};

export default App;
