import "./App.css";

function App() {
  const getMorningGreeting = () => {
    return <h1>good morning</h1>;
  };
  const getEveningGreeting = () => {
    return <h1>good evening</h1>;
  };

  return (
    <div>
      <div className="ex-space">
        <h4 className="ex-title">Spot-check 2</h4>
        <div className="exercise" id="spotcheck-2">
          {
            /* your code here */

            new Date().getHours() > 19
              ? getEveningGreeting()
              : getMorningGreeting()
          }
        </div>
      </div>
    </div>
  );
}

export default App;
