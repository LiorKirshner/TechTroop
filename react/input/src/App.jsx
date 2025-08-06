import { useState } from "react";
import "./App.css";
import Exercise1 from "./components/Exercise1";
import Exercise2 from "./components/Exercise2";

function App() {
  return (
    <>
      <div className="ex">
        <h4>Ex1</h4>
        <Exercise1 />
      </div>
      <div className="ex">
        <h4>Ex2</h4>
        <Exercise2 />
      </div>
    </>
  );
}

export default App;
