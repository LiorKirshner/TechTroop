import "./App.css";
import React, { useState } from "react";
import Register from "./components/Register";
import Calendar from "./components/Calender";

const Hot = () => <div style={{ color: "red" }}>🔥 It's HOT! 🔥</div>;
const Cold = () => <div style={{ color: "blue" }}>❄️ It's COLD! ❄️</div>;
const App = () => {
  const [reservations, setReservations] = useState([
    { day: "Monday", time: 2000, name: "Earl" },
    { day: "Monday", time: 1845, name: "Ella" },
    { day: "Tuesday", time: 1930, name: "Linda" },
    { day: "Wednesday", time: 2015, name: "Anni" },
  ]);
  const [temperature, setTemperature] = useState("hot");
  const [likes, setLikes] = useState(0);

  const toggleTemperature = () => {
    setTemperature(temperature === "hot" ? "cold" : "hot");
  };

  const increaseLike = () => {
    setLikes(likes + 1);
  };

  return (
    <>
      <div className="ex-space">
        <h4 className="ex-title">Spotcheck 3</h4>
        <div className="exercise" id="spotcheck-3">
          <div>
            <Calendar reservations={reservations} />
            <Register reservations={reservations} />
            {/* דוגמה של מה יקרה אם לא נעביר props: */}
            {/* <Calendar /> - זה יגרום לשגיאה! */}
          </div>
        </div>
      </div>
      <div className="App">
        {temperature === "hot" ? <Hot /> : <Cold />}
        <button onClick={toggleTemperature}>Change Temp!</button>
      </div>
      <div className="like">
        <div>{likes}</div>
        <button onClick={increaseLike}>Like! 👍</button>
      </div>
    </>
  );
};

export default App;
