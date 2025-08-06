import "./App.css";
import React, { useState } from "react";
import Hudini from "./components/Hudini";

const App = () => {
  return (
    <>
      <div className="ex-space">
        <h4 className="ex-title">ex1</h4>
        <div className="exercise" id="ex1"></div>
        <Hudini />
      </div>
    </>
  );
};

export default App;
