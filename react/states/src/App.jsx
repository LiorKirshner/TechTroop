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
          <div style={{ marginBottom: "20px" }}>
            <button
              onClick={() => changePage("Landing")}
              style={{
                backgroundColor:
                  data.currentPage === "Landing" ? "#007bff" : "#6c757d",
                marginRight: "10px",
              }}
            >
              Landing Page
            </button>
            <button
              onClick={() => changePage("Home")}
              style={{
                backgroundColor:
                  data.currentPage === "Home" ? "#007bff" : "#6c757d",
              }}
            >
              Store Home
            </button>
          </div>

          {/* Conditional Rendering */}
          {data.currentPage === "Landing" && (
            <Landing
              name={data.user}
              hottestItem={data.store.find((item) => item.hottest)}
            />
          )}

          {data.currentPage === "Home" && <Home store={data.store} />}
        </div>
      </div>
    </>
  );
};

export default App;
