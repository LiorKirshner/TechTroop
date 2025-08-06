import "./App.css";
import React, { useState } from "react";
import Hudini from "./components/Hudini";
import Home from "./components/Home";
import Landing from "./components/Landing";

const App = () => {
  const [data, setData] = useState({
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

  const changePage = (pageName) => {
    setData({ ...data, currentPage: pageName });
  };

  const toggleDiscount = () => {
    setData({ ...data, shouldDiscount: !data.shouldDiscount });
  };

  return (
    <>
      <div className="ex-space">
        <h4 className="ex-title">Exercise 1</h4>
        <div className="exercise" id="ex1"></div>
        <Hudini />
      </div>
      <div className="ex-space">
        <h4 className="ex-title">Exercise 2 - Store Navigation</h4>
        <div className="exercise" id="ex2">
          {/* Navigation Buttons */}
          <div className="nav-buttons">
            <button
              onClick={() => changePage("Landing")}
              className={`nav-button ${
                data.currentPage === "Landing" ? "active" : "inactive"
              }`}
            >
              Landing Page
            </button>
            <button
              onClick={() => changePage("Home")}
              className={`nav-button ${
                data.currentPage === "Home" ? "active" : "inactive"
              }`}
            >
              Store Home
            </button>

            {/* כפתור הנחה רק במצב Store */}
            {data.currentPage === "Home" && (
              <button
                onClick={toggleDiscount}
                className={`discount-button ${
                  data.shouldDiscount ? "on" : "off"
                }`}
              >
                {data.shouldDiscount ? "Discounts ON" : "Discounts OFF"}
              </button>
            )}
          </div>

          {/* Conditional Rendering */}
          {data.currentPage === "Landing" && (
            <Landing
              name={data.user}
              hottestItem={data.store.find((item) => item.hottest)}
            />
          )}

          {data.currentPage === "Home" && (
            <Home store={data.store} shouldDiscount={data.shouldDiscount} />
          )}
        </div>
      </div>
    </>
  );
};

export default App;
