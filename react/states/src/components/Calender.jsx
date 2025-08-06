function Calendar(props) {
  return (
    <div id="calendar">
      <h4>Calendar</h4>

      {props.reservations.map((res, index) => (
        <div key={res.name} id={res.name}>
          {res.name} has reservation on {res.day} @ {res.time}
        </div>
      ))}
    </div>
  );
}

export default Calendar;
