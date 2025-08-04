import "./ex2.css";
function Ex2() {
  const getClassName = (temperature) => {
    if (temperature < 15) return "freezing";
    if (temperature < 30) return "fair";
    return "hell-scape";
  };

  const temperature = Math.floor(Math.random() * 46);

  return (
    <div id="weatherBox" className={`weatherBox ${getClassName(temperature)}`}>
      The weather is {getClassName(temperature)} ({temperature}°C)
    </div>
  );
}
export default Ex2;
