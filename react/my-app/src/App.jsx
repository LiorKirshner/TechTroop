import "./App.css";
import Ex2 from "./assets/ex/ex2";
import Ex1 from "./assets/ex/ex1";

function App() {
  return (
    <>
      <div className="ex-space">
        <h4 className="ex-title">Exercise 1</h4>
        <div className="exercise" id="ex-1">
          <Ex1 />
        </div>
      </div>
      <div className="ex-space">
        <h4 className="ex-title">Exercise 2</h4>
        <div className="exercise" id="ex-2">
          <Ex2 />
        </div>
      </div>
    </>
  );
}

export default App;
